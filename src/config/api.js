import React from "react";
import axios from "axios";
import { imgKeyId, imgKeySecret } from "../../config/keys";
axios.defaults.baseURL = "http://localhost:3000";

export const fetchSearchGallery = () => {
  axios({
    method: "get",
    url:
      "https://api.imgur.com/3/gallery/search/top/week/1?q_all=" +
      this.state.searchString,
    headers: { authorization: "Client-ID " + imgKeyId }
  })
    .then(response => {
      var x = JSON.parse(JSON.stringify(response.data.data));
      console.log(response.data.data);
      let images = [...x];

      return images;
    })
    .catch(error => {
      console.log(error);
    });
};
