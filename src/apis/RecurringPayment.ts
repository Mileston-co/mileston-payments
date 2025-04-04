import { BaseAPI } from "../core";
import {
  CreateRecurringPaymentPayload,
  CreateRecurringPaymentResponse,
  DeleteRecurringPaymentResponse,
  UpdateRecurringPaymentPayload,
  UpdateRecurringPaymentResponse,
} from "../types";

/**
 * Class representing the Recurring Payment API.
 */
export class RecurringPayment extends BaseAPI {
  /**
   * The default base URL for the Recurring Payment API.
   * @private
   */
  private static defaultBaseURL =
    "https://recurring-service.mileston.co/recurring-payment";

  /**
   * Constructor for Recurring Payment API.
   * @param apiKey - The API key for authentication.
   * @param businessId - The business ID to identify the user’s business.
   */
  constructor(apiKey: string, businessId: string) {
    // Pass the default baseURL, apiKey, and businessId to the BaseAPI constructor
    super(apiKey, businessId, RecurringPayment.defaultBaseURL);
  }

  /**
   * Create a new Recurring Payment.
   * @param businessName - Your Business Name
   * @param payload - The data to create the recurring payment.
   * @returns The created Recurring Payment details.
   */
  async create(
    businessName: string,
    payload: CreateRecurringPaymentPayload
  ): Promise<CreateRecurringPaymentResponse> {
    const data = { ...payload };
    if (payload.addPdf === undefined) {
      data.addPdf = true;
    }
    return this.request({
      endpoint: `/create?businessName=${businessName}`,
      method: "POST",
      data,
    });
  }

  /**
   * Retrieve a Recurring Payment by ID.
   * @param id - The ID of the recurring payment.
   * @returns The Recurring Payment details.
   */
  async get(id: string): Promise<UpdateRecurringPaymentResponse> {
    return this.request({
      endpoint: `/${id}`,
      method: "GET",
    });
  }

  /**
   * Retrieve a Recurring Payments by specifying a limited number.
   * @param limit - The limit of the recurring payments you want to retrieve.
   * @returns The Recurring Payments details.
   */
  async getAll(limit: number): Promise<UpdateRecurringPaymentResponse> {
    return this.request({
      endpoint: `?limit=${limit}`,
      method: "GET",
    });
  }

  /**
   * Update an existing Recurring Payment.
   * @param payload - The data to update the recurring payment.
   * @returns The updated Recurring Payment details.
   */
  async update(
    payload: UpdateRecurringPaymentPayload
  ): Promise<UpdateRecurringPaymentResponse> {
    return this.request({
      endpoint: `/update`,
      method: "PATCH",
      data: payload,
    });
  }

  /**
   * Delete a Recurring Payment by ID.
   * @param id - The ID of the recurring payment.
   * @returns A success message or an error.
   */
  async delete(id: string): Promise<DeleteRecurringPaymentResponse> {
    return this.request({
      endpoint: `/delete/${id}`,
      method: "DELETE",
    });
  }
}
