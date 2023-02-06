const API_URL = `https://data.messari.io/api/v1/assets/`;
const IMG_URL = `https://asset-images.messari.io/images/`;

/**
 * @description to obtain API URL for user typed text
 * @param text user typed text
 * @returns valid API URL
 */
export const getUrlFromText = (text: string) => `${API_URL}${text}/metrics`;

/**
 * @description To retrieve the image when the crypto is fetched
 * @param id crypto id
 * @returns valid image URL
 */
export const getImageFromId = (id: string) => `${IMG_URL}${id}/128.png`;
