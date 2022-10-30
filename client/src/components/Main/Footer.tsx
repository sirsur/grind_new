import React from 'react';
import styled from 'styled-components';
import { IoMailOutline } from 'react-icons/io5';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    margin: 3vh 25vw;
    padding: 2vh 0;
    background-color: #515151;

    span {
        display: flex;
        flex-direction: row;
        gap: 2vw;
        justify-content: center;
        align-items: center;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40vw;
        height: 7vh;
        padding-top: 0.5rem;
        background-color: #8F8F8F;
        border-radius: 0.5rem;
    }

    h2 {
        padding-top: 0.7rem;
    }
`;

const Footer = () => {
    return (
        <Container>
            <div>
                <span>
                    <IoMailOutline size={'4rem'} />
                    <h2>for your feedback:</h2>
                </span>
            </div>
            <p>grind.lingua@gmail.com</p>
        </Container>
    );
}

export default Footer;
