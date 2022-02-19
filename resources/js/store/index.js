import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { authReducer } from './auth/authReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

