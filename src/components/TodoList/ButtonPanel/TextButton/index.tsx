import './style.scss';
import clsx from 'clsx';
import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type TextButtonType = DefaultButtonPropsType & {
}

const TextButton: FC<TextButtonType> = ({hidden, ...props}) => {
    const buttonStyle = clsx('text_button', {'hidden': hidden});
    return (
        <button {...props} className={buttonStyle}/>
    );
};

export default TextButton;