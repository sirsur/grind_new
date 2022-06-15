import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 1rem;

    h1 {
        font-size: 4vw;
        margin: 0 2rem 0 2rem;
        padding-top: 1rem;
    }

    hr {
        height: 0.2rem;
        width: 30rem;
        background-color: #FFFFFF;
        border: 0;
    }
`;

const Br = (props) => {
    return (
        <Container>
            <hr />
            <h1>{ props.name }</h1>
            <hr />
        </Container>
    );
}

export default Br;
