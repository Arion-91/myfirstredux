import {GET_PHOTO_SUCCESS} from '../actions/actions';

function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTO_SUCCESS:
            return {...state, photos: action.payload} //Object spread syntax
        default:
            return state
    }
}