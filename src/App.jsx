import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pagina from './pagina/Pagina'; // Certifique-se de que o caminho e a capitalização estão corretos

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagina/pagina" element={<Pagina />} /> {/* Corrigido o caminho da rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
