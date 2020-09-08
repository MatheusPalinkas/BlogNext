import axios from "axios";

export const getRepos: any = async () => {
  const { data } = await axios(
    "https://api.github.com/users/MatheusPalinkas/repos"
  );

  return data;
};
