import React, {FC} from 'react';
import styled from 'styled-components';

const Container = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: calc(2vh + 1vmin);
    gap: calc(1vw + 0.1vmin);

    h1 {
        font-size: calc(3vh + 3vmin);
        margin: 0 calc(2vw + 1vmin) 0 calc(2vw + 1vmin);
    }

    hr {
        height: calc(0.3vh + 0.1vmin);
        width: calc(30vw + 1vmin);
        background-color: #FFFFFF;
    }
`;

interface NameProps {
    name: React.ReactChild | React.ReactNode;
}

const Br: FC<NameProps> = ({name}) => {
    return (
        <Container>
            <hr />
            <h1>{name}</h1>
            <hr />
        </Container>
    );
}

export default Br;
