import { BOSS_ACTION_TYPES } from "../boss/boss.types";

export const BOSS_INTIAL_STATE = {
    bossItems: [],
    bossTotal: 0,
    bossCount: 0
}

const checkboxReducer = (state = BOSS_INTIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case 'SET_CHECKBOX':
            return {
                ...state,
                [action.payload]: !state[action.payload],
            }
        case 'SET_BOSS_ITEMS':
            return {
                ...state,
                bossItems: payload
            }
        default:
            return state
    }
};

export default checkboxReducer;