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
    const [error, setError]       = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult]     = useState('');

    useEffect(() => {  
        fetch('/result?' + new URLSearchParams(window.location.search).toString())
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setResult(result);
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
                <p>{ result }</p>
            </Container>
        );
    }
}

export default Info;
