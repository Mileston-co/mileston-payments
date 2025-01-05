/**
 * @interface CreatePaymentLinkPayload
 * @description Defines the structure for creating a Payment Link with optional attributes.
 */
export interface CreatePaymentLinkPayload {
    /**
     * @property {string} amount - The amount to charge in the payment link.
     */
    amount: string;

    /**
     * @property {string} [title] - The title of the payment link. Optional.
     */
    title?: string;

    /**
     * @property {string} [description] - A description for the payment link. Optional.
     */
    description?: string;

    /**
     * @property {string} [redirectUrl] - URL to redirect after payment completion. Optional.
     */
    redirectUrl?: string;

    /**
     * @property {string} [logoUrl] - URL for the logo to display on the payment page. Optional.
     */
    logoUrl?: string;

    /**
     * @property {string} [bannerUrl] - URL for the banner image to display on the payment page. Optional.
     */
    bannerUrl?: string;
}

/**
 * @interface UpdatePaymentLinkPayload
 * @description Defines the structure for updating a Payment Link with all optional attributes from the CreatePaymentLinkPayload.
 * All fields from CreatePaymentLinkPayload are optional for update.
 */
export interface UpdatePaymentLinkPayload extends Partial<CreatePaymentLinkPayload> {
    /**
     * @property {string} paymentLinkId - The id of the payment link to update.
     */
    paymentLinkId: string;
}

/**
 * @interface CreatePaymentLinkResponse
 * @description Defines the structure of the response returned when a Payment Link is created.
 */
export interface CreatePaymentLinkResponse {
    /**
     * @property {number} statusCode - The HTTP status code of the response.
     */
    statusCode: number;

    /**
     * @property {string} message - A descriptive message about the result of the operation.
     */
    message: string;

    /**
     * @property {string} paymentLink - The URL of the created payment link.
     */
    paymentLink: string;

    /**
     * @property {CreatePaymentLinkPayload} paymentData - The payment data used to create the payment link.
     */
    paymentData: CreatePaymentLinkPayload;
}

/**
 * @interface UpdatePaymentLinkResponse
 * @description Defines the structure of the response returned when a Payment Link is updated.
 */
export interface UpdatePaymentLinkResponse {
    /**
     * @property {number} statusCode - The HTTP status code of the response.
     */
    statusCode: number;

    /**
     * @property {string} message - A descriptive message about the result of the operation.
     */
    message: string;

    /**
     * @property {string} paymentLink - The URL of the updated payment link.
     */
    paymentLink: string;

    /**
     * @property {UpdatePaymentLinkPayload} paymentData - The updated payment data for the payment link.
     */
    paymentData: UpdatePaymentLinkPayload;
}

/**
 * @interface GetAllPaymentLinkResponse
 * @description Defines the structure of the response returned when all payment links are retrieved.
 */
export interface GetAllPaymentLinkResponse {
    /**
     * @property {number} statusCode - The HTTP status code of the response.
     */
    statusCode: number;

    /**
     * @property {string} message - A descriptive message about the result of the operation.
     */
    message: string;

    /**
     * @property {UpdatePaymentLinkPayload[]} paymentData - A list of payment data for all payment links.
     */
    paymentData: UpdatePaymentLinkPayload[];
}


/**
 * @interface DeletePaymentLinkResponse
 * @description Defines the structure of the response returned when a payment link is deleted.
 */
export interface DeletePaymentLinkResponse {
    /**
     * @property {number} statusCode - The HTTP status code of the response.
     */
    statusCode: number;

    /**
     * @property {string} message - A descriptive message about the result of the operation.
     */
    message: string;
}
