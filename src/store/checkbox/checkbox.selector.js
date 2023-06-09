import { createSelector } from "reselect"

export const checkboxSelector = (state) => state.checkbox

export const selectBossReducer = (state) => state.boss

export const selectBossItems = createSelector(
    [checkboxSelector],
    (boss) => boss.bossItems
);

export const selectBossTotal = createSelector([selectBossItems], (bossItems) => 
    bossItems.reduce(
        (total, weekly) => total + weekly.quantity * weekly.weeklyPrice, 0
    )
)