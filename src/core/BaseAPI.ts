import axios, { AxiosInstance } from "axios";
import { RequestConfig } from "../types";

/**
 * @class BaseAPI
 * @description 
 * A base class for interacting with REST APIs. This class handles authentication, 
 * request configuration, and provides a method to send HTTP requests using Axios.
 *
 * Subclasses should extend `BaseAPI` to define specific API endpoints and methods.
 *
 * @example
 * // Example usage in a subclass:
 * class PaymentLinkAPI extends BaseAPI {
 *   async createPaymentLink(data: { amount: number; currency: string }) {
 *     return this.request({
 *       endpoint: "/payment-links",
 *       method: "POST",
 *       data,
 *     });
 *   }
 * }
 *
 * const paymentLinkAPI = new PaymentLinkAPI("API_KEY", "BUSINESS_ID", "https://api.example.com");
 * paymentLinkAPI.createPaymentLink({ amount: 100, currency: "USD" });
 */
export class BaseAPI {
  /**
   * @property {string} apiKey
   * @private
   * @description The API key used for authenticating requests.
   */
  private apiKey: string;

  /**
   * @property {string} businessId
   * @private
   * @description The business ID used to associate requests with a specific business.
   */
  private businessId: string;

  /**
   * @property {AxiosInstance} client
   * @private
   * @description An instance of Axios pre-configured with authentication headers and base URL.
   */
  private client: AxiosInstance;

  /**
   * @constructor
   * @param {string} apiKey - The API key for authenticating requests.
   * @param {string} businessId - The business ID to associate with requests.
   * @param {string} baseURL - The base URL for the API endpoints.
   * @description Initializes a new instance of the `BaseAPI` class.
   */
  constructor(apiKey: string, businessId: string, baseURL: string) {
    this.apiKey = apiKey;
    this.businessId = businessId;

    this.client = axios.create({
      baseURL,
      headers: {
        "apikey": this.apiKey,
        "businessid": this.businessId,
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Sends an HTTP request to the API.
   *
   * @protected
   * @template T
   * @param {RequestConfig} config - The configuration for the HTTP request.
   * @param {string} config.endpoint - The endpoint for the API (e.g., `/create`).
   * @param {"GET" | "POST" | "PATCH" | "DELETE"} config.method - The HTTP method to use.
   * @param {Record<string, any>} [config.data] - Optional request payload.
   * @returns {Promise<T>} - A promise that resolves to the API response.
   *
   * @throws {Error} Throws an error if the request fails.
   *
   * @example
   * const response = await this.request({
   *   endpoint: "/endpoint",
   *   method: "POST",
   *   data: { key: "value" },
   * });
   */
  protected async request<T>({ endpoint, method, data }: RequestConfig): Promise<T> {
    try {
      const url = this.client.defaults.baseURL + endpoint;

      const response = await this.client.request<T>({
        url: endpoint,
        method,
        data: { ...data },
      });
      return response.data;
    } catch (error: any) {
      console.error(error)
      throw new Error(error.response?.data?.message || error);
    }
  }
}
