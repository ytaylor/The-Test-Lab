

# 🧪 React Testing Playground

## Repositorio de Práctica de Testing en React con RTL y Jest

Este proyecto es un entorno de prueba (*playground*) diseñado específicamente para practicar y dominar los conceptos de **testing** en aplicaciones de React. Nos enfocamos en las mejores prácticas utilizando **React Testing Library (RTL)** y **Jest**.

-----

## 🚀 Empezando

Sigue estos pasos para clonar el repositorio y configurar el entorno de pruebas.

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/en) y [npm](https://www.npmjs.com/) o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instalados.

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone [TU-URL-DEL-REPOSITORIO]
    cd [nombre-del-repo]
    ```

2.  **Instala las dependencias:**
    El proyecto ya incluye Jest, React Testing Library (`@testing-library/react`), y `user-event` configurados.

    ```bash
    npm install
    # o
    yarn install
    ```

-----

## 💻 Componentes Principales

La aplicación contiene un formulario de inicio de sesión que simula la interacción del usuario y la respuesta de una API, ideal para practicar pruebas de integración.

| Archivo | Descripción | Enfocado en Práctica |
| :--- | :--- | :--- |
| **`LoginForm.jsx`** | Un componente con *inputs* y un botón de envío que maneja el estado local. | **Testing Unitario/Integración:** Simulación de entrada de datos y *mocking* de la función de envío. |
| **`LoginForm.test.js`** | Contiene las pruebas para verificar la deshabilitación del botón y la llamada correcta a la función `onSubmit`. | **Jest/RTL:** Uso de `user-event`, `jest.fn()`, `toBeDisabled()`, y `toHaveBeenCalledWith()`. |
| **`App.jsx`** | Componente principal que integra el `LoginForm` y simula la lógica asíncrona de autenticación con `setTimeout`. | **Estructura:** Separa la lógica de negocio (`handleLogin`) del componente de presentación (`LoginForm`). |

-----

## ✅ Ejecución de Pruebas

Para ejecutar las pruebas y ver si tu componente `LoginForm` se comporta como se espera, usa el siguiente comando:

```bash
npm test
# o
yarn test
```

### Consejos de Testing:

  * **Enfoque en el usuario:** Las pruebas están escritas para verificar el resultado desde la perspectiva del usuario (ej. ¿Se deshabilita el botón? ¿Aparece el texto?).
  * **Aislamiento:** Usamos **`jest.fn()`** en `LoginForm.test.js` para **simular** la función `handleLogin` de `App.jsx`, aislando el formulario y evitando que las pruebas esperen el `setTimeout` real.

-----

## 🎨 Modo Desarrollo

Si deseas ver la aplicación y los estilos en tu navegador antes de probarla, ejecuta:

```bash
npm start
# o
yarn start
```

-----

## 📚 Estructura de Archivos

```
/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   └── LoginForm.test.js   <-- ¡Aquí está el código de prueba!
│   ├── App.jsx
│   └── App.css
├── package.json
└── README.md
```

-----

¡Felices Pruebas\! Siéntete libre de añadir más ejercicios de testing.