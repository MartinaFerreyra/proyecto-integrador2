
# MiniBlog API 🚀

API REST construida con **Node.js + Express + PostgreSQL** para gestionar autores y publicaciones.

Proyecto integrador backend para DevSpark.

---

# Estructura del proyecto

```

proyecto-integrador2/


├── src/
│   ├── app.js                  # Configuración de Express
│   ├── server.js               # Punto de entrada del servidor
│   │
│   ├── db/
│   │   └── index.js            # Conexión PostgreSQL usando pg.Pool
│   │
│   ├── routes/
│   │   ├── authors.js          # Rutas /authors
│   │   ├── posts.js            # Rutas /posts
│   │   └── comments.js         # Rutas /comments
│   │
│   ├── controllers/
│   │   ├── authorsController.js
│   │   ├── postsController.js
│   │   └── commentsController.js
│   │
│   ├── services/
│   │   ├── authorsServices.js  # Consultas SQL de autores
│   │   ├── postsServices.js    # Consultas SQL de posts
│   │   └── commentsServices.js # Consultas SQL de comments
│   │
│   ├── middlewares/
│   │   └── validation.js       # Validaciones básicas
│   │
│   └── tests/
│       ├── authors.test.js
│       └── posts.test.js
│
├── openapi.yaml                 # Documentación OpenAPI
├── .env.example
├── .gitignore
└── package.json
````

---

# Requisitos

- Node.js v18 o superior
- PostgreSQL instalado
- npm

---

# Ejecución local

## 1. Clonar e instalar dependencias

```bash
git clone https://github.com/MartinaFerreyra/proyecto-integrador2.git

cd proyecto-integrador2

npm install
````

---

## 2. Configurar variables de entorno

Crear un archivo `.env` copiando `.env.example`:

```bash
cp .env.example .env
```

Completar los datos:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tuContraseña
DB_NAME=miniblog
```

---

## 3. Crear la base de datos

Desde PostgreSQL:

```sql
CREATE DATABASE miniblog;
```

Luego conectarse a la base de datos:

```
\c miniblog
```

Una vez creada la base, ejecutar los scripts del proyecto:

```
psql -U postgres -d miniblog -f sql/setup.sql
psql -U postgres -d miniblog -f sql/seed.sql
```

Crear las tablas necesarias:

* authors
* posts
* comments

Relación:

```
authors 1 ---- N posts  
authors 1 ---- N comments  
posts 1 ---- N comments
```

Un autor puede tener múltiples publicaciones.

---

## 4. Iniciar el servidor

```bash
node src/server.js
```

La API estará disponible en:

```
http://localhost:3000
```

---

# Comandos útiles

```bash
npm install
```

Instala dependencias.

```bash
node src/server.js
```

Inicia el servidor.

```bash
npm test
```

Ejecuta los tests.

---

# Endpoints disponibles

## Authors

| Método | Ruta         | Descripción             |
| ------ | ------------ | ----------------------- |
| GET    | /authors     | Lista todos los autores |
| GET    | /authors/:id | Obtiene un autor por ID |
| POST   | /authors     | Crea un autor           |
| PUT    | /authors/:id | Actualiza un autor      |
| DELETE | /authors/:id | Elimina un autor        |

---

## Posts

| Método | Ruta                    | Descripción            |
| ------ | ----------------------- | ---------------------- |
| GET    | /posts                  | Lista todos los posts  |
| GET    | /posts/:id              | Obtiene un post por ID |
| GET    | /posts/author/:authorId | Posts de un autor      |
| POST   | /posts                  | Crea un post           |
| PUT    | /posts/:id              | Actualiza un post      |
| DELETE | /posts/:id              | Elimina un post        |
| GET    | /comments/post/:postId  | Comentarios de un post |

---

# Validaciones

## Authors

* El campo `name` no puede estar vacío.
* El email debe ser único.

## Posts

* `title` obligatorio.
* `content` obligatorio.
* `author_id` obligatorio.

## Comments

* `post_id` obligatorio.
* `author_id` obligatorio.
* `content` obligatorio.
---

# Variables de entorno

| Variable    | Descripción          |
| ----------- | -------------------- |
| PORT        | Puerto del servidor  |
| DB_HOST     | Dirección PostgreSQL |
| DB_PORT     | Puerto PostgreSQL    |
| DB_USER     | Usuario PostgreSQL   |
| DB_PASSWORD | Contraseña           |
| DB_NAME     | Nombre de la base    |

⚠️ Nunca subir `.env` a GitHub.
Solo debe subirse `.env.example`.

---

# Documentación OpenAPI

La documentación completa se encuentra en:

```
openapi.yml
```

Puede visualizarse usando:

https://editor.swagger.io

---

# Tests

Los tests fueron realizados con Jest y Supertest.

Ejecutar:

```bash
npm test
```

Cubren pruebas básicas de autores y posts.

---

# Deploy en Railway

API en producción
https://proyecto-integrador2-production.up.railway.app

# Swagger / OpenAPI
https://proyecto-integrador2-production.up.railway.app/api-docs/#/

### Health Check
Estado del servidor:

https://proyecto-integrador2-production.up.railway.app/health

### Authors
Listar autores:

https://proyecto-integrador2-production.up.railway.app/authors

### Comments
Obtener comentarios de un post:

https://proyecto-integrador2-production.up.railway.app/comments/post/1

# Proceso de deploy
1. Subir proyecto a GitHub
2. Crear proyecto en Railway
3. Conectar repositorio
4. Agregar PostgreSQL
5. Configurar variables de entorno:

```
PORT
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

Railway desplegará la aplicación automáticamente con cada actualización del repositorio.

---

# Uso de IA en el proyecto

Durante el desarrollo se utilizó IA como herramienta de apoyo para:

* Organización de la documentación OpenAPI
* Resolución de dudas relacionadas con Git (preparación y subida de archivos al repositorio).
* Guía para el proceso de despliegue en Railway.

```
```
