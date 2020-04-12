import React from 'react';

import { Button, Container, Card } from '../../components';

import './NewSessionPage.scss';

interface INewSessionPage {
    handleNewSessionOnClick: any,
}

const NewSessionPage = (props: INewSessionPage) => {
    const { handleNewSessionOnClick } = props;

    return (
        <Container>
            <div className="p-new-session">
                <div className="p-new-session__heading">
                    <span className="c-label">Currently in Beta</span>

                    <h1>A curated shopping experience with your friend.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <Card width="600px">
                    <form onSubmit={handleNewSessionOnClick}>
                        <Button label="New session" handleClick={handleNewSessionOnClick} />
                    </form>
                </Card>
            </div>
        </Container>
    )
}

export default NewSessionPage;