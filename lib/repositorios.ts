import axios from "axios";

export const getRepos: any = async () => {
  const { data } = await axios(
    "https://api.github.com/users/MatheusPalinkas/repos"
  );

  return data;
};

export const getReposNames = async () => {
  const repos = await getRepos();

  return repos.map((repo) => ({
    params: {
      name: repo.name,
    },
  }));
};

export const getRepoByName = async (name: string) => {
  const { data } = await axios(
    `https://api.github.com/repos/MatheusPalinkas/${name}`
  );

  return data;
};
