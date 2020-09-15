import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";
import { httpConfig } from "./Config";
import { HttpError } from "./Errors";
import { store } from "store";

/**
 * Axios HTTP Client
 */
export abstract class HttpClient {
  protected readonly client: AxiosInstance;

  /**
   * Initializes and configures client
   *
   * @param config Axios request configuration
   */
  public constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config ?? httpConfig);
    this.initializeInterceptors();
  }

  /**
   * Axios response error interceptor
   *
   * @params Error from axios response
   * @returns Error message from request or default message
   */
  private handleError(err: AxiosError<any>) {
    return Promise.reject(new HttpError(err?.response?.data?.error));
  }

  /**
   * Set axios request and response interceptors
   */
  private initializeInterceptors() {
    this.client.interceptors.request.use((param: AxiosRequestConfig) => {
      let config = {
        baseUrl: process.env.REACT_APP_API_BASE_URL,
        ...param,
      };

      const token = store.getState().auth.token;
      const isApiCall = config.baseUrl === process.env.REACT_APP_API_BASE_URL;
      if (token && isApiCall) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    }, this.handleError);
    this.client.interceptors.response.use(
      (r): AxiosResponse => r,
      this.handleError
    );
  }
}
