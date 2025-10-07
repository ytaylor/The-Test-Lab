// LoginForm.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LoginForm from '../components/LoginForm';


describe('LoginForm', () => {
    // 1. Caso de Prueba: Verificar el estado inicial y la accesibilidad
    test('debe renderizar todos los campos requeridos y el botón deshabilitado', () => {
        render(<LoginForm onSubmit={() => { }} />);

        // Verifica que los elementos importantes están en el documento
        expect(screen.getByRole('heading', { name: /inicia sesión/i })).toBeInTheDocument();

        // getByRole es la forma preferida para buscar inputs por su label
        const usernameInput = screen.getByRole('textbox', { name: /usuario/i });
        const passwordInput = screen.getByLabelText(/contraseña/i); // Alternativa para inputs de contraseña
        const submitButton = screen.getByRole('button', { name: /iniciar sesión/i });

        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        // Verifica que el botón está inicialmente deshabilitado (VALIDACIÓN DE CAMPOS)
        expect(submitButton).toBeDisabled();
    });

    // 2. Caso de Prueba: Testing de interacciones del usuario y estado del botón
    test('el botón se habilita cuando ambos campos tienen contenido', async () => {
        const user = userEvent.setup();
        render(<LoginForm onSubmit={() => { }} />);

        const usernameInput = screen.getByLabelText(/usuario/i);
        const passwordInput = screen.getByLabelText(/contraseña/i);
        const submitButton = screen.getByRole('button', { name: /iniciar sesión/i });

        // 1. Act: Escribir solo en el campo de usuario
        await user.type(usernameInput, 'testuser');
        expect(submitButton).toBeDisabled();

        // 2. Act: Escribir en el campo de contraseña
        await user.type(passwordInput, 'password123');

        // 3. Assert: El botón debe habilitarse
        expect(submitButton).toBeEnabled();
    });

    // 3. Caso de Prueba: Mocking de una función externa (simulando una API)
    test('debe llamar a la función onSubmit con los datos correctos al enviarse', async () => {
        const user = userEvent.setup();

        // Arrange: Creamos una función simulada (Mock Function) para capturar los datos enviados
        const mockSubmit = jest.fn();

        render(<LoginForm onSubmit={mockSubmit} />);

        const usernameInput = screen.getByLabelText(/usuario/i);
        const passwordInput = screen.getByLabelText(/contraseña/i);
        const submitButton = screen.getByRole('button', { name: /iniciar sesión/i });

        // Act: Simular la escritura
        const testUsername = 'pepitoPerez';
        const testPassword = 'securePassword';
        await user.type(usernameInput, testUsername);
        await user.type(passwordInput, testPassword);

        // Act: Simular el clic en el botón de envío
        await user.click(submitButton);

        // Assert 1: Verificar que la función de envío (mockSubmit) fue llamada
        expect(mockSubmit).toHaveBeenCalledTimes(1);

        // Assert 2: Verificar que la función fue llamada con el objeto de datos correcto (MÁS IMPORTANTE)
        expect(mockSubmit).toHaveBeenCalledWith({
            username: testUsername,
            password: testPassword,
        });
    });

});