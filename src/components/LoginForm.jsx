// LoginForm.jsx
import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isButtonDisabled = !username || !password;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, password });
    };

    return (
        // CLASE AÑADIDA AQUÍ
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Inicia Sesión</h2>

            <div>
                <label htmlFor="username-input">Usuario:</label>
                <input
                    id="username-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Escribe tu usuario"
                />
            </div>

            <div>
                <label htmlFor="password-input">Contraseña:</label>
                <input
                    id="password-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Escribe tu contraseña"
                />
            </div>

            <button
                type="submit"
                disabled={isButtonDisabled}
            >
                Iniciar Sesión
            </button>

        </form>
    );
}

export default LoginForm;