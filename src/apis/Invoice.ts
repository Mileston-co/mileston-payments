import { BaseAPI } from "../core";
import { CreateInvoicePayload, CreateInvoiceResponse, DeleteInvoiceResponse, UpdateInvoicePayload, UpdateInvoiceResponse } from "../types";

/**
 * Class representing the Invoice API.
 */
export class Invoice extends BaseAPI {
    /**
     * The default base URL for the Invoice API.
     * @private
     */
    private static defaultBaseURL = "https://invoice-service.mileston.co/invoice";

    /**
     * Constructor for Invoice API.
     * @param apiKey - The API key for authentication.
     * @param businessId - The business ID to identify the user’s business.
     */
    constructor(apiKey: string, businessId: string) {
        // Pass the default baseURL, apiKey, and businessId to the BaseAPI constructor
        super(Invoice.defaultBaseURL, apiKey, businessId);
    }

    /**
     * Create a new Invoice.
     * @param businessName - Your Business Name
     * @param payload - The data to create the invoice.
     * @returns The created Invoice details.
     */
    async create(businessName: string, payload: CreateInvoicePayload): Promise<CreateInvoiceResponse> {
        return this.request({
            endpoint: `/create?businessName=${businessName}`,
            method: "POST",
            data: payload,
        });
    }

    /**
     * Retrieve an Invoice by ID.
     * @param id - The ID of the invoice.
     * @returns The Invoice details.
     */
    async get(id: string): Promise<UpdateInvoiceResponse> {
        return this.request({
            endpoint: `/${id}`,
            method: "GET",
        });
    }

    /**
   * Retrieve a Invoices by specifying a limited number.
   * @param limit - The limit of the invoices you want to retrieve.
   * @returns The Invoice details.
   */
    async getAll(limit: number): Promise<UpdateInvoiceResponse> {
        return this.request({
            endpoint: `?limit=${limit}`,
            method: "GET",
        });
    }

    /**
     * Update an existing Invoice.
     * @param payload - The data to update the invoice.
     * @returns The updated Invoice details.
     */
    async update(payload: UpdateInvoicePayload): Promise<UpdateInvoiceResponse> {  
        return this.request({
            endpoint: `/update`,
            method: "PATCH",
            data: payload,
        });
    }

    /**
     * Delete an Invoice by ID.
     * @param id - The ID of the invoice.
     * @returns A success message or an error.
     */
    async delete(id: string): Promise<DeleteInvoiceResponse> {
        return this.request({
            endpoint: `/delete/${id}`,
            method: "DELETE",
        });
    }
}