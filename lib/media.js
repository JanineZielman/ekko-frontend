// import { getStrapiURL } from "./api";

// export function getStrapiMedia(media) {
//   const { url } = media;
//   const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
//   return imageUrl;
// }

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? 'https://lucid-khayyam.85-214-72-113.plesk.page' + media.url
    : media.url;
  return imageUrl;
}