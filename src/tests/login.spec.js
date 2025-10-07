// tests/login.spec.js
import { test, expect } from '@playwright/test';

// El test navega a la raíz (baseURL) y simula el login exitoso
test('debería permitir el login con credenciales correctas', async ({ page }) => {
    // Navegar a la página principal
    await page.goto('/');

    // 1. Interacción: Llenar el campo 'Usuario' (usa getByLabel para accesibilidad)
    await page.getByLabel('Usuario:').fill('admin');

    // 2. Interacción: Llenar el campo 'Contraseña'
    await page.getByLabel('Contraseña:').fill('12345');

    // 3. Interacción: Clicar el botón de inicio de sesión
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

    // 4. Aserción: Esperar el mensaje de éxito (la lógica simulada en App.jsx)
    // Playwright espera automáticamente hasta 30s a que este elemento sea visible.
    await expect(page.getByText('¡Bienvenido, admin! Sesión iniciada.')).toBeVisible();

    // 5. Aserción: Verificar que el botón de cerrar sesión apareció
    await expect(page.getByRole('button', { name: 'Cerrar Sesión' })).toBeVisible();
});