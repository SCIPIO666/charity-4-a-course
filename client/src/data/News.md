# Adding News Posts

The News page shows a feed of short updates, newest first — or a calm
"no news yet" message if the list is empty. Like Gallery and Events, this
is a plain data file, not a CMS.

## TL;DR

Open `src/data/news.js` and add an object to the `NEWS_POSTS` array:

```js
export const NEWS_POSTS = [
  {
    title: 'Youth Empowerment Day — 200 Students Reached',
    date: '2026-06-28',
    body: 'Our June outreach brought skills training and mentorship to over 200 students across Kiambu county.',
    image: '/loop2.webp',
    externalLink: 'https://facebook.com/...',
    externalLinkText: 'See more photos on Facebook',
  },
]
```

Save. `NewsFeed.jsx` picks it up automatically — no other file changes.

## This is for short updates, not articles

This system deliberately does **not** support long-form content — no rich
text, no multi-page posts, no embedded quotes or formatting. A post is one
title, one photo, and a paragraph or two of plain text. That's a real
design decision, not a missing feature:

- It keeps posting friction-free — anyone comfortable editing a JS file can
  add an update in under a minute.
- It avoids needing a CMS, a database, or a markdown pipeline for what is,
  realistically, a handful of updates a year.

**If the charity ever wants to publish something genuinely long-form** — a
real article with multiple sections, embedded media, formatting — that's
the point where this pattern stops being the right tool. That's a real
feature request worth a proper conversation (likely a markdown-based system
with individual post pages), not something to force into this array by
stuffing HTML into `body`. Don't do that; ask for the upgrade instead.

## Field reference

| Field              | Required | Notes                                                          |
|---------------------|----------|------------------------------------------------------------------|
| `title`             | yes      | Post headline.                                                  |
| `date`              | yes      | **Must be `'YYYY-MM-DD'`** — same rule as Events, see below.    |
| `body`              | no       | Plain text paragraph. Omit to show just a title + link/image.   |
| `image`             | no       | Path to an image (same rules as Gallery — see `GALLERY.md`).    |
| `externalLink`      | no       | Full URL. Omit if the update doesn't link anywhere else.        |
| `externalLinkText`  | no       | Link label. Defaults to `"Read more"` if `externalLink` is set. |

## Why the date format matters here too

Same reason as `upcomingEvents.js`: posts are sorted newest-first using
`new Date(post.date)`, which only parses reliably across every browser in
the `'YYYY-MM-DD'` form. `'28 June 2026'` or `'6/28/26'` will sort
incorrectly or fail silently in some browsers — always use the ISO form,
even though it's fine to *display* dates however you like elsewhere.

## Using `externalLink` instead of writing everything here

If an update is really "we already posted about this on Facebook/Instagram,"
don't retype the whole thing into `body` — write one sentence here and link
out via `externalLink`. Keeps this file short and avoids maintaining the
same content in two places that can drift out of sync.

## Removing a post

Delete its object from the array. Unlike upcoming events, there's no
automatic "past posts disappear" behavior here — a news post doesn't expire,
so removing one is always a manual, deliberate edit.

## Empty state

If `NEWS_POSTS` is empty, the page shows:

> No news yet — check back soon, or visit our gallery for past events.

Intentional default, not a bug — same pattern as Gallery and Events.

## Where this lives

- Data: `src/data/news.js`
- Feed component: `src/components/NewsFeed.jsx`
- Rendered on: `src/pages/News.jsx`