import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import './style.scss';
import {IoIosArrowDown} from 'react-icons/io';

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const InputPanel:FC<InputType> = (props) => {
    return (
        <div className={'input_panel'}>
            <IoIosArrowDown className={'arrow_down'}/>
            <input {...props} className={'todo_input'}/>
        </div>
    );
};

