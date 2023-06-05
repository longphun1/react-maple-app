import { BOSS_ACTION_TYPES } from "./boss.types";

export const BOSSES_INITIAL_STATE = {
    bosses: []
};

export const bossesReducer = (state = BOSSES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case BOSS_ACTION_TYPES.SET_BOSS:
            return {...state, bosses: payload};
        default:
            return state;
    }
}