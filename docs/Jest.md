

# 🧪 Configuración de Pruebas Unitarias con Jest y RTL

Este documento guía la configuración del entorno de pruebas unitarias y de integración utilizando **Jest** como ejecutor de pruebas y **React Testing Library (RTL)** para interactuar con los componentes.

## 1\. Instalación de Dependencias 📦

Debes instalar Jest, Babel (para entender JSX y JS moderno) y las librerías de Testing Library como dependencias de desarrollo (`--save-dev`).

### 1.1. Instalar el Núcleo (Jest y Babel)

Ejecuta el siguiente comando para instalar el motor de pruebas y las herramientas necesarias para transpilar el código:

```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react react-test-renderer@18
# O
yarn add --dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react react-test-renderer
```

### 1.2. Instalar React Testing Library (RTL)

Instala la biblioteca principal de RTL, la biblioteca de aserciones (`jest-dom`) y el simulador de eventos de usuario (`user-event`):

```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer@18
npm install --save-dev @testing-library/react
npm install jest-environment-jsdom --save-dev

npm install --save-dev @testing-library/user-event
npm install --save-dev @testing-library/jest-dom
```

-----

## 2\. Configuración de Babel y Jest ⚙️

### 2.1. Configuración de Babel (`babel.config.js`)

Crea un archivo llamado **`babel.config.js`** en la raíz de tu proyecto para indicarle a Jest (a través de `babel-jest`) cómo procesar los archivos JSX y JavaScript moderno:

```javascript
// babel.config.js
module.exports = {
  presets: [
    // Transpila el JavaScript moderno (ES6/ES7)
    '@babel/preset-env',
    // Transpila la sintaxis JSX de React
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
};
```

### 2.2. Configuración de Jest (`package.json`)

Añade los *scripts* de prueba y configura Jest para que cargue automáticamente el entorno DOM y los *matchers* de `jest-dom`.

Edita tu archivo **`package.json`** para incluir el bloque `jest`:

```json
// package.json

{
  "scripts": {
    "start": "react-scripts start",
    "test": "jest",  // Comando clave para ejecutar tus tests
    "eject": "react-scripts eject"
  },
  "jest": {
    // Usa JSDOM para simular un entorno de navegador
    "testEnvironment": "jsdom", 
  }
}
```

-----

## 3\. Ejecución de Pruebas ▶️

Una vez completada la instalación y configuración, puedes ejecutar tus pruebas unitarias desde la terminal:

```bash
npm test
# O
yarn test
```

Este comando iniciará Jest en modo de vigilancia (*watch*), que es ideal para el desarrollo, ya que vuelve a ejecutar los tests automáticamente cuando detecta cambios en tus archivos.