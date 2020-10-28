import contactActionTypes from './contact.types';

export const contactData = data => ({
    type: contactActionTypes.CONTACT,
    payload: data
})