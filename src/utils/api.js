import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyADUpGI_T1gW0Pyxlo-nfzMsBi8mgFfDcs",
  cx: "37613e087475a4e9f",
};

export const fetchDataFromApi = async (payload) => {
  const res = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return res.data;
};
