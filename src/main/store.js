import { createStore } from 'redux';

const initialState = {
    searchString: '',
    searchResult: []
};
export const counter = (state, action) => {
    switch (action.type) {
        case 'SEARCH_STRING':
            console.log('SEARCH_STRING', action.text);
            return {
                ...state,
                searchString: action.text
            };
        case 'UPDATE_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.places
            };
        default:
            return initialState;
    }
};

let store = createStore(counter);

export default store;
