const images = import.meta.glob(
  '../assets/gallery/**/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

export function getEventPhotos(eventSlug) {
  const prefix = `../assets/gallery/${eventSlug}/`

  return Object.entries(images)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)
}