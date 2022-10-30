import React from 'react';
import {createGlobalStyle} from 'styled-components';

import Header from './Main/Header';
import Br from './Main/Br';
import About from './Main/About';
import Start from './Main/Start';
import Choice from './Main/Choice';
import Footer from './Main/Footer';

const GlobalStyle = createGlobalStyle`
    h1 {
        font-size: calc(8vh + 5vmin);
    }

    h2 {
        font-size: calc(3vh + 2vmin);
    }

    hr {
        border: 0;
    }
`;

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Br name="About" />
      <About />
      <Br name="Start" />
      <Start />
      <Br name="Choice" />
      <Choice />
      <Footer />
    </>
  );
}

export default Main;