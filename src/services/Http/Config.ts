import qs from "qs";
import { PathLike } from "fs";
import { AxiosRequestConfig } from "axios";

/**
 * Default axios request configuration
 */
export const httpConfig: AxiosRequestConfig = {
  timeout: 30000,
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
  paramsSerializer: (params: PathLike) =>
    qs.stringify(params, { indices: false }),
};
