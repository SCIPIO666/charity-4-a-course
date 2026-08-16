
// Support page only shows methods that are enabled — nothing here
export const SUPPORT_METHODS = {
  mpesa: {
    enabled: false,
    label: 'M-Pesa',
    till: '',
    paybill: '',
    accountNumber: '',
    instructions: 'M-Pesa > Lipa na M-Pesa > Buy Goods and Services, then enter the till number above.',
  },
  bank: {
    enabled: false,
    label: 'Bank Transfer',
    bankName: '',
    accountName: '',
    accountNumber: '',
    branch: '',
  },
  paypal: {
    enabled: false,
    label: 'PayPal',
    link: '', //  https://paypal.me/yourorg
  },
  card: {
    enabled: false,
    label: 'Card / Online Payment',
    // placeholder only.
    link: '',
  },
  whatsapp: {
    enabled: true, // default 
    label: 'Talk to us on WhatsApp',
    number: '254 727 785223',
    message: "Hi! I'd like to support Charity 4 A Course — how can I contribute?",
  },
}