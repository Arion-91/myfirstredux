export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST'
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'

export function getPhotos(year) {
    return {
        type: GET_PHOTO_SUCCESS,
        payload: year
    }
}