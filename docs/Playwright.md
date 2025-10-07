
# 🌐 Pruebas End-to-End (E2E) con Playwright

Este documento detalla los pasos para configurar y ejecutar pruebas End-to-End (E2E) utilizando **Playwright** en tu aplicación React. Las pruebas E2E validan el flujo de usuario completo en un navegador real.

## 1\. Instalación y Configuración 📦

### 1.1. Instalar Playwright

Ejecuta el siguiente comando en la raíz de tu proyecto para instalar el *framework* y los navegadores necesarios (Chromium, Firefox y WebKit):

```bash
npm init playwright@latest
# O
yarn create playwright
```

Responde a las indicaciones del asistente de instalación (ej. elige **JavaScript** como lenguaje y la carpeta **`tests`** para tus archivos de prueba).

### 1.2. Configurar el Servidor (`playwright.config.js`)

Es crucial que Playwright sepa cómo y dónde iniciar tu servidor de desarrollo. Verifica que la sección `webServer` en **`playwright.config.js`** coincida con el inicio de tu aplicación React:

```javascript
// playwright.config.js

// ... (otras configuraciones)

webServer: {
  // Comando para iniciar tu servidor React
  command: 'npm run start', 
  // URL y puerto donde se ejecuta tu aplicación
  url: 'http://127.0.0.1:5173', 
  // Permite un tiempo razonable para que el servidor inicie
  timeout: 120 * 1000, 
  reuseExistingServer: !process.env.CI,
},

use: {
  // URL base para abreviar `await page.goto('/')`
  baseURL: 'http://127.0.0.1:5173', 
},

// ...
```

-----

## 2\. Crear una Prueba E2E (Login) 📝

Crea un archivo llamado **`tests/login.spec.js`** y añade el siguiente código para probar el flujo de inicio de sesión:

```javascript
// tests/login.spec.js
import { test, expect } from '@playwright/test';

test('debería permitir el login con credenciales correctas', async ({ page }) => {
  // Arrange: Navegar a la página principal
  await page.goto('/');

  // Act: Llenar el formulario usando selectores de accesibilidad
  await page.getByLabel('Usuario:').fill('admin'); 
  await page.getByLabel('Contraseña:').fill('12345'); 

  // Act: Clicar el botón de envío
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

  // Assert: Verificar el mensaje de éxito 
  const successMessage = page.getByText('¡Bienvenido, admin! Sesión iniciada.');
  await expect(successMessage).toBeVisible();

  // Assert: Verificar que el botón de cerrar sesión aparece
  await expect(page.getByRole('button', { name: 'Cerrar Sesión' })).toBeVisible();
});
```

-----

## 3\. Ejecución de las Pruebas ▶️

Utiliza estos comandos para ejecutar tus pruebas E2E.

| Propósito | Comando |
| :--- | :--- |
| **Ejecución estándar** | `npx playwright test` |
| **Debug & Visualización** | `npx playwright test --headed` (Abre el navegador para ver la prueba en acción) |
| **Generar Código** | `npx playwright codegen http://127.0.0.1:5173` (Inicia el grabador de interacciones) |
| **Ver el Reporte** | `npx playwright show-report` (Muestra un informe HTML detallado) |

-----

## 💡 Consejos de Playwright

  * **Autoreparación:** Playwright espera automáticamente a que los elementos carguen.
  * **Selectores:** Prioriza los selectores basados en el usuario (`getByRole`, `getByLabel`) para pruebas más robustas y accesibles.


### 1.1. Instalar Playwright

Ejecuta el siguiente comando en la raíz de tu proyecto para instalar el *framework* y los navegadores necesarios (Chromium, Firefox y WebKit):

```bash
npm init playwright@latest
# O
yarn create playwright
```

Responde a las indicaciones del asistente de instalación (ej. elige **JavaScript** como lenguaje y la carpeta **`tests`** para tus archivos de prueba).

### 1.2. Configurar el Servidor (`playwright.config.js`)

Es crucial que Playwright sepa cómo y dónde iniciar tu servidor de desarrollo. Verifica que la sección `webServer` en **`playwright.config.js`** coincida con el inicio de tu aplicación React:

```javascript
// playwright.config.js

// ... (otras configuraciones)

webServer: {
  // Comando para iniciar tu servidor React
  command: 'npm run start', 
  // URL y puerto donde se ejecuta tu aplicación
  url: 'http://127.0.0.1:5173', 
  // Permite un tiempo razonable para que el servidor inicie
  timeout: 120 * 1000, 
  reuseExistingServer: !process.env.CI,
},

use: {
  // URL base para abreviar `await page.goto('/')`
  baseURL: 'http://127.0.0.1:5173', 
},

// ...
```

-----

## 2\. Crear una Prueba E2E (Login) 📝

Crea un archivo llamado **`tests/login.spec.js`** y añade el siguiente código para probar el flujo de inicio de sesión:

```javascript
// tests/login.spec.js
import { test, expect } from '@playwright/test';

test('debería permitir el login con credenciales correctas', async ({ page }) => {
  // Arrange: Navegar a la página principal
  await page.goto('/');

  // Act: Llenar el formulario usando selectores de accesibilidad
  await page.getByLabel('Usuario:').fill('admin'); 
  await page.getByLabel('Contraseña:').fill('12345'); 
  
  // Act: Clicar el botón de envío
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

  // Assert: Verificar el mensaje de éxito 
  const successMessage = page.getByText('¡Bienvenido, admin! Sesión iniciada.');
  await expect(successMessage).toBeVisible();
  
  // Assert: Verificar que el botón de cerrar sesión aparece
  await expect(page.getByRole('button', { name: 'Cerrar Sesión' })).toBeVisible();
});
```

-----

## 3\. Ejecución de las Pruebas ▶️

Utiliza estos comandos para ejecutar tus pruebas E2E.

| Propósito | Comando |
| :--- | :--- |
| **Ejecución estándar** | `npx playwright test` |
| **Debug & Visualización** | `npx playwright test --headed` (Abre el navegador para ver la prueba en acción) |
| **Generar Código** | `npx playwright codegen http://127.0.0.1:5173` (Inicia el grabador de interacciones) |
| **Ver el Reporte** | `npx playwright show-report` (Muestra un informe HTML detallado) |

-----

## 💡 Consejos de Playwright

  * **Autoreparación:** Playwright espera automáticamente a que los elementos carguen.
  * **Selectores:** Prioriza los selectores basados en el usuario (`getByRole`, `getByLabel`) para pruebas más robustas y accesibles.