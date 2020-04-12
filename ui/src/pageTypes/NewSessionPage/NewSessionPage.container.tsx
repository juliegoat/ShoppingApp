import React from 'react';
import { useHistory } from "react-router-dom";

import NewSessionPage from './NewSessionPage';

const NewSessionPageContainer = () => {
    const history = useHistory();

    const handleNewSessionOnClick = () => {
        const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // move out

        history.push(`/room/${uuid}`);
    }

    return (
        <NewSessionPage
            handleNewSessionOnClick={handleNewSessionOnClick}
        />
    )
}

export default NewSessionPageContainer;