import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
    if(media == '') {

        return false;
    }
    const imageUrl = media.url.startsWith("/")
        ? getStrapiURL(media.url)
        : media.url;
    return imageUrl;
}
export function getStrapiMediaSingle(url) {

    if(url == '') {



        return false;

    }

    const imageUrl = url.startsWith("/")

        ? getStrapiURL(url)

        : url;

    return imageUrl;

}