import contactActionTypes from './contact.types';

const INITIAL_STATE = {
    contacts: [
        {
            id: 1,
            head: 'Name',
            subTitle: 'Volovlikov Evgeny',
        },
        {
            id: 2,
            head: 'Address',
            subTitle: 'Prospect Lenina, 7',
        },
        {
            id: 3,
            head: 'Mail',
            subTitle: 'Volovlikov97@gmail.com',
        },
        {
            id: 4,
            head: 'Phone',
            subTitle: '8-977-285-04-61',
        },
    ]
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (contactActionTypes.CONTACT):
            return {
                ...state,
                contacts: action.payload
            }
        default:
            return state
    }
}

export default contactReducer;