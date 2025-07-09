import { BaseAPI } from "../core/BaseAPI";
import { 
  CreateSubWalletPayload,
  SendFundsPayload,
  SendFundsResponse,
  CreateSubWalletResponseData,
  CreateNewSubWalletResponseData,
  GetSubWalletResponseData,
  WalletResponse,
  BatchPaymentPayload,
  BatchPaymentResponse,
  TransactionStatusResponse
} from "../types/WalletTypes";

export class Wallet extends BaseAPI {
  private static defaultBaseURL = "https://user-service.mileston.co/user";

  constructor(apiKey: string, businessId: string, secretKey: string) {
    super(apiKey, businessId, Wallet.defaultBaseURL, secretKey);
  }

  /**
   * Send a payment from the main wallet
   * @param payload - The payment details
   * @returns The payment response
   */
  async sendPayment(payload: SendFundsPayload): Promise<SendFundsResponse> {
    return this.request({
      endpoint: "/send-payment",
      method: "POST",
      data: payload
    });
  }

  /**
   * Create a new sub wallet
   * @returns The created sub wallet details
   */
  async createSubWallet(): Promise<CreateSubWalletResponseData> {
    return this.request({
      endpoint: "/sub-wallet",
      method: "POST"
    });
  }

  /**
   * Create a new sub wallet with specific type
   * @param payload - The sub wallet creation details
   * @returns The created sub wallet details
   */
  async createNewSubWallet(payload: CreateSubWalletPayload): Promise<CreateNewSubWalletResponseData> {
    return this.request({
      endpoint: "/sub-wallet/create",
      method: "POST",
      data: payload
    });
  }

  /**
   * Get details of a specific sub wallet
   * @param subWalletUuid - The UUID of the sub wallet
   * @returns The sub wallet details
   */
  async getSubWallet(subWalletUuid: string): Promise<GetSubWalletResponseData> {
    return this.request({
      endpoint: `/sub-wallet/${subWalletUuid}`,
      method: "GET"
    });
  }

  /**
   * Get all sub wallets
   * @returns List of all sub wallets
   */
  async getAllSubWallets(): Promise<WalletResponse> {
    return this.request({
      endpoint: "/sub-wallet/all",
      method: "GET"
    });
  }

  /**
   * Send funds from a specific sub wallet
   * @param subWalletUuid - The UUID of the sub wallet
   * @param payload - The payment details
   * @returns The payment response
   */
  async sendFunds(subWalletUuid: string, payload: SendFundsPayload): Promise<SendFundsResponse> {
    return this.request({
      endpoint: `/sub-wallet/${subWalletUuid}/send`,
      method: "POST",
      data: payload
    });
  }

  /**
   * Deletes a sub wallet
   * @param subWalletUuid - UUID of the sub wallet to delete
   * @returns Promise resolving to the delete response
   */
  async deleteSubWallet(subWalletUuid: string): Promise<WalletResponse> {
    return this.request({
      endpoint: `/sub-wallet/${subWalletUuid}`,
      method: "DELETE"
    });
  }

  /**
   * Send batch payments from the main wallet
   * @param payload - The batch payment details
   * @returns The batch payment response
   */
  async batchPayment(payload: BatchPaymentPayload): Promise<BatchPaymentResponse> {
    return this.request({
      endpoint: "/batch-payment",
      method: "POST",
      data: payload
    });
  }

  /**
   * Get transaction status by UUID
   * @param transactionUuid - The UUID of the transaction to check
   * @returns The transaction status response
   */
  async getTransactionStatus(transactionUuid: string): Promise<TransactionStatusResponse> {
    return this.request({
      endpoint: `/transaction-status/${transactionUuid}`,
      method: "GET"
    });
  }
} 