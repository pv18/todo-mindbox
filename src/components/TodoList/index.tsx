import {ChangeEvent, KeyboardEvent, useMemo} from 'react';
import {FILTER_TYPE_COMPLETED, FILTER_TYPE_TODO} from '../../constants';
import {useAppSelector} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {addTask, changeFilter, checkAll, checkTask, deleteCompleted, deleteTask} from '../../redux/actions';
import {InputPanel} from './InputPanel';
import {ButtonPanel} from './ButtonPanel';
import {Todo} from './Todo';
import './style.scss';

export const TodoList = () => {
    const {tasks, filter} = useAppSelector(state => state.todos)
    const dispatch = useDispatch()

    const addTodoHandler = (e: KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            dispatch(addTask(e.target.value))
            e.target.value = '';
        }
    }

    const deleteTaskHandler = (id: number) => () => {
        dispatch(deleteTask(id))
    }

    const checkTaskHandler = (id: number) => () => {
        dispatch(checkTask(id))
    }

    const deleteCompletedHandler = () => {
        dispatch(deleteCompleted())
    }

    const uncheckedCounter = useMemo(() => {
        return tasks.reduce((acc, task) => {
            if (!task.checked) {
                return acc + 1;
            }
            return acc;
        }, 0)
    }, [tasks])

    const checkedTaskCounter = useMemo(() => tasks.length - uncheckedCounter, [tasks, uncheckedCounter]);

    const checkAllHandler = () => {
        dispatch(checkAll())
    }

    const filterTasks = useMemo(() => {
        switch (filter) {
            case FILTER_TYPE_TODO:
                return tasks.filter((task) => !task.checked);
            case FILTER_TYPE_COMPLETED:
                return tasks.filter((task) => task.checked);
            default:
                return tasks;
        }
    }, [tasks, filter]);

    const changeFilterHandler = (newFilter: string) => () => {
        dispatch(changeFilter(newFilter))
    }

    return (
        <>
            <InputPanel
                type="text"
                onKeyDown={addTodoHandler}
                placeholder="What needs to be done?"
            />
            <ul className={'todo_list'}>
                {filterTasks.map((task) => {
                    return <Todo
                        name={task.name}
                        checkTask={checkTaskHandler(task.id)}
                        key={task.id}
                        checked={task.checked}
                        deleteTask={deleteTaskHandler(task.id)}
                    />
                })}
            </ul>
            {tasks.length ?
                <ButtonPanel
                    deleteCompleted={deleteCompletedHandler}
                    checkAll={checkAllHandler}
                    checkedTaskCounter={checkedTaskCounter}
                    uncheckedCounter={uncheckedCounter}
                    filter={filter}
                    onChangeFilter={changeFilterHandler}
                /> : null}
        </>
    )
}


