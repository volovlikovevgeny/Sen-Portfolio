import { createSelector } from 'reselect';


const selectProject = state => state.projects

export const selectProjectItems = createSelector(
    [selectProject],
    project => project.projects
)