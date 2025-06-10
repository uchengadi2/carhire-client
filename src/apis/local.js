import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:9903/api/v1", //for the localhost
  baseURL: "https://api.3starspluto.com.ng/api/v1", // for production
});
