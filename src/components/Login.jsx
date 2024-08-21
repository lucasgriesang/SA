import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Login', { email, password });
    // Redirecionar para uma página ou ação após o login bem-sucedido
  };

  return (
    
    <div className="auth-container">
    <div class="teste">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrar</button>
        <p>
          Não tem uma conta? <a href="/signup">Cadastre-se</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
