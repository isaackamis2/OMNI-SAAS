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
  whatsappNumber: string; // International format without +
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
  whatsappNumber: '250788648898', // Isaac's direct WhatsApp line
  payoneer: {
    email: 'isaackamis@gmail.com',
    accountName: 'Isiaka Kamana',
    note: 'Pay directly via Payoneer account transfer (0% fee) or request a Credit Card / ACH payment link.',
    receivingBankDetails: {
      bankName: 'First Century Bank / Citibank (Payoneer USD)',
      routingNumber: '061000227', // Placeholder, update once approved
      accountNumber: 'Available upon request / in dashboard',
      accountType: 'Checking',
    },
  },
  cryptoOptions: [
    {
      id: 'usdt-erc20',
      name: 'USDT (Ethereum ERC-20)',
      network: 'Ethereum (ERC-20)',
      address: '0xcaa8c76229692b641e35d5bc7f1b1e98ede10801',
      badge: 'Binance Verified Address',
      note: 'Send USDT via Ethereum (ERC-20) network to your Binance deposit address.',
    },
    {
      id: 'usdt-bep20',
      name: 'USDT (BNB Chain / Polygon)',
      network: 'BNB Smart Chain (BEP-20) / Polygon',
      address: '0xcaa8c76229692b641e35d5bc7f1b1e98ede10801',
      badge: 'Ultra Low Gas',
      note: 'Send USDT via BNB Chain (BEP20) or Polygon network to this Binance EVM address.',
    },
    {
      id: 'binance-pay',
      name: 'Binance Pay',
      network: 'Binance Pay Email / Direct',
      address: 'isaackamis@gmail.com',
      badge: 'Instant Transfer • Zero Fees',
      note: 'Transfer directly using Binance Pay via Email (isaackamis@gmail.com) with 0% fees.',
    },
  ],
  mobileMoney: {
    provider: 'MTN Mobile Money',
    accountName: 'Isiaka Kamana (Isaac)',
    numberOrCode: '+250 788 648 898',
    instructions: 'Send payment via MTN MoMo to +250 788 648 898. Use your email or plan name as reference.',
  },
  bankWire: {
    bankName: 'Bank of Kigali / Equity Bank',
    accountName: 'Isiaka Kamana (Isaac)',
    accountNumber: '0000-XXXX-XXXX-XXXX',
    swiftCode: 'BKIGRWRW',
    country: 'Rwanda',
  },
  rapidApiUrl: 'https://rapidapi.com/isaackamis/api/omniintel-global-market-intelligence-sentiment-engine',
};
