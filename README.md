# TrabajoPracticoVD
Este repositorio contiene la resolución del trabajo practico de VD y la guia de ejecución.

## Guia de ejecución

### Ejercicio 4 

Para ejecutar el ejercicio 4 es necesario seguir los siguientes pasos:

1. Abrir la terminal e ir a la ruta donde se encuentra el archivo mostrarPersonas.js
2. Instalar los modulos necesarios mediante el siguiente comando en la terminal:
        
       npm install request-promise
3. Ejecutar el programa mediante el comando en terminal:

       node mostrarPersonas.js

### Ejercicio 5

Para ejecutar el ejercicio 5 es necesario seguir los siguientes pasos:

1. Abrir la terminal e ir a al ruta donde se encuentra el archivo servidorPost.js
2. Instalar los modulos necesarios mediante el siguiente comando en la terminal:

       npm install express
3. Ejecutar el programa mediante el comando en terminal:
       
       node servidorPost.js
4. Realizar en postman el request y realizar un get a la url de la base de datos para ver que fue realizado correctamente.

### Ejercicio 6
 
Para ejecutar el ejercicio 6 es necesario seguir los siguientes pasos:

1. Abrir la terminal e ir a al ruta donde se encuentra el archivo servidorPost.js
2. Instalar los modulos necesarios mediante el siguiente comando en la terminal:

       npm install express
3. Ejecutar el programa mediante el comando en terminal:
       
       node servidorPost.js
4. Abrir el archivo crearPersonas.html, cargar los datos en la pagina y tocar enviar.
5. Realizar un GET a la url de la base de datos para ver que el POST fue realizado correctamente.


# Respuestas Ejercicio 2:


1.	¿Qué es un servidor HTTP?:


Un servidor HTTP es un software que envía documentos a través del protocolo HTTP donde la información es enviada en forma de texto plano entre un navegador y un servidor web.


2.	¿Qué son los verbos HTTP? Mencionar los más conocidos:


Los verbos HTTP son los métodos de solicitud que indican la acción que se quiere realizar. Los más conocidos son GET,HEAD,POST,PUT y DELETE.


3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?: 


En una comunicación HTTP request es la solicitud que se envía al servidor web y response es la respuesta a la solicitud enviada de parte del servidor. Los headers contienen información para establecer correctamente la comunicación entre el navegador y el servidor web.


4.	¿Qué es un queryString? (En el contexto de una url):


Es la parte que viene después de la URL en donde se envía información. Si hacemos una petición a una ruta, se pueden enviar parámetros para que la respuesta sea de una forma especifica.


5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?:


El response code es un código que nos indica si la solicitud HTTP fue satisfactoria. Los significados están agrupados de la siguiente manera: respuestas informativas (100–199), respuestas satisfactorias (200–299), redirecciones (300–399), errores de los clientes (400–499) y errores de los servidores (500–599).


6.	¿Cómo se envía data en un Get y cómo en un POST?:


En el método GET la información del usuario se envía en la URL dentro del header del http request. En cambio, en el método POST la información se envia dentro del body del http request. 


7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?:


Cuando accedemos una página el navegador utiliza el verbo GET para recibir el .html. 


8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles:


Las estructuras de datos JSON y XML son formatos basados en texto estandar y es la forma en la que se intercambian datos en aplicaciones web. 

Un formato JSON seria:
        
        {
        "nombre":"Franco",
        "edad" : 22
        }


Un formato XML seria:

        <persona>
        <nombre>Franco</nombre>
        <edad>22</edad>
        </persona>


9.	Explicar brevemente el estándar SOAP:


El estándar SOAP es un protocolo de comunicación para hacer peticiones a un servidor web. Los parámetros de estas peticiones estan empaquetados en mensajes formato XML.


10.	Explicar brevemente el estándar REST Full:


El estandar REST Full es una arquitectura que facilita la comunicacion entre aplicaciones y servicios web. Al realizar las peticiones las APIs devuelven un mensaje usualmente en tipo JSON que es facil de leer e utilizar, esto hace que las API de RestFull sean mas flexibles. 


11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?:


Los headers en un request son información adicional sobre la comunicación y el navegador cuando se realiza un request. El key Content-type avisa al navegador que tipo de media va a recibir, por ejemplo, le avisa al navegador si va a recibir una imagen. 
