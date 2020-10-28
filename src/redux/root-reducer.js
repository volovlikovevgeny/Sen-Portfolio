import { combineReducers } from 'redux';

import contactReducer from './contact/contact.reducer';

export default combineReducers({
    contact: contactReducer,
})