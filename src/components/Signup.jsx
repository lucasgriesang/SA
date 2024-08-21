import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    // Aqui você pode adicionar a lógica para criar uma nova conta
    console.log('Signup', { email, password });
    // Redirecionar para uma página ou ação após o cadastro bem-sucedido
  };

  return (
    <div className="auth-container">
      <div class="teste">
      <h2>Cadastro </h2><br />
      <form onSubmit={handleSignup}>
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
        <label>
          Confirmar Senha:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
        <p>
          Já tem uma conta? <a href="/">Entrar</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
