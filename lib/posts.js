import fs from "fs";
import path from "path";
import remark from "remark";
import reHtml from "remark-html";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostNames() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       name: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       name: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => ({
    params: {
      name: fileName.replace(/\.md$/, ""),
    },
  }));
}

export async function getPostData(name) {
  const fullPath = path.join(postsDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(reHtml)
    .process(matterResult.content);
  const content = processedContent.toString();

  // Combine the data with the name
  return {
    name,
    content,
    ...matterResult.data,
  };
}
