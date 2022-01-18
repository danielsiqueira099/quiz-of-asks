import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=";

export const get = async (params) => {
  const http = () =>
    axios.create({
      baseURL: baseURL
    });

  await axios;
  http()
    .get(params)
    .then((resp) => console.log(resp.data));

  return {
    http,
    get
  }
};
