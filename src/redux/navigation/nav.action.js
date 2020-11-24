import { updateNavLinks } from './nav.types';

export const navLinkAction = links => {
    return {
        type: updateNavLinks.NAV_LINK,
        payload: links
    }
}