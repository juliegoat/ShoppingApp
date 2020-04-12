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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <Card width="600px">
                    <div className="p-new-session__buttons">
                        <div style={{ marginBottom: "15px" }}>
                            <strong>What are you shopping for?</strong>
                            <Button label="Sweaters" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Candles" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Make-up" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Snacks" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Toilet Paper" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Just browsing!" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <strong>What kind of shops do you like?</strong>
                            <Button label="Local to me" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Women-owned" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="Sustainably-sourced" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="No Preference!" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                        </div>

                        <div style={{ marginBottom: "15px" }}>
                            <strong>What kind of price range are you looking at?</strong>
                            <Button label="$" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="$$" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="$$$" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="$$$$" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                            <Button label="I'll worry about that later!" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                        </div>
                    </div>

                    <form onSubmit={handleNewSessionOnClick}>
                        <Button label="Start shopping" handleClick={handleNewSessionOnClick} />
                    </form>
                </Card>
            </div>
        </Container>
    )
}

export default NewSessionPage;