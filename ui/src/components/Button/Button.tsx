import React from 'react';

import './Button.scss';

interface IButtonProps {
    label: string,
    handleClick?: any,
    color?: string
}

const Button = (props: IButtonProps) => {
    const { label, handleClick, color } = props;

    return (
        <button
            className="c-button"
            onClick={handleClick}
            style={{ backgroundColor: color && color || '#1D1D2E' }}
        >
            {label}
        </button>
    )
}

export default Button;