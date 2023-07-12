import { createAction, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

export type SetCategories = ActionWithPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES, Category[]>

export const setCategories = withMatcher((categories: Category[]): SetCategories => 
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories));
