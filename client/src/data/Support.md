# Adding & Switching Support (Donation) Methods

The `/support` page shows a card for every payment method that's currently
enabled — or a calm "coming soon" message if none are. Like Gallery, Events,
and News, this is a plain config file, not a payment integration.

## TL;DR

Open `src/data/supportMethods.js`, fill in the real details for a method,
and flip its `enabled` flag to `true`:

```js
mpesa: {
  enabled: true,
  label: 'M-Pesa',
  till: '123456',
  paybill: '',
  accountNumber: '',
  instructions: 'M-Pesa > Lipa na M-Pesa > Buy Goods and Services, then enter the till number above.',
},
```

Save. The card appears on `/support` automatically — no other file changes.
Flip `enabled` back to `false` to hide a method again just as easily
(useful if a till number changes, or an account is temporarily unavailable).

## Every method is independent

Each entry in `SUPPORT_METHODS` (`mpesa`, `bank`, `paypal`, `card`,
`whatsapp`) has its own `enabled` flag. Turn on as many or as few as you
actually have real details for — the page's grid layout adjusts
automatically to however many are active, from one up to all five.

## What each method needs

**M-Pesa** — fill *either* `till` (Buy Goods) *or* `paybill` +
`accountNumber` (Paybill), not necessarily both. Leave the one you're not
using blank — empty fields are automatically hidden, not shown as blank rows.

**Bank Transfer** — `bankName`, `accountName`, `accountNumber`, `branch`.
Same rule: leave anything you don't have blank.

**PayPal** — just a `link`. Use a `paypal.me/yourorg` link, or a hosted
PayPal donate-button URL if the charity sets one up later.

**Card / Online Payment** — **do not enable this yet.** There's no real
payment processor wired up (no Stripe, Flutterwave, etc.) — enabling this
with just a placeholder `link` would either go nowhere or look broken. This
exists in the config as a placeholder for when that backend work actually
happens, not something to activate early. If asked to turn this on, that's
the moment to have the "we need a real payment integration" conversation,
not to fake it.

**WhatsApp** — already enabled by default, and worth leaving on even after
other methods go live. It costs nothing to keep and gives anyone unsure
about M-Pesa/bank details a direct human to ask instead.

## Copy-to-clipboard, automatically

Every till number, account number, etc. renders as a tap-to-copy field —
you don't need to do anything extra for this; it's built into how the page
renders each filled-in value. Blank fields just don't render a button at
all, so there's no need to remove unused fields from the object, only leave
them as empty strings.

## No methods enabled

If every method's `enabled` is `false` (or all their required fields are
blank), the page shows a "ways to give are coming soon" message with a link
to the Contact page instead of an empty grid. This is intentional — same
pattern as Gallery, Events, and News — don't work around it by half-filling
a method just to avoid the empty state; it exists specifically so you don't
have to.

## Where this lives

- Data: `src/data/supportMethods.js`
- Renderer: `src/components/SupportMethods.jsx`
- Page: `src/pages/Support.jsx`
- Both "Support Us" buttons in `Navbar.jsx` link here — nothing to update
  there when you add/remove a payment method.