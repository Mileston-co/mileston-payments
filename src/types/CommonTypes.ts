/**
 * @interface RequestConfig
 * @description Defines the structure of the request configuration object.
 */
export interface RequestConfig {
  /**
   * @property {string} endpoint - The endpoint path for the API (e.g., `/create`, `/delete`).
   */
  endpoint: string;

  /**
   * @property {"GET" | "POST" | "PATCH" | "DELETE"} method - The HTTP method to use.
   */
  method: "GET" | "POST" | "PATCH" | "DELETE";

  /**
   * @property {Record<string, any>} [data] - The request payload, if any.
   */
  data?: Record<string, any>;
}


export interface RequestConfig {
  endpoint: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: Record<string, any>;
}