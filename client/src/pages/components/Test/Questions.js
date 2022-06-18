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
        font-family: Oneday;
        font-size: calc(1.3vh + 1vmin);
        cursor: pointer;
    }

    button:disabled {
        visibility: hidden;
    }
`;

const Labels = styled.span`
    display: flex;
    gap: 3vmin;
    align-items: center;
    justify-content: center;
    width: 70%;
    text-align: left;

    input[type=radio] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5vmin;
        width: 2.5vmin;
        margin: 0;
        border: 0.2vmin solid #FFDF0F;
        border-radius: 50%;
        cursor: pointer;
    }

    input[type=radio]::before {
        content: '';
        height: 1.3vmin;
        width: 1.3vmin;
        background: #FFDF0F;
        border-radius: 50%;
        opacity: 0;
    }
    
    input[type=radio]:checked::before {
        opacity: 1;
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
    const [result, setResult] = useState([]);

    const mapFirst = items.map((item, index) => {
        if (index === page - 1) {
            return (
                <Labels key={item._id}>
                    <input type="radio" name="radio" onChange={() => handleRadio(index, 1)} />
                    <label>{item.firstAnswer}</label>
                </Labels>
            )
        }
    });

    const mapSecond = items.map((item, index) => {
        if (index === page - 1) {
            return (
                <Labels key={item._id}>
                    <input type="radio" name="radio" onChange={() => handleRadio(index, 2)} />
                    <label>{item.secondAnswer}</label>
                </Labels>
            )
        }
    });

    function handleRadio(index, p) {
        if (result[index] === undefined) { setResult(result => result.concat(p)); }
        else { result[index] = p }
        console.log(result[index]);
    };

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
                {result}
                <Buttons>
                            <button disabled={page === 1} onClick={handlePrevious}>previous question</button>
                        <form method = "post">
                            <input type="hidden" name="result" value={result} />
                            <button disabled={page !== count} type="submit">result</button>
                        </form>
                            <button disabled={page === count} onClick={handleNext}>next question</button>
                </Buttons>
            </Container>
        );
    }
}

export default Questions;
