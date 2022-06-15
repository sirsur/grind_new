import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
        font-size: calc(2.5vh + 1vmin);
    }
`;

const Buttons = styled.span`
    display: flex;
    gap: 1vmin;
    width: 70%;
    height: 10%;

    form {
        width: calc((100% - 1vmin) / 2);
        height: 100%;
    }

    button {
        height: 100%;
        width: 100%;
        color: #FFFFFF;
        background-color: #1B1B1B;
        border: none;
        border-radius: 0.5rem;
    }

    button:disabled {
        visibility: hidden;
    }
`;

const Labels = styled.span`
    display: flex;
    gap: 3vmin;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
    text-align: left;

    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height: 3vmin;
        width: 3vmin;
        margin: 0;
        border: 0.2vmin solid #FFDF0F;
        border-radius: 50%;
    }

    input:checked {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        background: yellow;
        border-radius: 2px;
    }

    label {
        width: calc(100% - 3vmin - 3vmin);
        font-size: calc(2vh + 1vmin);
    }
`;

const Questions = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);

    const mapFirst = items.map((item, index) => {
        if (index === page - 1) {
            return (
                <Labels key={item._id}>
                    <input type="radio" id="1" value="1" />
                    <label>{item.firstAnswer}</label>
                </Labels>
            )
        }
    });

    const mapSecond = items.map((item, index) => {
        if (index === page - 1) {
            return (
                <Labels key={item._id}>
                    <input type="radio" id="2" value="2" />
                    <label>{item.secondAnswer}</label>
                </Labels>
            )
        }
    });

    function handlePrevious() {
        const p = page - 1;
        setPage(p);
    };
    
    function handleNext() {
        const p = page + 1;
        setPage(p);
    }; 

    useEffect(() => {  
        fetch('/test')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.answers);
                    setCount(result.total);
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
                <h2>
                    let`s suppose that you are able to do either job
                    afret your graduation. but if you have to
                    choose only one option between two possibilities.
                    what will you prefer?
                </h2>
                {mapFirst}
                {mapSecond}
                <Buttons>
                        <input type="hidden" name="page" value={ page } />
                        <button disabled={page === 1} onClick={handlePrevious}>previous question</button>
                        <input type="hidden" name="page" value={ page } />
                        <button disabled={page === count} onClick={handleNext}>next question</button>
                </Buttons>
            </Container>
        );
    }
}

export default Questions;
