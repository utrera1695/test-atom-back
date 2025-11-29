# AtomChat - Backend

Este es el backend para la prueba técnica de AtomChat. Proporciona la API para la autenticación de usuarios y la gestión de tareas estilo ToDo List, utilizando Firebase para la persistencia de datos y JWT para la autenticación.

## Características

- **Autenticación de Usuarios:** Registro e inicio de sesión.
- **Sesiones con JWT:** Generación de JSON Web Tokens (JWT) para manejar sesiones de usuario de forma segura.
- **Integración con Firebase:** Utiliza Firestore como base de datos para almacenar la información de los usuarios y tareas.
- **Middleware de Autenticación:** Un middleware para proteger las rutas que requieren que el usuario esté autenticado.
- **Escrito en TypeScript:** Código tipado para mayor robustez y mantenibilidad.
- **Documentación de los endpoints:** Utilizando swagger-jsdoc y Scalar para una mejor presentación

## Empezando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Una cuenta de [Firebase](https://firebase.google.com/) con un proyecto creado y Firestore habilitado.

### Instalación

1.  Clona el repositorio en tu máquina local:

    ```sh
    git clone
    ```

2.  Ingresa al directorio e instala las dependencias del proyecto:
    ```sh
    npm install
    ```

### Configuración

1.  **Credenciales de Firebase:**

    - Ve a la consola de Firebase, selecciona tu proyecto.
    - Ve a "Configuración del proyecto" > "Cuentas de servicio".
    - Genera una nueva clave privada y descarga el archivo JSON.
    - Pega el archivo descargado en la raiz del proyecto

2.  **Variables de Entorno:**

    - Crea un archivo `.env` en la raíz del directorio o copia el contenido de .env.example.
    - Añade también un secreto para los JWT.

    Tu archivo `.env` debería verse así:

    ```env
    NODE_ENV=production
    FIREBASE_SERVICE_ACCOUNT=./firebaseServiceAccount.json
    JWT_SECRET=secreto_jwt
    PORT=3000
    ```

## Ejecución

### Modo de Desarrollo

Para iniciar el servidor en modo de desarrollo:

```sh
npm run dev
```

### Modo producción

Esto compilara y pondra en ejecucíon la api

```sh
npm run start
```

## Pruebas

El proyecto utiliza Jest para las pruebas unitarias y de integración. Para ejecutar la suite de pruebas:

```sh
npm run test
```

## Documentación

Con el proyecto ejecutandose puedes ingresar a [http://localhost:PORT/docs](http://localhost:<PORT>/docs) para ver la documentación de los endpoints
