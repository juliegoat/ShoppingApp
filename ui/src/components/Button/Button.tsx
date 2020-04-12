import React from 'react';

import './Button.scss';

interface IButtonProps {
    label: string,
    handleClick?: any,
}

const Button = (props: IButtonProps) => {
    const { label, handleClick } = props;

    return (
        <button className="c-button" onClick={handleClick}>
            {label}
        </button>
    )
}

export default Button;