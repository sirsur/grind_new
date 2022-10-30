import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(4vh + 1vmin);
    width: calc(1.3vw + 1vmin);

    h1 {
        position: absolute;
        font-size: calc(5vh + 1vmin);
        font-weight: 900;
        color: #FFFFFF;
        opacity: 50%;
    }
`;

const Grind = () => {
    return (
        <Container>
            <h1>g</h1>
            <h1 style={{ padding: '0.1vh 0 0 0.1vw', color: '#FFDF0A' }}>g</h1>
            <h1 style={{ padding: '0.2vh 0 0 0.2vw' }}>g</h1>
        </Container>
    );
}

export default Grind;