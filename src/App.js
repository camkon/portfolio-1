import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Content/Home';
import Layout from './Content/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
