# Adding Upcoming Events

The Events page shows a banner for the **next upcoming event** — or a calm
"no upcoming events" message if none are scheduled. This doc covers how to
add, update, or remove one.

## TL;DR

Open `src/data/upcomingEvents.js` and add an object to the
`UPCOMING_EVENTS` array:

```js
export const UPCOMING_EVENTS = [
  {
    title: 'Community Outreach Day',
    date: '2027-01-15',              // 'YYYY-MM-DD' — required format
    location: 'Kiambu, Kenya',
    description: 'A day of skills training and mentorship for local youth.',
    ctaText: 'Learn More',           // optional — defaults to "Learn More"
    ctaLink: '/contact',             // optional — see link rules below
  },
]
```

Save. No other file needs to change — `EventBanner.jsx` picks it up
automatically.

## How "next event" is decided

`EventBanner` doesn't just show whatever's first in the array — it:

1. Filters out anything **dated before today**.
2. Sorts what's left by date, soonest first.
3. Shows only the single nearest one.

This means:

- **You can leave past events in the array** for record-keeping — they're
  automatically excluded from display, no cleanup required (though deleting
  them is also fine if you'd rather keep the file short).
- **You can add several future events at once**, in any order — the banner
  always finds the correct soonest one. (Right now the banner only ever
  shows *one* event at a time. If the charity starts running multiple
  simultaneous upcoming events regularly, that's a real feature request
  worth a separate conversation — the current design assumes "what's the
  next thing happening.")

## Required fields

| Field      | Required? | Notes                                                        |
|------------|-----------|----------------------------------------------------------------|
| `title`    | yes       | Shown as the banner's headline                                 |
| `date`     | yes       | **Must** be `'YYYY-MM-DD'` — see gotcha below                  |
| `location` | yes       | Shown next to a pin icon                                       |
| `description` | no     | Shown as a short paragraph if present, omitted entirely if not |
| `ctaText`  | no        | Button label — defaults to `"Learn More"` if omitted           |
| `ctaLink`  | no        | If omitted, no button renders at all                           |

## `ctaLink` — internal vs. external, and how to tell them apart

The banner checks whether `ctaLink` starts with `/`:

- **Starts with `/`** (e.g. `/contact`, `/gallery`) → treated as an internal
  page, uses React Router navigation (no full page reload).
- **Anything else** (e.g. `https://wa.me/...`, `https://forms.gle/...`) →
  treated as external, opens in a new tab.

So linking to a WhatsApp RSVP, a Google Form, or an internal Contact page
all work — just write the URL normally and it'll route correctly on its own.

## Date format gotcha

Always use `'YYYY-MM-DD'` (e.g. `'2027-01-15'`), not `'15 Jan 2027'` or
`'Jan 15, 2027'`. The code does `new Date(event.date)` — that only parses
reliably across browsers in the `YYYY-MM-DD` form. Other formats *might*
work in one browser and silently produce an invalid date in another.

One more subtlety worth knowing if you're touching this code: a plain
`'YYYY-MM-DD'` string is parsed as **midnight UTC**, not midnight in
Nairobi time. For events in East Africa (UTC+3), this never causes the date
to display a day early or late — but if this codebase is ever adapted for
an org in a *negative* UTC-offset timezone (the Americas, for example), the
same code could show an event as "tomorrow" a few hours before midnight
local time on the actual day. Not a bug for this project as it stands, just
worth knowing if this component gets reused elsewhere.

## Removing an event

Delete its object from the array, or just leave it — as covered above,
past-dated events are automatically hidden from the banner regardless.

## Empty state

If `UPCOMING_EVENTS` is empty (`[]`), or every entry in it is in the past,
the banner automatically shows:

> No upcoming events — check the gallery for past events.

This is intentional, not a bug — it's meant to always be a safe default
rather than showing broken or blank content when nothing's scheduled.