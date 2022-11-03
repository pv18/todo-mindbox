import {InitialStateType, todoReducer} from './todoReducer';
import {addTask, changeFilter, checkAll, checkTask, deleteCompleted, deleteTask} from '../actions';
import {FILTER_TYPE_ALL} from '../../constants';

const data: InitialStateType = {
    tasks: [
        {id: 1, name: 'CSS', checked: true},
        {id: 2, name: 'JS', checked: false},
        {id: 3, name: 'React', checked: true},
        {id: 4, name: 'Redux', checked: false},
    ],
    filter: FILTER_TYPE_ALL
}

test('correct task should be deleted from array tasks', () => {
    const startState = data

    const action = deleteTask(2)
    const endState = todoReducer(startState, action)

    expect(endState.tasks.length).toBe(2)
    expect(endState.tasks.every(t => t.id != 2)).toBeTruthy()
    expect(endState.tasks[0].id).toBe(1)
    expect(endState.tasks[1].id).toBe(3)
});

test('correct task should be added to tasks array', () => {
    const startState = data

    const action = addTask('HTML')
    const endState = todoReducer(startState, action)

    expect(endState.tasks.length).toBe(4)
    expect(endState.tasks[0].id).toBeDefined()
    expect(endState.tasks[0].name).toBe('HTML')
    expect(endState.tasks[0].checked).toBe(false)
})

test('status of specified task should be changed', () => {
    const startState = data

    const action = checkTask(2)
    const endState = todoReducer(startState, action)

    expect(endState.tasks[0].checked).toBeFalsy()
    expect(endState.tasks[1].checked).toBeTruthy()
});

test('delete all completed tasks', () => {
    const startState = data

    const action = deleteCompleted()
    const endState = todoReducer(startState, action)

    expect(endState.tasks[0].id).toBeDefined()
    expect(endState.tasks.length).toBe(2)
});

test('close all completed cases', () => {
    const startState = data

    const action = checkAll()
    const endState = todoReducer(startState, action)

    expect(endState.tasks[1].checked).toBeTruthy()
    expect(endState.tasks[3].checked).toBeTruthy()
});

test('correct filter of todo should be changed', () => {
    const startState = data

    const newFilter: string = 'active'

    const action = changeFilter(newFilter);
    const endState = todoReducer(startState, action);

    expect(endState.filter).toBe(newFilter);
});






