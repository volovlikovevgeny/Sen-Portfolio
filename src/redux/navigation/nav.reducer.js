import { updateNavLinks } from './nav.types'

const INITIAL_STATE = {
    navLinks: [{
        id: 1,
        link: 'home',
        name: 'Home'
    },
    {
        id: 2,
        link: 'about',
        name: 'About'
    },
    {
        id: 3,
        link: 'projects',
        name: 'Projects'
    },
    {
        id: 4,
        link: 'skills',
        name: 'Skills'
    },
    {
        id: 5,
        link: 'contact',
        name: 'Contact'
    }],
    isHidden: true
}

const linkReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case updateNavLinks.NAV_LINK:
            return {
                ...state,
                isHidden: !state.isHidden
            }

        default:
            return state;
    }
}

export default linkReducer;