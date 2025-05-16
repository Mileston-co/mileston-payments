import { BaseAPI } from "../core/BaseAPI";
import { SendPayoutRequest, SendPayoutResponse } from "../types";

/**
 * @class PayoutAPI
 * @extends {BaseAPI}
 * @description
 * API client for handling payouts in the Mileston platform.
 * This class provides methods for sending payments to recipients.
 *
 * @example
 * const payout = new PayoutAPI("API_KEY", "BUSINESS_ID");
 * await payout.sendPayment({
 *   amount: "100",
 *   recipientAddress: "0x...",
 *   walletType: "eth"
 * });
 */
export class PayoutAPI extends BaseAPI {
  /**
   * @constructor
   * @param {string} apiKey - The API key for authentication
   * @param {string} businessId - The business ID associated with the account
   * @description Creates a new instance of the PayoutAPI
   */
  constructor(apiKey: string, businessId: string) {
    super(apiKey, businessId, "https://user-service.mileston.co");
  }

  /**
   * Sends a payment to a recipient
   * 
   * @param {SendPayoutRequest} data - The payment details
   * @returns {Promise<SendPayoutResponse>} The response from the payment request
   * 
   * @throws {Error} If the payment fails or if there's an API error
   * 
   * @example
   * const response = await payout.sendPayment({
   *   amount: "100",
   *   recipientAddress: "0x...",
   *   walletType: "eth"
   * });
   */
  async sendPayment(data: SendPayoutRequest): Promise<SendPayoutResponse> {
    return this.request<SendPayoutResponse>({
      endpoint: "/user/send-payment",
      method: "POST",
      data,
    });
  }
} 