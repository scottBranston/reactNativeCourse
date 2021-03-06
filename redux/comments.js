import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) { //mutating the state below, changes values within it with the state
        case ActionTypes.ADD_COMMENTS: 
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            action.payload.id = state.comments.length 
            return {...state, comments: [...state.comments, action.payload]}; 

        default:
            return state;
    }
};