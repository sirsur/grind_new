import React from 'react';
import styled from 'styled-components';
import { IoFlash, IoLibrary, IoAccessibility } from 'react-icons/io5';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/about.png);
    background-size: cover;
    background-position: center;

    h1 {
        color: yellow;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }
`;

const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;
    width: 16rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .5);
`;

const About = () => {
    return (
        <Container>
            <h1>
                what for the site
                <br />
                was created
            </h1>
            {/*
            <span>
                <Circle><IoFlash size={'7rem'} color={'yellow'} /></Circle>
                <h2>
                    introduce different
                    <br />
                    professions to
                    <br />
                    students
                </h2>
            </span>
            */}
            <span>
                <h2>
                    give information about
                    <br />
                    good universities in
                    <br />
                    russia
                </h2>
                <Circle><IoLibrary size={'7rem'} color={'yellow'} /></Circle>
            </span>
            <span>
            <Circle><IoAccessibility size={'7rem'} color={'yellow'} /></Circle>
                <h2>
                    help teenagers to
                    <br />
                    choose their future
                    <br />
                    profession
                </h2>
            </span>
        </Container>
    );
}

export default About;
