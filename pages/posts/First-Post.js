import Link from "next/link";

const FirstPost = () => (
  <>
    <h1>FirstPost</h1>
    <h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <br />
      <a href="/">Back to Home tag a</a>
    </h2>
  </>
);

export default FirstPost;
