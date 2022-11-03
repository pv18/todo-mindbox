import {createStore} from 'redux'
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {initialState, todoReducer} from './redusers/todoReducer';

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') || '')
    : initialState

export const store = createStore(todoReducer, persistedState)

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// @ts-ignore
window.store = store;
