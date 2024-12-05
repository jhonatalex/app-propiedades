# by Jhonatan Mejias

# PASOS COMANDOS INICIAL
Crear el Proyecto:

npm create vite@latest
Selecciona Vue como el marco y pon el nombre del proyecto.
Navegar al Proyecto:

cd nombre-proyecto
Instalar Dependencias:

npm install vue-router@next vuex@next sass sass-loader axios @vue/test-utils vitest jsdom

Configurar Vitest:
Crea vitest.config.js con la configuración mencionada.


Agrega configuraciones globales si es necesario.
Instalar Dependencias Adicionales:
npm install

Iniciar el Servidor de Desarrollo:
npm run dev

Ejecutar las Pruebas Unitarias:
npm run test:unit

# PRUEBA DE EJEMPLO

Objetivo:
Desarrollar una aplicación en Vue.js que permita a los usuarios visualizar una lista de propiedades inmobiliarias disponibles para la venta o alquiler. La aplicación consumirá una API REST para obtener los datos de las propiedades.

Estructura de la API:
La API que se consumirá tiene la siguiente estructura:


{
  "propiedades": [
    {
      "id": 1,
      "nombre": "Apartamento Girasol",
      "tipo": "depto",
      "ubicacion": "Santiago, Chile",
      "descripcion": "Un hermoso departamento ubicado en el centro de la ciudad.",
      "imagen": "https://example.com/images/girasol.jpg",
      "estado": "disponible"
    },
    ...
  ]
}
Requisitos:
Maquetado de vistas con HTML y CSS.
Utilización de preprocesadores y metodologías para CSS.
Utilización de Vue y sus componentes.
Manejo de rutas con Vue Router.
Programación con JavaScript ES6.
Manejo de datos con Vuex.
Consumo y manejo de datos con API REST.
Pasos para la Prueba:
Maquetado de Vistas con HTML y CSS:

Crear un archivo index.html que contenga el esqueleto de la aplicación.
Utilizar etiquetas semánticas de HTML5 para estructurar el contenido.
Definir estilos en un archivo CSS utilizando metodologías como BEM.
Utilización de Preprocesadores y Metodologías para CSS:

Configurar SASS en el proyecto y aplicar la metodología BEM para mantener el código CSS organizado y mantenible.
Configuración del Proyecto Vue:

Crear componentes Vue para las diferentes partes de la aplicación, como la lista de propiedades y los detalles de una propiedad.
Manejo de Rutas con Vue Router:

Configurar Vue Router para gestionar la navegación entre diferentes vistas, como la lista de propiedades y la vista de detalle de una propiedad.
Programación con JavaScript ES6:

Utilizar las características de ES6 como clases, arrow functions, destructuring y spread operators para manejar los datos y la lógica de la aplicación.
Manejo de Datos con Vuex:

Configurar Vuex para gestionar el estado de la aplicación y manejar los datos de las propiedades.
Consumo y Manejo de Datos con API REST:

Crear un servicio que consuma la API REST usando Axios o Fetch.
Almacenar los datos obtenidos en el estado de Vuex y mostrarlos en la interfaz de usuario.


