import { updateProjectCollection } from './projects.types';

export const projectAction = data => {
    return {
        type: updateProjectCollection.PROJECT_TYPE,
        payload: data
    }
}