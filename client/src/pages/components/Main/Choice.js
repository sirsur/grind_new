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
    background-image: url(${process.env.PUBLIC_URL}/img/choice.webp);
    background-size: cover;
    background-position: center;

    span {
        display: flex; 
        flex-direction: row;
        gap: 5vw;
        justify-content: center;
        align-items: center;
    }

    div {
        display: flex; 
        flex-direction: column;
        gap: 4vh;
        justify-content: center;
        align-items: center;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25rem;
        height: 9rem;
        padding-top: 1rem;
        border: 0.2rem solid #FFFFFF;
        background-color: transparent;
        color: yellow;
        font-size: 3.5vw;
        text-decoration: none;
        transition: 0.5s;
    }

    a:hover {
        background-color: #000000;
        border-color: yellow; 
    }

    h1 {
        color: yellow;
    }

    hr {
        width: 60rem;
        height: 0.2rem;
        background-color: #FFFFFF;
        border: 0;
    }
`;

const Choice = () => {
    const [hum, setHum] = useState('humanitarian');
    const [tech, setTech] = useState('technician');

    return (
        <Container>
            <h1>choose your way</h1>
            <span>
                <div>
                    <p>
                        if you are a creative person,
                        <br />
                        prefer literature, art, like to
                        <br />
                        discuss different topics and
                        <br />
                        do it well, then most likely
                        <br />
                        you are:
                    </p>
                    <Link to="/humanitarian"
                        onMouseOver={() => setHum('let`s go!')}
                        onMouseLeave={() => setHum('humanitarian')}
                    >
                        { hum }
                    </Link>
                </div>
                <div>
                    <p>
                        if you like counting, the laws
                        <br />
                        of physics, well versed in
                        <br />
                        science, and also in
                        <br />
                        computers, then most likely
                        <br />
                        you are:
                    </p>
                    <Link to="/technician"
                        onMouseOver={() => setTech('let`s go!')}
                        onMouseLeave={() => setTech('technician')}
                    >
                        { tech }
                    </Link>
                </div>
            </span>
            <hr />
            <h2>
                the right choice of university and profession
                <br />
                leads to the great future
            </h2>
        </Container>
    );
}

export default Choice;
