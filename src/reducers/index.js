import { combineReducers } from 'redux';
import students from './students';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    students,
    itemEditing
});

export default appReducers;
