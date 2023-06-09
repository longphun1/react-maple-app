import { createAction } from "../../utils/reducer/reducer.utils";
import { BOSS_ACTION_TYPES } from "./boss.types";

export const setBosses = (bosses) => 
    createAction(BOSS_ACTION_TYPES.SET_BOSS, bosses);

