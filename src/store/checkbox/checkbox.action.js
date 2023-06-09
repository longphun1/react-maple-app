import { createAction } from "../../utils/reducer/reducer.utils";
import { BOSS_ACTION_TYPES } from "./checkbox.types";

export const setCheckboxAction = (id) => {
    return {
        type: 'SET_CHECKBOX',
        payload: id
    }
};

const addBossItem = (bossItems, bossToAdd) => {
    const existingBossItem = bossItems.find(
        (bossItem) => bossItem.id === bossToAdd.id
    );

    if (existingBossItem) {
        return bossItems.map((bossItem) =>
            bossItem.id === bossToAdd.id ?
                { ...bossItem, quantity: bossItem.quantity + 1 }
                : bossItem
        )
    }

    return [...bossItems, { ...bossToAdd, quantity: 1 }];
};

export const addBossToList = (bossItems, bossToAdd) => {
    const newBossItems = addBossItem(bossItems, bossToAdd);
    return createAction(BOSS_ACTION_TYPES.SET_BOSS_ITEMS, newBossItems)
};

const removeBossFromList = (bossItems, bossToRemove) =>
    bossItems.filter((bossItem) => bossItem.id !== bossToRemove.id)

export const removeBoss = (bossItems, bossToRemove) => {
    const newBossItems = removeBossFromList(bossItems, bossToRemove);
    return createAction(BOSS_ACTION_TYPES.SET_BOSS_ITEMS, newBossItems)
}