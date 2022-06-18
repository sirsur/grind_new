import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/tech.webp);
    background-size: cover;
    background-position: center;

    a {
        margin-bottom: auto;
        display: flex;
        align-items: flex-start;
        width: calc(60vw + 15vmax);
    }

    h2 {
        margin-bottom: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15vw;
        height: 8vh;
        border: 0.2rem solid #FFFFFF;
        background-color: transparent;
        color: #FFDF0F;
        font-family: Oneday;
    }
`;

const Header = () => {
    return (
        <Container>
            <Link to="/">go back</Link>
            <h2>technician</h2>
        </Container>
    );
}

export default Header;
