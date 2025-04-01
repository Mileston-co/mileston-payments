export type CurrentPaymentStatus = "paid" | "unpaid";

/**
 * @interface CreateRecurringPaymentPayload
 * @description Represents the structure for creating a recurring payment.
 */
export interface CreateRecurringPaymentPayload {
  /**
   * @property {string} amount
   * @description The amount to be charged in the recurring payment.
   */
  amount: string;

  /**
   * @property {string} subscriptionName
   * @description The name of the subscription for the recurring payment. e.g. Premium Plan.
   */
  subscriptionName: string;

  /**
   * @property {string} subscriberFullName
   * @description The full name of the subscriber for the recurring payment.
   */
  subscriberFullName: string;

  /**
   * @property {string} subscriberEmail
   * @description The email address of the subscriber.
   */
  subscriberEmail: string;

  /**
   * @property {string} [subscriberWalletAddress]
   * @description The wallet address of the subscriber. Optional.
   */
  subscriberWalletAddress?: string;

  /**
   * @property {CurrentPaymentStatus} [currentPaymentStatus]
   * @description The current payment status. Can be either "paid" or "unpaid". Optional.
   */
  currentPaymentStatus?: CurrentPaymentStatus;

  /**
   * @property {Date} recurringDate
   * @description The date when the recurring payment starts.
   */
  recurringDate: Date;

  /**
   * @property {number} recurringInterval
   * @description The interval (in days) for the recurring payment.
   */
  recurringInterval: number;

  /**
   * @property {boolean} [pdf]
   * @description Whether to generate a PDF for the recurring payment. Defaults to true.
   */
  pdf?: boolean;
}

/**
 * @interface UpdateRecurringPaymentPayload
 * @description Represents the structure for updating a recurring payment.
 */
export interface UpdateRecurringPaymentPayload {
  /**
   * @property {string} recurringPaymentId
   * @description The unique identifier of the recurring payment to be updated.
   */
  recurringPaymentId: string;

  /**
   * @property {string} [amount]
   * @description The updated amount to be charged in the recurring payment. Optional.
   */
  amount?: string;

  /**
   * @property {string} subscriptionName
   * @description The name of the subscription for the recurring payment. e.g. Premium Plan.
   */
  subscriptionName?: string;

  /**
   * @property {string} [subscriberFullName]
   * @description The updated full name of the subscriber. Optional.
   */
  subscriberFullName?: string;

  /**
   * @property {string} [subscriberEmail]
   * @description The updated email address of the subscriber. Optional.
   */
  subscriberEmail?: string;

  /**
   * @property {string} [subscriberWalletAddress]
   * @description The updated wallet address of the subscriber. Optional.
   */
  subscriberWalletAddress?: string;

  /**
   * @property {CurrentPaymentStatus} [currentPaymentStatus]
   * @description The updated current payment status. Can be either "paid" or "unpaid". Optional.
   */
  currentPaymentStatus?: CurrentPaymentStatus;

  /**
   * @property {Date} [recurringDate]
   * @description The updated date for the recurring payment. Optional.
   */
  recurringDate?: Date;

  /**
   * @property {number} [recurringInterval]
   * @description The updated interval (in days) for the recurring payment. Optional.
   */
  recurringInterval?: number;
}

/**
 * @interface CreateRecurringPaymentResponse
 * @description Represents the response structure for creating a recurring payment.
 */
export interface CreateRecurringPaymentResponse {
  /**
   * @property {number} statusCode
   * @description The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * @property {string} message
   * @description A message indicating the result of the operation.
   */
  message: string;

  /**
   * @property {CreateRecurringPaymentPayload} recurringPaymentData
   * @description The data of the newly created recurring payment.
   */
  recurringPaymentData: UpdateRecurringPaymentPayload;
}

/**
 * @interface UpdateRecurringPaymentResponse
 * @description Represents the response structure for updating a recurring payment.
 */
export interface UpdateRecurringPaymentResponse {
  /**
   * @property {number} statusCode
   * @description The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * @property {string} message
   * @description A message indicating the result of the operation.
   */
  message: string;

  /**
   * @property {UpdateRecurringPaymentPayload} recurringPaymentData
   * @description The data of the updated recurring payment.
   */
  recurringPaymentData: UpdateRecurringPaymentPayload;
}

/**
 * @interface GetAllRecurringPaymentResponse
 * @description Represents the response structure for retrieving all recurring payments.
 */
export interface GetAllRecurringPaymentResponse {
  /**
   * @property {number} statusCode
   * @description The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * @property {string} message
   * @description A message indicating the result of the operation.
   */
  message: string;

  /**
   * @property {UpdateRecurringPaymentPayload[]} recurringPaymentData
   * @description An array of data representing all recurring payments.
   */
  recurringPaymentData: UpdateRecurringPaymentPayload[];
}

/**
 * @interface DeleteRecurringPaymentResponse
 * @description Defines the structure of the response returned when a recurring payment is deleted.
 */
export interface DeleteRecurringPaymentResponse {
  /**
   * @property {number} statusCode - The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * @property {string} message - A descriptive message about the result of the operation.
   */
  message: string;
}
