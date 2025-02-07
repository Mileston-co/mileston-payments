import { BaseAPI } from "../core";
import { 
  CreatePaymentLinkPayload, 
  CreatePaymentLinkResponse, 
  DeletePaymentLinkResponse, 
  UpdatePaymentLinkPayload, 
  UpdatePaymentLinkResponse 
} from "../types";

/**
 * Class representing the Payment Link API.
 */
export class PaymentLink extends BaseAPI {
  /**
   * The default base URL for the Payment Link API.
   * @private
   */
  private static defaultBaseURL = "https://payment-service.mileston.co/payment-link";

  /**
   * Constructor for PaymentLink API.
   * @param apiKey - The API key for authentication.
   * @param businessId - The business ID to identify the user’s business.
   */
  constructor(apiKey: string, businessId: string) {
    // Pass the default baseURL, apiKey, and businessId to the BaseAPI constructor
    super(apiKey, businessId, PaymentLink.defaultBaseURL);
  }

  /**
   * Create a new Payment Link.
   * @param payload - The data to create the payment link.
   * @returns The created Payment Link details.
   */
  async create(payload: CreatePaymentLinkPayload): Promise<CreatePaymentLinkResponse> {
    return this.request({
      endpoint: "/create",
      method: "POST",
      data: payload,
    });
  }

  /**
   * Retrieve a Payment Link by ID.
   * @param id - The ID of the payment link.
   * @returns The Payment Link details.
   */
  async get(id: string): Promise<UpdatePaymentLinkResponse> {
    return this.request({
      endpoint: `/${id}`,
      method: "GET",
    });
  }

  /**
 * Retrieve a Payment Links by specifying a limited number.
 * @param limit - The limit of the payment links you want to retrieve.
 * @returns The Payment Link details.
 */
  async getAll(limit: number): Promise<UpdatePaymentLinkResponse> {
    return this.request({
      endpoint: `?limit=${limit}`,
      method: "GET",
    });
  }

  /**
   * Update an existing Payment Link.
   * @param payload - The data to update the payment link.
   * @returns The updated Payment Link details.
   */
  async update(payload: UpdatePaymentLinkPayload): Promise<UpdatePaymentLinkResponse> {  // Changed from PaymentLinkResponse to CreatePaymentLinkResponse
    return this.request({
      endpoint: `/update`,
      method: "PATCH",
      data: payload,
    });
  }

  /**
   * Delete a Payment Link by ID.
   * @param id - The ID of the payment link.
   * @returns A success message or an error.
   */
  async delete(id: string): Promise<DeletePaymentLinkResponse> {
    return this.request({
      endpoint: `/delete/${id}`,
      method: "DELETE",
    });
  }
}
