import React from 'react';

import './Card.scss';

const Card = (props: any) => {
    const { children, width } = props;

    return (
        <div className="c-card" style={{ width: width }}>
            {children}
        </div>
    )
}

export default Card;