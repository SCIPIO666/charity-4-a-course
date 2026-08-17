
// Support page only shows methods that are enabled — nothing here
export const SUPPORT_METHODS = {
  mpesaTill: {
    enabled: false,
    label: 'M-Pesa Till',
    till: '',
    accountNumber: '',
    instructions: 'M-Pesa > Lipa na M-Pesa > Buy Goods and Services, then enter the till number above.',
  },
    mpesaPayBill: {
    enabled: false,
    label: 'M-Pesa Paybill',
    BusinessName: '',
    accountNumber: '',
    instructions: 'M-Pesa > Lipa na M-Pesa > paybill >then enter  Business Name above , then enter the Account Number number above.',
  },
    mpesaSendMoney: {
    enabled: true,
    label: 'M-Pesa Send Money',
    name: 'Samuel Juma Omondi',
    number: '0727 785 223',
    instructions: 'M-Pesa > Send Money > then enter the phone number above.',
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