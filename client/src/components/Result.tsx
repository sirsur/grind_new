import styled from 'styled-components';

import Info from './Result/Info';
import Footer from './Test/Footer';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/test.webp);
    background-size: cover;
    background-position: center;
`;

const Test = () => {
    return (
        <Container>
            <Info />
            <Footer />
        </Container>
    );
}

export default Test;