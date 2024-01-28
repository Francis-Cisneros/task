# task

Este proyecto utiliza React con Vite como Frontend y Backend Laravel. la coleccion de postman estara adjunta en el repositorio

## Instrucciones de instalación y ejecución

1. **Clonar el repositorio:**  
   Clona este repositorio en tu máquina local.

2. **Instalar dependencias:**  
   Navega hasta el directorio del proyecto en tu terminal y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

 
 npm install
Levantar el servidor de desarrollo:
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

npm run dev


Preparación del backend con Laravel:

Crear la base de datos:
Antes de ejecutar el backend, asegúrate de tener una base de datos llamada kanbanv1 creada en tu entorno de desarrollo.

Ejecutar las migraciones y seeders:
Utiliza el siguiente comando para crear las tablas necesarias y poblar la base de datos con datos de ejemplo:


php artisan migrate --seed
Iniciar el servidor de backend:
Levanta el servidor de Laravel con el siguiente comando:

php artisan serve
Registro y inicio de sesión
Registro de usuarios:
Utiliza la API REST proporcionada por el backend para registrar nuevos usuarios.

Inicio de sesión:
Inicia sesión en la aplicación desde el frontend utilizando tus credenciales registradas.

¡Listo! Ahora deberías poder acceder y utilizar la aplicación Kanbanv1.

