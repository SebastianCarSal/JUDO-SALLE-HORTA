
# 🥋 Web Club de Judo

Este proyecto es una aplicación web desarrollada como parte del módulo de **Desarrollo de Aplicaciones Web (DAW)**. Está enfocada en la gestión de un club de judo, ofreciendo funcionalidades tanto para usuarios como para administradores, con separación clara entre frontend y backend.

---

## ✅ Funcionalidad

- **Registro e inicio de sesión** para usuarios mediante Firebase Authentication.
- **Visualización de productos** en una sección de tienda online.
- **Gestión de carrito de compras**, que permite a los usuarios registrados guardar productos favoritos.
- **Visualización de noticias, judokas y fotos** de competidores.

---

## 🗂️ Arquitectura

El proyecto está desarrollado bajo una arquitectura **MVC** (Modelo - Vista - Controlador), con separación clara entre frontend y backend:

- **Frontend**: desarrollado con **React**, implementando rutas, componentes reutilizables y conexión con el backend mediante peticiones `fetch` o Axios.
- **Backend**: construido con **Node.js** y **Express.js**, expone endpoints REST para que el frontend acceda a los datos.
- **Base de datos**: se utiliza **Firebase** como base de datos NoSQL (Firestore) y como sistema de autenticación.

```
📁 /frontend (React)
📁 /backend (Node + Express)
    └── routes/
    └── controllers/
    └── firebaseConfig.js
```

---

## 🛠️ Tecnologías y Dependencias

### Frontend
- React
- HTML5, CSS3
- Firebase (auth y Firestore)
- Axios (para peticiones HTTP)

### Backend
- Node.js
- Express.js
- Firebase Admin SDK

---

## 📊 Diagramas

### 🔧 Modelo de Datos (Firebase - NoSQL)

Aunque no se usa una base de datos relacional, la estructura aproximada de colecciones en Firebase Firestore sería:

```
/users
   └── userId
        ├── name
        ├── email
        └── carrito: [productoId, ...]

/productos
   └── productoId
        ├── nombre
        ├── precio
        └── imagenURL

/noticias
   └── noticiaId
        ├── titulo
        ├── contenido
        └── fecha

/judokas
   └── judokaId
        ├── nombre
        ├── edad
        └── categoria
```

> Para un diagrama UML de clases, se podría usar PlantUML o incluir un esquema gráfico en una carpeta `/docs/`.

---

## 📡 Endpoints del Backend

La API expone los siguientes endpoints para que el frontend pueda consumir los datos desde Firebase:

| Método | Ruta                   | Descripción                            |
|--------|------------------------|----------------------------------------|
| GET    | `/judokas`            | Obtiene la lista de judokas            |
| GET    | `/noticias`           | Devuelve las noticias del club         |
| GET    | `/fotosCompetidores`  | Muestra las imágenes de competidores   |
| GET    | `/productosTienda`    | Devuelve los productos de la tienda    |
| GET    | `/users`              | Lista los usuarios registrados         |
| GET    | `/productos`          | Muestra todos los productos            |

---

## 📁 Estructura del Código


```bash
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── competidoresController.js
│   │   │   ├── judokasController.js
│   │   │   ├── noticiasController.js
│   │   │   ├── productosController.js
│   │   │   ├── tiendaController.js
│   │   │   └── usersController.js
│   │   ├── models/
│   │   │   ├── competidoresModel.js
│   │   │   ├── judokasModel.js
│   │   │   ├── noticiasModel.js
│   │   │   ├── productosModel.js
│   │   │   ├── tiendaModel.js
│   │   │   └── usersModel.js
│   │   ├── routes/
│   │   │   └── routes.js
│   │   ├── app.js
│   │   ├── firebase.js
│   │   └── index.js
│   ├── .env
│   ├── firebase.json
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── fonts/
│   │   ├── archivoblack.ttf
│   │   ├── bebasneue.ttf
│   │   └── raleway.ttf
│   ├── media/
│   ├── styles/
│   ├── app.js
│   └── index.html
├── .gitignore
└── README.md
```


---

## 🔐 Autenticación

Se ha implementado un sistema de autenticación con **Firebase Authentication**, permitiendo registro e inicio de sesión con correo y contraseña.

---

## 📝 Notas

- Proyecto realizado para el curso **DAW**.
- Para probar la app, debes configurar tu proyecto Firebase y obtener las credenciales necesarias.
- Incluye Firebase Admin SDK en el backend para acceder a Firestore de forma segura.

---

## 📷 Capturas (opcional)

Puedes incluir aquí capturas de pantalla del sitio web, tanto del frontend como del backend si usas una herramienta como Postman.
