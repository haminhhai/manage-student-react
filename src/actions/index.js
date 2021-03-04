import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchStudentsRequest = () => {
    return dispatch => {
        return callApi('students', 'GET', null).then(res => {
            dispatch(actFetchStudents(res.data));
        });
    };
}

export const actFetchStudents = (students) => {
    return {
        type : Types.FETCH_STUDENTS,
        students
    }
}
export const actFindStudentRequest = (id) => {
    return dispatch => {
        return callApi(`students?sid=${id}`, 'GET', null).then(res => {
            dispatch(actFindStudent(res.data));
        });
    }
}

export const actFindStudent = (students) => {
    return {
        type : Types.FIND_STUDENT,
        students
    }
}


export const actDeleteStudentRequest = (id) => {
    return dispatch => {
        return callApi(`students/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteStudent(id));
        })
    }
}

export const actDeleteStudent = (id) => {
    return {
        type : Types.DELETE_STUDENT,
        id
    }
}

export const actAddStudentRequest = (student) => {
    return dispatch => {
        return callApi('students', 'POST', student).then(res => {
            dispatch(actAddStudent(res.data));
        });
    }
}

export const actAddStudent = (student) => {
    return {
        type : Types.ADD_STUDENT,
        student
    }
}

export const actGetStudentRequest = (id) => {
    return dispatch => {
        return callApi(`students/${id}`, 'GET', null).then(res => {
            dispatch(actGetStudent(res.data));
        });
    }
}

export const actGetStudent = (student) => {
    return {
        type : Types.EDIT_STUDENT,
        student
    }
}

export const actUpdateStudentRequest = (student) => {
    return dispatch => {
        return callApi(`students/${student.id}`, 'PUT', student).then(res => {
            dispatch(actUpdateStudent(res.data));
        });
    }
}

export const actUpdateStudent = (student) => {
    return {
        type : Types.UPDATE_STUDENT,
        student
    }
}
