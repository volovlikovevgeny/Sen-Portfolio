import { createSelector } from 'reselect';

const selectSkill = state => state.skills

export const selectSkillItem = createSelector(
    [selectSkill],
    skills => skills.skills
)