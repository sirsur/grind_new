import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/header.png);
    background-size: cover;
    background-position: center;

    span {
        margin: 2.5rem 0 4.5rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
    }

    hr {
        border: 0;
    }
`;

const Header = () => {
    return (
        <Container> 
            <h1>welcome to the</h1>
            <h1 style={{ color: 'yellow' }}>grind</h1>
            <span>
                <hr style={{ width: '12rem', height: '0.3rem', backgroundColor: '#FFFFFF' }} />
                <hr style={{ width: '2.5rem', height: '0.3rem', backgroundColor: '#FFFFFF', rotate: '70deg' }} />
                <hr style={{ width: '2.5rem', height: '0.3rem', backgroundColor: '#FFFFFF', rotate: '70deg', marginRight: '2rem'}} />
                <hr style={{ width: '2.5rem', height: '0.3rem', backgroundColor: '#FFFFFF', rotate: '70deg' }} />
                <hr style={{ width: '2.5rem', height: '0.3rem', backgroundColor: '#FFFFFF', rotate: '70deg' }} />
                <hr style={{ width: '12rem', height: '0.3rem', backgroundColor: '#FFFFFF' }} />
            </span>
            <h2>
                the science of today is
                <br />
                the technology of
                <br />
                tomorrow
            </h2>
            <h2 style={{ color: 'yellow', marginTop: '0.5rem' }}>teller</h2>
        </Container>
    );
}

export default Header;
