import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/header.webp);
    background-size: cover;
    background-position: center;

    div {
        width: calc(60vw + 15vmax);
    }

    span {
        margin: calc(2.5vh + 1vmin) 0 calc(4.5vh + 1vmin) 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: calc(1vw + 1vmin);
    }
`;

const Header = () => {
    return (
        <Container> 
            <div>
                <h1>welcome to the</h1>
                <h1 style={{ color: '#FFDF0F' }}>grind</h1>
                <span>
                    <hr style={{ width: 'calc(11vw + 1vmin)', height: 'calc(0.3vh + 0.1vmin)', backgroundColor: '#FFFFFF' }} />
                    <hr style={{ width: 'calc(2vw + 2vmin)', height: 'calc(0.3vh + 0.1vmin)', backgroundColor: '#FFFFFF', rotate: '70deg' }} />
                    <hr style={{ width: 'calc(2vw + 2vmin)', height: 'calc(0.3vh + 0.1vmin)', backgroundColor: '#FFFFFF', rotate: '70deg', marginRight: 'calc(2vw + 1vmin)'}} />
                    <hr style={{ width: 'calc(2vw + 2vmin)', height: 'calc(0.3vh + 0.1vmin)', backgroundColor: '#FFFFFF', rotate: '70deg' }} />
                    <hr style={{ width: 'calc(2vw + 2vmin)', height: 'calc(0.3vh + 0.1vmin)', backgroundColor: '#FFFFFF', rotate: '70deg' }} />
                    <hr style={{ width: 'calc(11vw + 1vmin)', height: 'calc(0.3vh + 0.1vmin)', backgroundColor: '#FFFFFF' }} />
                </span>
                <h2>
                    the science of today is
                    <br />
                    the technology of
                    <br />
                    tomorrow
                </h2>
                <h2 style={{ color: '#FFDF0F', marginTop: 'calc(1vh + 0.1vmin)' }}>teller</h2>
            </div>
        </Container>
    );
}

export default Header;
