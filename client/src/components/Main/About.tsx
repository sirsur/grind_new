import React from 'react';
import styled from 'styled-components';
import {IoLibrary, IoAccessibility} from 'react-icons/io5';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: calc(10vh + 1vmin);
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/about.webp);
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    div {
        max-width: calc(60vw + 15vmax);
    }

    h1 {
        color: #FFDF0F;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: calc(1vw + 5vmin);
    }
`;

const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(18vh + 5vmin);
    width: calc(18vh + 5vmin);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .5);
`;

const About = () => {
    return (
        <Container>
            <div>
                <h1>
                    what for the site
                    <br />
                    was created
                </h1>
                <span>
                    <h2>
                        give information about
                        <br />
                        good universities in
                        <br />
                        russia
                    </h2>
                    <Circle><IoLibrary size={'calc(9vh + 1vmin)'} color={'#FFDF0F'} /></Circle>
                </span>
                <span>
                <Circle><IoAccessibility size={'calc(9vh + 1vmin)'} color={'#FFDF0F'} /></Circle>
                    <h2>
                        help teenagers to
                        <br />
                        choose their future
                        <br />
                        profession
                    </h2>
                </span>
            </div>
        </Container>
    );
}

export default About;
