import { createSelector } from "reselect";

export const checkboxSelector = (state) => state.checkbox

export const selectBossItems = createSelector(
    [checkboxSelector],
    (boss) => boss.bossItems
);

export const selectBossTotal = createSelector([selectBossItems], (bossItems) =>
    
    bossItems.reduce(
        (total, weekly) => total + weekly.weeklyPrice, 0
    )
)