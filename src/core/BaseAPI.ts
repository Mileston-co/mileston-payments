import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestConfig } from "../types";
import crypto from "crypto";

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
   * @property {string} secretKey
   * @private
   * @description The secret key used for generating HMAC signatures.
   */
  private secretKey?: string;

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
   * @param {string} secretKey - The secret key used for generating HMAC signatures.
   * @description Initializes a new instance of the `BaseAPI` class.
   */
  constructor(apiKey: string, businessId: string, baseURL: string, secretKey?: string) {
    this.apiKey = apiKey;
    this.businessId = businessId;
    this.secretKey = secretKey;

    this.client = axios.create({
      baseURL,
      headers: {
        "apikey": this.apiKey,
        "businessid": this.businessId,
        "Content-Type": "application/json",
      },
    });
  }

  private generateSignature(data: any): string {
    if (!this.secretKey) return '';
    
    // For requests with data, use the data payload
    if (data) {
      const stringifiedData = JSON.stringify(data);
      return crypto
        .createHmac('sha256', this.secretKey)
        .update(stringifiedData)
        .digest('hex');
    }
    
    // For GET requests without data, use empty object to match server expectation
    const stringifiedData = JSON.stringify({});
    return crypto
      .createHmac('sha256', this.secretKey)
      .update(stringifiedData)
      .digest('hex');
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
      const signature = this.generateSignature(data);
      
      const config: AxiosRequestConfig = {
        url: endpoint,
        method,
        data: { ...data },
        headers: {
          ...(signature && { 'x-request-signature': signature })
        }
      };
      
      const response = await this.client.request<T>(config);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response?.data?.message || error);
    }
  }
}
