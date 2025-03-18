# Desafío Técnico: Visualizador de Películas IMDB

## Descripción del Proyecto
El objetivo de este desafío es construir una aplicación fullstack que cargue un archivo CSV con
una lista de películas de IMDB y exponga esta información a través de una API en Flask.
Además, se debe desarrollar un frontend en React que permita visualizar y filtrar las películas
por título.
## Requisitos del Desafío
### 1. Backend (Flask)
- Implementar una API REST con Flask que maneje la información de las películas.
- Endpoint principal:
    - GET /movies: Retorna la lista de películas disponibles en el CSV.
    - GET /movies?title=: Permite filtrar las películas por título.
- La API debe cargar los datos desde el archivo CSV proporcionado.
### 2. Frontend (React)
- Crear una aplicación en React que consuma la API y muestre la lista de películas.
- Implementar una interfaz amigable para visualizar las películas en forma de tabla o
tarjetas.
- Agregar una barra de búsqueda que permita filtrar las películas por título en tiempo real.
### 3. Documentación
- Incluir un archivo README.md con instrucciones detalladas para ejecutar el proyecto
localmente.
- Proporcionar ejemplos de cómo interactuar con la API utilizando curl o Postman.
### 4. Pruebas
- Implementar pruebas básicas para los endpoints en Flask.
- Opcional: Agregar pruebas para el frontend utilizando Jest o React Testing Library.

## Criterios de Evaluación
- Estructura del código: Claridad, organización y buenas prácticas.
- Funcionalidad: La API debe responder correctamente a las solicitudes y el frontend
debe ser capaz de consumir la API y mostrar la información.
- Usabilidad y diseño: La interfaz debe ser intuitiva y permitir fácilmente la búsqueda de
películas.
- Pruebas: Implementación de pruebas para garantizar la estabilidad del código.
## Entrega
El candidato debe enviar un repositorio con el código fuente en GitHub o GitLab, incluyendo
todas las instrucciones necesarias para ejecutar el proyecto. Se recomienda proporcionar un
breve video o capturas de pantalla mostrando la funcionalidad de la aplicación.