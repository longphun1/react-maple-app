import { legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";


//persist redux state(informations) on app refresh/redirects
const perssitConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(perssitConfig, rootReducer)

export const store = createStore(persistedReducer, undefined)

export const persistor = persistStore(store)

export const clearpersist = () => persistor.purge()