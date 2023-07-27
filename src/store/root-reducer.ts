import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { bossesReducer } from "./boss/boss.reducer";
import checkboxReducer from "./checkbox/checkbox.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    checkbox: checkboxReducer,
    bosses: bossesReducer
});