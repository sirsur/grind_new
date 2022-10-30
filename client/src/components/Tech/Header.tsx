import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/tech.webp);
    background-size: cover;
    background-position: center;

    a {
        position: absolute;
        display: flex;
        align-items: flex-start;
        width: calc(60vw + 15vmax);
        font-size: calc(1.5vh + 1vmin);
        text-decoration: none;
        font-style: italic;
        color: #FFFFFF;
    }

    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(17vw + 1vmin);
        height: calc(11vh + 1vmin);
        border: 0.2rem solid #FFFFFF;
        background-color: transparent;
        color: #FFDF0F;
        font-family: Oneday;
    }
`;

const Header = () => {
    return (
        <Container>
            <Link to="/">&lt;&lt; go back</Link>
            <h2>technician</h2>
        </Container>
    );
}

export default Header;
