import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 30vh;  
    background-color: #FFFFFF;
    color: #000000;

    p {
        width: 60vw;
    }
`;

const Between = () => {
    return (
        <Container>
            <p>
                we made up a list of professions, suitable
                for technician person as well. here you can
                find information about various polytechnic 
                universities with its entry exams
            </p>
        </Container>
    );
}

export default Between;
