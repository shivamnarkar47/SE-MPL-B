import axios from "axios";
//Production URL
// export const baseURL = "https://se-mpl-b-xgtf.onrender.com/";
//Development URL
export const baseURL = "http://localhost:8000/";
interface requestProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: any;
  headers?: any;
}

export const request = ({ method, url, data, headers }: requestProps) => {
  return axios({
    method,
    url: baseURL + url + "/",
    data,
    headers,
  });
};
