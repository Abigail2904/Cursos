# 📚 Cursos Express - Gestión de Cursos con Node.js y Express

**Cursos Express** es una aplicación backend desarrollada con Node.js y Express 5. Su finalidad es facilitar la gestión de cursos y servicios relacionados a través de una API robusta, modular y fácil de escalar.

---

## 🎯 Objetivo

El objetivo principal de este proyecto es demostrar cómo crear un backend eficiente y organizado utilizando Node.js y Express 5. Incluye manejo avanzado de rutas, procesamiento de solicitudes HTTP y gestión centralizada de errores.

---

## 🧩 Tecnologías Utilizadas

- **Node.js** (v18 o superior)
- **Express** (v5.1.0)
- **body-parser** (para gestionar datos enviados en el cuerpo de las solicitudes)
- Módulos estándar de Node.js y dependencias de Express para:
  - Manejo de cookies
  - Manipulación de cabeceras
  - Definición de rutas
  - Control de errores

---
## Metodos Rest utilizados:

- **GET /**: Devuelve un mensaje de bienvenida (por ejemplo, `"Mi primer proyecto con node.js y express"`).
- **GET /api/cursos**: Recupera la lista completa de todos los cursos (programación y matemáticas).
- **GET /api/cursos/programacion**: Recupera la lista de todos los cursos de programación.
- **GET /api/cursos/programacion/:language**: Recupera la lista de cursos de programación filtrados por el lenguaje especificado (por ejemplo, `/api/cursos/programacion/javascript`).
- **GET /api/cursos/programacion/:language/:level**: Recupera la lista de cursos de programación filtrados por idioma y nivel (ej., `/api/cursos/programacion/python/basico`).
- **POST /api/cursos/programacion**: Crea un nuevo curso de programación (requiere un cuerpo de solicitud en formato JSON).
- **PATCH /api/cursos/programacion/:id**: Actualiza parcialmente un curso de programación existente con el ID especificado (requiere un cuerpo de solicitud en formato JSON).
- **DELETE /api/cursos/programacion/:id**: Elimina un curso de programación existente con el ID especificado.


## Archivo HTTP:
-GET http://localhost:3000/api/cursos
POST http://localhost:3000/api/cursos/matematicas HTTP/1.1
Content-Type: application/json

{
     "id": 11,
     "titulo": "Aprende suma",
     "tema": "suma",
     "vistas": 12427,
     "nivel": "basico"
}

###
PUT http://localhost:3000/api/cursos/matematicas/10 HTTP/1.1
Content-Type: application/json

{
     "id": 10,
     "titulo": "Aprende suma avanzada",
     "tema": "suma",
     "vistas": 12427,
     "nivel": "basico"
}


###

PATCH http://localhost:3000/api/cursos/matematicas/10 HTTP/1.1
Content-Type: application/json

{
       "titulo": "Aprende suma avanzada",
     "vistas": 15000
}

###
DELETE http://localhost:3000/api/cursos/matematicas/9 HTTP/1.1

## 🖥️ Funcionalidades Principales

- Gestión de rutas HTTP utilizando Express Router
- Procesamiento de solicitudes y respuestas en formato JSON
- Manejo centralizado de errores con `http-errors` y `finalhandler`
- Soporte para cookies y cabeceras HTTP personalizadas
- Estructura modular que permite agregar nuevas rutas y funcionalidades de manera sencilla
