import React from 'react';

import './Container.scss';

const Container = (props: any) => {
    const { children } = props;

    return (
        <div className="c-container">
            {children}
        </div>
    )
}

export default Container;