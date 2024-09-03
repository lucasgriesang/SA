import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pagina from './pagina/Pagina'; 
import contato from './pagina/contato';
import erro from './pagina/erro';
import lixo from './pagina/lixo';
import tudo from './pagina/tudo';
import gg from './pagina/gg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagina/contato" element={<contato />} /> {}
          <Route path="/pagina/erro" element={<erro />} /> {}
          <Route path="/pagina/tudo" element={<tudo />} /> {}
          <Route path="/pagina/gg" element={<gg />} /> {}
          <Route path="/pagina/pagina" element={<Pagina />} /> {}
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
