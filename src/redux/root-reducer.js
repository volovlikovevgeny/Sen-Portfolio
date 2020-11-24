import { combineReducers } from 'redux';

import contactReducer from './contact/contact.reducer';
import skillReducer from './skills/skill.reducer';
import linkReducer from './navigation/nav.reducer';
import projectReducer from './projects/project.reducer.js'

export default combineReducers({
    contact: contactReducer,
    skills: skillReducer,
    navLinks: linkReducer,
    projects: projectReducer
})