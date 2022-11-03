import {combineReducers, createStore} from 'redux'
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {todoReducer} from './redusers/todoReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// @ts-ignore
window.store = store;
