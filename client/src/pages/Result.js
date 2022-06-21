import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';

const Container = styled.section`
`;

const Result = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState('');

    const queryString = window.location.search;

    useEffect(() => {  
        fetch('/result?' + new URLSearchParams(queryString).toString())
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
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
                <p>{items}</p>
            </Container>
        );
    }
}

export default Result;
