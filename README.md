# Mileston Payments SDK

The Mileston Payments SDK is a simple and powerful library for managing payments, invoices, and recurring subscriptions. It provides seamless integration with your application, enabling you to create, update, and manage payment workflows effortlessly.
Contact [tomiwaphilip@mileston.co](mailto:tomiwaphilip@mileston.co) if you have any issues integrating this.

## Want to integrate crypto payment gateway into your application? Head on to https://mileston.co 

## Features

- Create and manage payment links.
- Generate and update invoices.
- Handle recurring payments with ease.
- Secure and reliable integration.
- Lightweight and developer-friendly.

## Installation

Install the SDK using npm:

```bash
npm install mileston-payments
```

## Initialization

To get started, import the SDK and initialize it with your API key, and business ID.

```typescript
import { PaymentLink, Invoice, RecurringPayment } from 'mileston-payments';

const apiKey = 'your-api-key';             // Your API key
const businessId = 'your-business-id';     // Your business ID

// Initialize PaymentLink, Invoice, or RecurringPayment as needed
const paymentLink = new PaymentLink(apiKey, businessId);
const invoice = new Invoice(apiKey, businessId);
const recurringPayment = new RecurringPayment(apiKey, businessId);
```

## Usage Examples

### 1. Creating a Payment Link

```typescript
const createPaymentPayload = {
  amount: '100.00',
  description: 'Purchase of premium subscription',
  customerEmail: 'customer@example.com',
};

const paymentLinkResponse = await paymentLink.create(createPaymentPayload);
console.log('Payment Link:', paymentLinkResponse.paymentLink);
```

### 2. Generating an Invoice

```typescript
const createInvoicePayload = {
  amount: '200.00',
  itemName: 'Service Fee',
  customerEmail: 'client@example.com',
  dueDate: new Date(),
};

const businessName = 'Acme';

const invoiceResponse = await invoice.create(businessName, createInvoicePayload);
console.log('Invoice Link:', invoiceResponse.invoiceLink);
```

### 3. Handling Recurring Payments

```typescript
const createRecurringPaymentPayload = {
  amount: '50.00',
  subscriberFullName: 'John Doe',
  subscriberEmail: 'john.doe@example.com',
  recurringDate: new Date('2025-01-01'),
  recurringInterval: 30, // Interval in days
};

const recurringPaymentResponse = await recurringPayment.create(businessName, createRecurringPaymentPayload);
console.log('Recurring Payment Created:', recurringPaymentResponse);
```

### 4. Updating a Payment Link

```typescript
const updatePayload = {
  amount: '120.00',
  description: 'Updated subscription fee',
};

const updatedPaymentLink = await paymentLink.update('paymentLinkId', updatePayload);
console.log('Updated Payment Link:', updatedPaymentLink);
```

## API Reference

### Classes

1. **PaymentLink**
   - `create(payload: CreatePaymentLinkPayload): Promise<CreatePaymentLinkResponse>`
   - `update(id: string, payload: UpdatePaymentLinkPayload): Promise<UpdatePaymentLinkResponse>`
   - `get(id: string): Promise<UpdatePaymentLinkResponse>`
   - `delete(id: string): Promise<DeletePaymentLinkResponse>`

2. **Invoice**
   - `create(payload: CreateInvoicePayload): Promise<CreateInvoiceResponse>`
   - `update(id: string, payload: UpdateInvoicePayload): Promise<UpdateInvoiceResponse>`
   - `get(id: string): Promise<UpdateInvoiceResponse>`
   - `delete(id: string): Promise<DeleteInvoiceResponse>`

3. **RecurringPayment**
   - `create(payload: CreateRecurringPaymentPayload): Promise<CreateRecurringPaymentResponse>`
   - `update(id: string, payload: UpdateRecurringPaymentPayload): Promise<UpdateRecurringPaymentResponse>`
   - `getAll(): Promise<GetAllRecurringPaymentResponse>`

## Contributing

We welcome contributions! Feel free to fork this repository and submit pull requests for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.