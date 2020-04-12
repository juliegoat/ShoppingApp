import React from 'react';

interface IButtonProps {
    label: string,
}

const Button = (props: IButtonProps) => {
    const { label } = props;

    return (
        <button>
            {label}
        </button>
    )
}

export default Button;