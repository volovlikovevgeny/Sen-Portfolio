import { createSelector } from 'reselect';

const selectContact = state => state.contact

export const selectContactItems = createSelector(
    [selectContact],
    contact => contact.contacts
);
