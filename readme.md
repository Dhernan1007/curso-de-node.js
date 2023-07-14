<!-- enlace para obtener una configuracion automatica del gitignore -->
https://www.toptal.com/developers/gitignore

<!-- dependencias de desarrollo -->
<!-- esto sirve para optimizar la producción -->
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

<!-- 
SIGNIFICADO DE REST:

RE:Representational
S: State
T: Transfer 
-->

<!-- ************************ -->

 <!-- Para crear un CRUD necesitamos un API development enviroment pueden ser Insomnia, Postman o thunder client en vscode. -->

 ¿Cuáles son los metodos CRUD?
Si te preguntas qué significa CRUD, cada una de las letras de esta sigla corresponden a una acción en particular: Create (crear), Read (leer), Update (actualizar) y Delete (eliminar). El objetivo de realizar cada una de estas acciones es la de almacenar, organizar y clasificar los datos.

En http se refieren a métodos como: get, put, post, delete.

**************************************************

Para los que como yo, no sabíamos que es endpoints la palabra que tanto utiliza el profe:

Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante.


<!-- PARA GENERAR DATA FAKE ambas son estables-->
npm i faker@5.5.3 -S ó npm i @faker-js/faker

<!-- SERVICIOS -->
THE CLEAN ARCHITECTURE

'./img/Captura de pantalla 2021-10-16 143805-6c2c25c0-e4fd-4034-b55d-72cf21e3ff75.webp'

<!-- Existe un tipo de middleware para errores -->

los middleware de tipo error se deben hacer despues de definir el routing 

--> Manejo de errores con BOOM (librería)
npm i @hapi/boom

<!-- Para obtener la documentación de algo -->
npm docs <nombre de la librería>

<!-- Validación de datos con joi -->
se valida a traves de middleware.
se instala la librería --> joi
npm i joi

se crea un middleware para aplicar las validaciones
{abortEarly: false} sirve para que podamos tener todos los errores en un principio y no esté dando uno por uno como lo hace por defecto

<!-- Problemas de cors -->
El estándar Cross-Origin Resource Sharing funciona agregando nuevos encabezados HTTP que permiten a los servidores describir qué orígenes pueden leer esa información desde un navegador web. Además, para los métodos de solicitud HTTP que pueden causar efectos secundarios en los datos del servidor (en particular, los métodos HTTP distintos de GET, o POSTcon ciertos tipos MIME ), la especificación exige que los navegadores realicen una "verificación previa" de la solicitud, solicitando métodos admitidos del servidor con el Método de solicitud HTTP OPTIONSy luego, tras la "aprobación" del servidor, enviar la solicitud real. Los servidores también pueden informar a los clientes si se deben enviar "credenciales" (como cookies y autenticación HTTP ) con las solicitudes.

Las fallas de CORS dan como resultado errores, pero por razones de seguridad, los detalles sobre el error no están disponibles para JavaScript . Todo lo que el código sabe es que ocurrió un error. La única forma de determinar qué salió mal específicamente es mirar la consola del navegador para obtener más detalles.

su instalación: npm i cors

<!-- Instalar Heroku -->
  npm install -g heroku
  https://devcenter.heroku.com/articles/heroku-cli