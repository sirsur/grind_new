import React from "react";

import Main from './components/Main';
import Test from './components/Test';
import Hum from './components/Hum';
import Tech from './components/Tech';
import Result from './components/Result';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/humanitarian" element={<Hum />} />
        <Route path="/technician" element={<Tech />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
