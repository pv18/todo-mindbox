import {ADD_TASK, CHANGE_FILTER, CHECK_ALL, CHECK_TASK, DELETE_COMPLETED, DELETE_TASK} from './actionTypes';

export const addTask = (name: string) => ({type: 'ADD_TASK', name} as const)

export const deleteTask = (id: number) => ({type: DELETE_TASK, id} as const)

export const checkTask = (id: number) => ({type: CHECK_TASK, id} as const)

export const deleteCompleted = () => ({type: DELETE_COMPLETED} as const)

export const checkAll = () => ({type: CHECK_ALL} as const)

export const changeFilter = (newFilter: string) => ({type: CHANGE_FILTER, newFilter} as const)
