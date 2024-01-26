/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  params: {
    geo: "IN",
    lang: "en",
  },
  headers: {
    "X-RapidAPI-Key": "74fe885b06msh2536fb1b5ac97cep140e53jsn137e9da9effe",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
