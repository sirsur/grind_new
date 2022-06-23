import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 1rem;
    height: 65vh;
    width: calc(60vw + 15vmax);
    margin-top: calc((100vh - 65vh - 8vh - 1vmin) / 2);
    background-color: #2D2D2D;

    h2 {
        width: 70%;
    }
`;

const Info = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [nature, setNature] = useState(0);
    const [tech, setTech] = useState(0);
    const [human, setHuman] = useState(0);
    const [art, setArt] = useState(0);
    const [sign, setSign] = useState(0);

    const queryString = window.location.search;

    useEffect(() => {  
        fetch('/result?' + new URLSearchParams(queryString).toString())
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setNature(result.natureRes);
                    setTech(result.techRes);
                    setHuman(result.humanRes);
                    setSign(result.signRes);
                    setArt(result.artRes);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container>
                <h2>your result:</h2>
                <p>nature: {nature}</p>
                <p>tech: {tech}</p>
                <p>human: {human}</p>
                <p>sign: {sign}</p>
                <p>art: {art}</p>
            </Container>
        );
    }
}

export default Info;
