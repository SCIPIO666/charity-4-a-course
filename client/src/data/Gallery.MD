# Adding Gallery Photos (Pre-Backend)

There's no CMS or backend yet — photos are added by dropping files into a
folder and committing them. Vite discovers them automatically at build time.
This doc is everything you need to add, update, or remove event photos
without touching any component code.

## TL;DR — adding photos to an existing event

1. Find the event's `slug` in `src/data/events.js`.
2. Drop your images into `src/assets/gallery/<that-slug>/`.
3. Commit. Done — no code changes needed.

## TL;DR — adding a brand new event

1. Create a folder: `src/assets/gallery/your-new-slug/`
2. Add photos into it.
3. Add one object to the `EVENTS` array in `src/data/events.js`:

```js
{
  slug: 'your-new-slug',       // must exactly match the folder name
  cover: '/some-cover.jpg',    // thumbnail shown on the /gallery grid
  title: 'Event Title',
  tag: 'Category',
  date: '12 March 2027',
  location: 'Nairobi, Kenya',
},
```

That's it. `/gallery/your-new-slug` will now work and show every photo in
that folder.

---

## How this actually works

Two files do all the work:

- **`src/data/gallery.js`** — uses `import.meta.glob()` to scan
  `src/assets/gallery/**` at build time and collect every image it finds,
  keyed by file path.
- **`src/data/events.js`** — the human-editable list of events (title, date,
  location, and the `slug` that connects an event to its folder).

`GalleryEvent.jsx` reads the URL (`/gallery/:eventSlug`), looks up that
slug's metadata in `EVENTS`, and calls `getEventPhotos(slug)` to pull every
image whose path starts with `src/assets/gallery/<slug>/`.

No manual imports, no photo array to hand-maintain — the folder *is* the
data source.

## Rules that matter

**The `slug` must match the folder name exactly.** Case-sensitive,
character-for-character. `Skills-Training` ≠ `skills-training`. If a link
leads to a blank "coming soon" page, this is the first thing to check.

**Photos must live under `src/assets/gallery/`, not `public/`.** Vite's
`import.meta.glob` only scans files it processes as part of the build — it
cannot see into `public/`, which is served as-is and never scanned. Wrong
folder = the photo silently never appears, no error.

**Name files so alphabetical sort = correct order.** `getEventPhotos()`
sorts filenames alphabetically. `1.jpg, 2.jpg, ..., 10.jpg, 11.jpg` sorts
wrong (`1, 10, 11, 2, 3...`). Always zero-pad:

```
01.jpg
02.jpg
...
10.jpg
11.jpg
```

Descriptive names work fine too as long as they're already in the order you
want (`01-arrival.jpg`, `02-opening-speech.jpg`, ...).

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`. Anything else won't
be picked up — check `data/gallery.js`'s glob pattern if you need to add a
format (e.g. `.avif`).

## An event with no folder yet

This is handled gracefully on purpose. If `EVENTS` lists a slug with no
matching folder (or an empty one), the event page shows "Photos for this
event are coming soon" instead of breaking or showing a blank grid. Useful
for publishing an event's details before its photos are ready — just create
the folder and drop photos in whenever they're available; no code change
needed to "activate" it.

## Removing an event

Delete its object from `EVENTS` in `events.js`. You can leave the photo
folder in place (it just won't be linked from anywhere) or delete it too —
either is safe.

## Image size — read this before uploading raw phone/camera photos

There's no image optimization pipeline yet (no CDN, no automatic resizing).
Whatever file you drop in ships to visitors at that exact file size. Before
adding photos:

- Resize to roughly **1600px on the long edge** — that's already larger
  than most screens will display at, so there's no visual benefit to
  uploading a 4000px+ original.
- Prefer **`.webp`** over `.jpg` where you can — noticeably smaller for the
  same visual quality. Any free online converter or `squoosh.app` works.
- Rough target: **under ~300KB per photo**. A gallery folder with twenty
  unoptimized 5MB phone photos will load very slowly, especially for
  visitors on mobile data — a likely majority of this site's traffic.

## When a real backend/CMS eventually exists

This folder-based system is a deliberate stopgap, not a permanent
architecture. When photo uploads move to a real backend (admin upload UI,
database-backed events, CDN-served images), `data/gallery.js` and
`data/events.js` are the two files that get replaced — `GalleryEvent.jsx`
and `Gallery.jsx` shouldn't need to change at all, since they only consume
`EVENTS` and `getEventPhotos()`, not how those are implemented underneath.