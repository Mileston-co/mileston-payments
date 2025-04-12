/**
 * @interface CreateInvoicePayload
 * @description Defines the structure for creating an invoice.
 */
export interface CreateInvoicePayload {
  /**
   * @property {string} amount
   * @description The amount to be charged in the invoice.
   */
  amount: string;

  /**
   * @property {string} itemName
   * @description The name of the item or service for which the invoice is being created.
   */
  itemName: string;

  /**
   * @property {string} customerEmail
   * @description The email address of the customer receiving the invoice.
   * @example "customer@example.com"
   */
  customerEmail: string;

  /**
   * @property {Date} dueDate
   * @description The due date for payment of the invoice.
   * @example new Date("2025-01-31")
   */
  dueDate: Date;

  /**
   * @property {boolean} [addPdf]
   * @description Whether to generate a PDF for the invoice. Optional.
   */
  addPdf?: boolean;
}

/**
 * @interface UpdateInvoicePayload
 * @description Defines the structure for updating an invoice. All fields, except `invoiceId`, are optional.
 */
export interface UpdateInvoicePayload {
  /**
   * @property {string} invoiceId
   * @description The unique identifier of the invoice to be updated. This field is required.
   */
  invoiceId: string;

  /**
   * @property {string} [amount]
   * @description The updated amount to be charged in the invoice. Optional.
   */
  amount?: string;

  /**
   * @property {string} [itemName]
   * @description The updated name of the item or service in the invoice. Optional.
   */
  itemName?: string;

  /**
   * @property {string} [customerEmail]
   * @description The updated email address of the customer receiving the invoice. Optional.
   * @example "customer@example.com"
   */
  customerEmail?: string;

  /**
   * @property {Date} [dueDate]
   * @description The updated due date for payment of the invoice. Optional.
   * @example new Date("2025-01-31")
   */
  dueDate?: Date;

  /**
   * @property {boolean} [addPdf]
   * @description Whether to generate a PDF for the invoice. Optional.
   */
  addPdf?: boolean; // Added addPdf field
}

/**
 * @interface CreateInvoiceResponse
 * @description Represents the response structure for creating an invoice.
 */
export interface CreateInvoiceResponse {
  /**
   * @property {number} statusCode
   * @description The HTTP status code for the response.
   */
  statusCode: number;

  /**
   * @property {string} message
   * @description A message indicating the result of the invoice creation operation.
   */
  message: string;

  /**
   * @property {string} invoiceLink
   * @description A link to access the created invoice.
   */
  invoiceLink: string;

  /**
   * @property {CreateInvoicePayload} invoiceData
   * @description The details of the created invoice.
   */
  invoiceData: UpdateInvoicePayload;
}

/**
 * @interface UpdateInvoiceResponse
 * @description Represents the response structure for updating an invoice.
 */
export interface UpdateInvoiceResponse {
  /**
   * @property {number} statusCode
   * @description The HTTP status code for the response.
   */
  statusCode: number;

  /**
   * @property {string} message
   * @description A message indicating the result of the invoice update operation.
   */
  message: string;

  /**
   * @property {string} invoiceLink
   * @description A link to access the updated invoice.
   */
  invoiceLink: string;

  /**
   * @property {UpdateInvoicePayload} invoiceData
   * @description The details of the updated invoice.
   */
  invoiceData: UpdateInvoicePayload;
}

/**
 * @interface GetAllInvoiceResponse
 * @description Represents the response structure for retrieving all invoices.
 */
export interface GetAllInvoiceResponse {
  /**
   * @property {number} statusCode
   * @description The HTTP status code for the response.
   */
  statusCode: number;

  /**
   * @property {string} message
   * @description A message indicating the result of the invoice retrieval operation.
   */
  message: string;

  /**
   * @property {UpdateInvoicePayload[]} invoiceData
   * @description An array containing the details of all invoices.
   */
  invoiceData: UpdateInvoicePayload[];
}

/**
 * @interface DeleteInvoiceResponse
 * @description Defines the structure of the response returned when an invoice is deleted.
 */
export interface DeleteInvoiceResponse {
  /**
   * @property {number} statusCode - The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * @property {string} message - A descriptive message about the result of the operation.
   */
  message: string;
}
