import { WalletType } from "./WalletTypes";

/**
 * Request payload for sending a payout
 */
export interface SendPayoutRequest {
  /**
   * Optional secret phrase for wallets with copied secrets
   */
  secretPhrase?: string;
  
  /**
   * Amount to send in USDC
   */
  amount: string;
  
  /**
   * Recipient's wallet address
   */
  recipientAddress: string;
  
  /**
   * Type of wallet to use for the transaction
   */
  walletType: WalletType;
}

/**
 * Response from a successful payout
 */
export interface SendPayoutResponse {
  statusCode: number;
  message: string;
} 