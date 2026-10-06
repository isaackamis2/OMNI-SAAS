/*
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
*/

export interface CryptoOption {
  id: string;
  name: string;
  network: string;
  address: string;
  note: string;
  badge?: string;
}

export interface PaymentConfig {
  email: string;
  whatsappNumber: string; // e.g. '250780000000' (international format without +)
  payoneer: {
    email: string;
    accountName: string;
    note: string;
    receivingBankDetails?: {
      bankName: string;
      routingNumber: string;
      accountNumber: string;
      accountType: string;
    };
  };
  cryptoOptions: CryptoOption[];
  mobileMoney: {
    provider: string;
    accountName: string;
    numberOrCode: string;
    instructions: string;
  };
  bankWire: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    swiftCode: string;
    country: string;
  };
  rapidApiUrl: string;
}

export const PAYMENT_CONFIG: PaymentConfig = {
  email: 'isaackamis@gmail.com',
  whatsappNumber: '250780000000', // Isaac can set his direct phone number here
  payoneer: {
    email: 'isaackamis@gmail.com',
    accountName: 'Isiaka Kamana',
    note: 'Pay directly via Payoneer account transfer (0% fee) or request a Credit Card / ACH payment link.',
    receivingBankDetails: {
      bankName: 'First Century Bank / Citibank (Payoneer USD)',
      routingNumber: '061000227', // Placeholder, update once ready
      accountNumber: 'Available upon request / in dashboard',
      accountType: 'Checking',
    },
  },
  cryptoOptions: [
    {
      id: 'usdt-trc20',
      name: 'USDT (TRC-20)',
      network: 'Tron TRC-20',
      address: 'TYDzsYUEW8qMxbGzU8c6r9vGZ4hQeM7V7X', // Replace with your real USDT TRC20 address
      badge: 'Zero / Low Fees • Recommended',
      note: 'Send USDT via the Tron (TRC20) network only.',
    },
    {
      id: 'usdt-polygon',
      name: 'USDT / USDC (Polygon)',
      network: 'Polygon (MATIC) Network',
      address: '0x71C8F7A183c27e8aAf4925828695034c4C66C3E4', // Replace with your Polygon address
      badge: 'Fast & Low Gas',
      note: 'Send USDT or USDC via the Polygon PoS network.',
    },
    {
      id: 'binance-pay',
      name: 'Binance Pay',
      network: 'Binance Pay ID / Email',
      address: 'isaackamis@gmail.com', // Replace with Binance Pay ID or Pay Email
      badge: 'Instant Transfer',
      note: 'Transfer directly using Binance Pay ID or Email with zero fees.',
    },
  ],
  mobileMoney: {
    provider: 'MTN Mobile Money & Airtel Money',
    accountName: 'Isiaka Kamana (Isaac)',
    numberOrCode: '+250 78X XXX XXX / MoMo Code', // Replace with active MoMo number or Merchant Code
    instructions: 'Send payment via MoMo Pay or direct transfer. Use your Email as reference.',
  },
  bankWire: {
    bankName: 'Bank of Kigali / Equity Bank',
    accountName: 'Isiaka Kamana (Isaac)',
    accountNumber: '0000-XXXX-XXXX-XXXX', // Replace with bank account number
    swiftCode: 'BKIGRWRW',
    country: 'Rwanda',
  },
  rapidApiUrl: 'https://rapidapi.com/hub',
};
