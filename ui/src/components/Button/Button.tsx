import React from 'react';

import './Button.scss';

interface IButtonProps {
    label: string,
    handleClick?: any,
    color?: string,
    bg?: string,
    border?: string,
}

const Button = (props: IButtonProps) => {
    const { label, handleClick, color, bg, border } = props;

    return (
        <button
            className="c-button"
            onClick={handleClick}
            style={{ backgroundColor: bg && bg || '#1D1D2E', color: color && color || 'white', border: border }}
        >
            {label}
        </button>
    )
}

export default Button;