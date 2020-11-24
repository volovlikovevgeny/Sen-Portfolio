import { skillActionType } from './skills.types';

const INITIAL_STATE = {
    skills: [
        {
            id: 1,
            skill: 'HTML',
            procent: '95%',
            className: 'html'
        },
        {
            id: 2,
            skill: 'CSS/SASS',
            procent: '92%',
            className: 'css'
        },

        {
            id: 3,
            skill: 'JS',
            procent: '90%',
            className: 'js'
        },
        {
            id: 4,
            skill: 'REACT',
            procent: '88%',
            className: 'react'
        },
        {
            id: 5,
            skill: 'REDUX/RESELECT',
            procent: '85%',
            className: 'redux'
        },
        {
            id: 6,
            skill: 'NODE/EXPRESS',
            procent: '77%',
            className: 'node'
        },
        {
            id: 7,
            skill: 'POSTGRES/SQL/MongoDB',
            procent: '70%',
            className: 'postgres'
        },
        {
            id: 8,
            skill: 'GIT',
            procent: '93%',
            className: 'git'
        },
    ]
}

const skillReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (skillActionType.SKILLS):
            return {
                ...state,
                skills: action.payload
            }
        default:
            return state
    }
}

export default skillReducer;
