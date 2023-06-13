import { createAction } from "../../utils/reducer/reducer.utils";
import { BOSS_ACTION_TYPES } from "./checkbox.types";

export const setCheckboxAction = (id) => {
    return {
        type: 'SET_CHECKBOX',
        payload: id
    }
};

const addBossItem = (bossItems, bossToAdd, unique_id) => {
    return [...bossItems, { ...bossToAdd, newID: unique_id }];
};

const removeBossItem = (bossItems, unique_id) => {
    return bossItems.filter((bossItem) => bossItem.newID !== unique_id)
}

export const addBossToList = (bossItems, bossToAdd, unique_id) => {
    const newBossItems = addBossItem(bossItems, bossToAdd, unique_id);
    return createAction(BOSS_ACTION_TYPES.SET_BOSS_ITEMS, newBossItems)
};

export const removeBoss = (bossItems, unique_id) => {
    const newBossItems = removeBossItem(bossItems, unique_id);
    return createAction(BOSS_ACTION_TYPES.SET_BOSS_ITEMS, newBossItems)
}