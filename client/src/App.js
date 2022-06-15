import React from 'react';

import Main from './pages/Main';
import Test from './pages/Test';
import Hum from './pages/Hum';
import Tech from './pages/Tech';

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
      </Routes>
    </Router>
  );
}

export default App;
