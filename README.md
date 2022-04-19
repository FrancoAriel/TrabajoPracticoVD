# TrabajoPracticoVD
Resolución del trabajo practico de VD

Respuestas Ejercicio 2:

1.	¿Qué es un servidor HTTP? 
Un servidor HTTP es un software que envia documentos a travez del protocolo HTTP donde la informacion es enviada en forma de texto plano entre un navegador y un servidor web.
2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Los verbos HTTP son los metodos de solicitud que indican la accion que se quiere realizar. Los mas conocidos son GET,HEAD,POST,PUT y DELETE.
3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
En una comunicación HTTP request es la solicitud que se envia al servidor web y response es la respuesta a la solicitud enviada de parte del servidor. Los headers contienen informacion para establecer correctamente la comunicación entre el navegador y el servidor web.
4.	¿Qué es un queryString? (En el contexto de una url)
Es la parte que viene despues de la URL en donde se envia informacion. Si hacemos una peticion a una ruta, se pueden enviar parametros para que la respuesta sea de una forma especifica.
5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
El response code es un codigo que nos indica si la solicitud HTTP fue satisfactoria. Los significados estan agrupados de la siguiente manera: respuestas informativas (100–199), respuestas satisfactorias (200–299), redirecciones (300–399), errores de los clientes (400–499) y errores de los servidores (500–599).
6.	¿Cómo se envía data en un Get y cómo en un POST?
En el metodo GET la información del usuario se envia en la URL dentro del header del http request. En cambio, en el meodo POST la informacion se envia dentro del body del http request. 
7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Cuando accedemos una pagina el navegador utiliza el verbo GET para recibir el .html. 
8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
Las estructuras de datos JSON y XML son formatos basados en texto estandar y es la forma en la que se intercambian datos en aplicacionea web. 
Un formato JSON seria:
{
"nombre":"Franco",
"edad" : 22
}
Un formato XML seria:
<usuario>
  <nombre>Franco</nombre>
  <edad>22</edad>
</usuario>
9.	Explicar brevemente el estándar SOAP
El estandar SOAP es un protocolo de comunicación para hacer peticiones a un servidor web. Los parametros de estas peticiones estan empaquetadas de forma determinada en XML.
10.	Explicar brevemente el estándar REST Full
El estandar REST Full es una arquitectura que facilita la comunicacion web entre sistemas. Esta se basa en que el cliente envia peticiones y el servidor le responde con informacion o un mensaje de estado.
17.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
