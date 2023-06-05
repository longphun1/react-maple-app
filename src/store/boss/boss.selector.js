import { createSelector } from "reselect";

const selectBossReducer = (state) => state.bosses;

export const selectBosses = createSelector(
    [selectBossReducer],
    (bossesSlice) => bossesSlice.bosses
);

export const selectBossesMap = createSelector(
    [selectBosses],
    (bosses) => bosses.reduce((acc, boss) => {
        const { title, items } = boss;
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
);