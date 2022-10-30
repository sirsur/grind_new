import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/start.webp);
    background-size: cover;
    background-position: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 9rem;
        border: 0.2rem solid #FFFFFF;
        background-color: transparent;
        color: yellow;
        padding-top: 1rem;
        font-size: 3.5vw;
        text-decoration: none;
        transition: 0.5s;
    }

    a:hover {
        background-color: #000000;
        border-color: #FFDF0F; 
    }

    h1 {
        color: #FFDF0F;
    }

    hr {
        width: 60rem;
        height: 0.2rem;
        background-color: #FFFFFF;
        border: 0;
    }
`;

const Start = () => {
    const [text, setText] = useState('test');

    return (
        <Container>
            <h1>check your direction</h1>
            <Link to="/test" 
                onMouseOver={() => setText('let`s go!')} 
                onMouseLeave={() => setText('test')}
            >
                { text }
            </Link>
            <hr />
            <h2>
                choose a career that matches your
                <br />
                preferences and you will increase your
                <br />
                chances of being successful
            </h2>
        </Container>
    );
}

export default Start;
