import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (students, sid) => {
    var result = -1;
    students.forEach((student, index) => {
        if (student.sid === sid) {
            result = index;
        }
    });
    return result;
}

const students = (state = initialState, action) => {
    var index = -1;
    var { id, student } = action;
    switch (action.type) {
        case Types.FETCH_STUDENTS:
            state = action.students;
            return [...state];
        case Types.FIND_STUDENT:
            state = action.students;
            return [...state];
        case Types.DELETE_STUDENT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_STUDENT:
            state.push(action.student);
            console.log([...state])
            return [...state];
        case Types.UPDATE_STUDENT:
            index = findIndex(state, student.sid);
            state[index] = student;
            return [...state];
        default: return [...state];
    }
};

export default students;
