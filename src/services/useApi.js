import axios from "axios";

export default function useApi() {
  const get = (params) =>
    axios
      .get(`https://opentdb.com/api.php?amount=${params}`)
      .then((resp) => resp.data);

  return {
    get,
  };
}
