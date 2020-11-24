import { skillActionType } from './skills.types';

export const skillData = data => {
    return {
        type: skillActionType.SKILLS,
        payload: data
    }
}