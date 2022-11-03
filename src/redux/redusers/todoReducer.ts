import {ADD_TASK, CHANGE_FILTER, CHECK_ALL, CHECK_TASK, DELETE_COMPLETED, DELETE_TASK} from '../actions/actionTypes';
import {FILTER_TYPE_ALL} from '../../constants';
import {addTask, changeFilter, checkAll, checkTask, deleteCompleted, deleteTask} from '../actions';

type ActionsType =
    | ReturnType<typeof addTask>
    | ReturnType<typeof deleteTask>
    | ReturnType<typeof checkTask>
    | ReturnType<typeof deleteCompleted>
    | ReturnType<typeof checkAll>
    | ReturnType<typeof changeFilter>

export type TaskType = {
    id: number
    name: string
    checked: boolean
}

export type InitialStateType = {
    tasks: TaskType[]
    filter: string
}

export const initialState: InitialStateType = {
    tasks: [],
    filter: FILTER_TYPE_ALL,
}

export const todoReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, {id: Date.now(), name: action.name, checked: false}]};
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.id)}
        case CHECK_TASK:
            return {
                ...state, tasks:
                    state.tasks.map((task) => {
                        if (action.id === task.id) {
                            return {...task, checked: !task.checked}
                        }
                        return task
                    })
            }
        case DELETE_COMPLETED:
            return {...state, tasks: state.tasks.filter((task) => !task.checked)}
        case CHECK_ALL:
            return {
                ...state, tasks:
                    state.tasks.map((task) => {
                        if (!task.checked) {
                            return {...task, checked: true};
                        }
                        return task;
                    })
            }
        case CHANGE_FILTER:
            return {...state, filter: action.newFilter}
        default:
            return state
    }
}
