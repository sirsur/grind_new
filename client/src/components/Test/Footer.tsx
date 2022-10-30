import React from 'react';
import styled from 'styled-components';

import Grind from './Grind';

const Container = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(8vh + 1vmin);
    background-color: #000000;

    p {
        color: #515151;
        font-size: calc(2.5vh + 1vmin);
    }

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(60vw + 15vmax);
    }
`;

const Footer = () => {
    return (
        <Container>
            <span>
                <Grind />
                <p>grind</p>
                <p>2022</p>
            </span>
        </Container>
    );
}

export default Footer;