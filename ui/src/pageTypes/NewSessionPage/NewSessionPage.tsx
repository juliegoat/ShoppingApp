import React from 'react';

import { Button, Container, Card } from '../../components';

interface INewSessionPage {
    handleNewSessionOnClick: any,
}

const NewSessionPage = (props: INewSessionPage) => {
    const { handleNewSessionOnClick } = props;

    return (
        <Container>
            <Card width="600px">
                <form onSubmit={handleNewSessionOnClick}>
                    <Button label="New session" handleClick={handleNewSessionOnClick} />
                </form>
            </Card>
        </Container>
    )
}

export default NewSessionPage;