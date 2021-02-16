import { createSelector } from 'reselect';

const selectNavLinks = state => state.navLinks;
const isHiddenValue = state => state.isHidden

export const selectNavLinksItems = createSelector(
    [selectNavLinks],
    Link => Link.navLinks
)