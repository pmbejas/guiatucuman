import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Principal } from './paginas/principal';
import { Guias } from './paginas/guia';
import { Proyecto } from './paginas/proyecto';
import { Layout } from './paginas/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/guia" element={<Guias />} />
          <Route path="/" element={<Principal />} />
          <Route path="/proyecto" element={<Proyecto />} />
        </Route>
      </Routes>      
    </Router>
  );
}

export default App;
