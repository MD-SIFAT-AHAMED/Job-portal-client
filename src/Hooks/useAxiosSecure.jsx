import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { user, userSignOut } = useAuth();
  //Request Interceptor
  AxiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  //Response Interceptior
  AxiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        userSignOut()
          .then(() => {
            console.log("Sign out user for 401 status code");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );
  return AxiosInstance;
};

export default useAxiosSecure;
