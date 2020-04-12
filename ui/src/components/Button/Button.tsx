import React from 'react';

import './Button.scss';

interface IButtonProps {
    label: string,
}

const Button = (props: IButtonProps) => {
    const { label } = props;

    return (
        <button className="c-button">
            {label}
        </button>
    )
}

export default Button;