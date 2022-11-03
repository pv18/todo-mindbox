import './style.scss';
import clsx from 'clsx';
import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type FilterButtonType = DefaultButtonPropsType & {
    active: boolean
}

const FilterButton: FC<FilterButtonType> = ({active, ...props}) => {
    const buttonStyle = clsx('filter_btn', {'active': active});
    return (
        <button {...props} className={buttonStyle}/>
    );
}

export default FilterButton;