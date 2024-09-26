import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expensesReducer from './expensesSlice';
import incomeReducer from '../redux/incomeSlice';
import { authReducer } from '../redux/authSlice';
import { combineReducers } from '@reduxjs/toolkit';


const PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], 
};

const rootReducer = combineReducers({
    auth: authReducer,
    expenses: expensesReducer,
    income: incomeReducer,
});

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);