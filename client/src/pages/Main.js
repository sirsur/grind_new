import React from 'react';

import Header from './components/Main/Header';
import Br from './components/Main/Br';
import About from './components/Main/About';
import Start from './components/Main/Start';
import Choice from './components/Main/Choice';
import Footer from './components/Main/Footer';


const Main = () => {
  return (
    <>
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