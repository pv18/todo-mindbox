import {FaTrashAlt} from 'react-icons/fa'
import {GoCheck} from 'react-icons/go'
import clsx from 'clsx';
import {FC} from 'react';

type TodoPropsType = {
    name: string;
    checkTask: () => void
    key: number
    checked: boolean
    deleteTask: () => void
}

export const Todo: FC<TodoPropsType> = ({name, checked, checkTask, deleteTask}) => {
    const itemStyle = clsx('todo_info', {'active': checked});
    return (
        <li className={'todo_item'}>
            <div onClick={checkTask} className={'todo_circle'}>
                {checked ? <GoCheck className={'go_check'}/> : null}
            </div>
            <span className={itemStyle}>{name}</span>
            <FaTrashAlt onClick={deleteTask} className={'trash_button'}/>
        </li>
    )
}

