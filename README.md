# Fighter CRUD

CRUD de peleadores basico.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
- Node.js y npm (para el proyecto frontend)
- .NET para el proyecto backend
- MySQL para la base de datos

## Instalación y Configuración

### Proyecto Frontend

El frontend está desarrollado con Angular utilizando componentes independientes (standalone components). Para la interfaz de usuario se ha empleado PrimeNG, y para la gestión del estado de la aplicación se utiliza NgRx.

#### Pasos para correr el proyecto:
1. Clona el repositorio.
2. Navega hasta la carpeta del proyecto frontend.
3. Ejecuta `npm install` para instalar las dependencias.
4. Inicia el servidor con `npm run start`.
5. Accede a `http://localhost:4200` en tu navegador.

### Proyecto Backend

El backend está desarrollado en C# y se conecta a una base de datos MySQL. 

#### Configuración de la base de datos:
1. Crea una nueva base de datos en MySQL.
2. Ejecuta el script SQL proporcionado para crear las tablas necesarias, acorde al modelo implementado en el código.

#### Validaciones:
- Se ha utilizado Fluent Validation para la validación de datos.
- Fluent API se ha empleado para configurar las relaciones de entidad.

#### Pasos para levantar el proyecto:
1. Clona el repositorio.
2. Navega hasta la carpeta del proyecto backend.
3. Asegúrate de que la cadena de conexión en el archivo de configuración apunta a tu base de datos MySQL.
4. Ejecuta el proyecto desde tu IDE o utilizando la línea de comandos.
