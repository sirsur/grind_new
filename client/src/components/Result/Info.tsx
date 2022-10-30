import { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
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

    a {
        display: flex;
        align-items: flex-start;
        width: 70%;
        font-size: calc(1.5vh + 1vmin);
        text-decoration: none;
        font-style: italic;
        color: #FFFFFF;
    }

    h1 {
        font-size: calc(2.7vh + 1vmin);
    }

    p {
        font-size: calc(2.5vh + 1vmin);
    }

    h1, p {
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
        return <div>Error: {error['message']}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container>
                <Link to="/">&lt;&lt; go back</Link>
                <h1>your result:</h1>
                <p>{ result }</p>
            </Container>
        );
    }
}

export default Info;
