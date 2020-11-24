import { updateProjectCollection } from './projects.types';

const INITIAL_STATE = {
    projects: [{
        id: 1,
        dev: 'Frontend Developing',
        text: 'Frontend application in order to create I`ve used React and Sass thinking about optimizing, adding Backend',
        url: 'https://volovlikovevgeny.github.io/Sen-Portfolio/',
        img: 'https://i.ibb.co/k8Sw1KL/img-1.png',
        code: 'https://github.com/volovlikovevgeny/Sen-Portfolio',
        live: 'https://volovlikovevgeny.github.io/Sen-Portfolio/'
    },
    {
        id: 2,
        dev: 'Full-stack',
        text: 'E-commerce website that was made with React, react-router, redux, reselect, sass, firebase, stripe api, hooks, styled-components.',
        url: 'https://drgn.netlify.app/',
        img: 'https://i.ibb.co/R9RPvvL/img-2.png',
        code: 'https://github.com/volovlikovevgeny/e-commerce',
        live: 'https://drgn.netlify.app/'

    },
    {
        id: 3,
        dev: 'Full-Stack',
        text: 'Frontend application in order to create I`ve used React and firebase, also thanks to the intellegance of api to create application',
        url: 'https://sbmr.netlify.app/',
        img: 'https://i.ibb.co/HtjPr6s/37.png',
        code: 'https://github.com/volovlikovevgeny/SmartBrain-Front-Firebase',
        live: 'https://sbmr.netlify.app/'
    },
    {
        id: 4,
        dev: 'Frontend Developing',
        text: 'Frontend SPA web-site, In order to create I`ve used React framework, It`s fully reponsible and simple to use',
        url: 'https://mavicpro.netlify.app/',
        img: 'https://i.ibb.co/z4kS3vd/Mavic.png',
        code: 'https://github.com/volovlikovevgeny/Mavic-Pro',
        live: 'https://mavicpro.netlify.app/'
    },]
}

const projectReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case updateProjectCollection.PROJECT_TYPE:
            return {
                ...state,
                projects2: action.payload
            }

        default:
            return state;
    }
}

export default projectReducer;