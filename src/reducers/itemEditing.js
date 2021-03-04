import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_STUDENT:
            return action.student;
        default:
            return state;
    }
}

export default itemEditing;
