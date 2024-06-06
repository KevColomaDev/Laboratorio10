![image](https://github.com/CarlosAUD/Laboratorio10/assets/150806786/f4c00abc-970c-4047-8491-0b3f5d253e1e)

𝙇𝘼𝘽𝙊𝙍𝘼𝙏𝙊𝙍𝙄𝙊 10

Aqui analizaremos en detalle las APIs RESTful y sus conceptos fundamentales, incluyendo HTTP, API, REST, JSON, cliente y servidor. Además, abordaremos los beneficios de utilizar este tipo de APIs en el desarrollo de software, tales como la estandarización, simplicidad, escalabilidad y estado sin estado. A medida que avancemos, profundizaremos en cada uno de estos aspectos para proporcionar una comprensión sólida de cómo las APIs RESTful pueden optimizar la comunicación entre sistemas y facilitar la integración de servicios en aplicaciones complejas.

𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐎 𝐃𝐄 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎𝐒

A continuación, se repasarán los conceptos principales para el consumo de una API, de modo que podamos hacer el request al servidor y utilizar los datos devueltos: HTTP (Hypertext Transfer Protocol): El protocolo estándar para la comunicación en la World Wide Web. Define los métodos de solicitud (GET, POST, PUT, DELETE, etc.) y cómo se transmiten los mensajes entre clientes y servidores. API (Application Programming Interface): Un conjunto de reglas y definiciones que permite que diferentes aplicaciones se comuniquen entre sí. En el contexto de las APIs RESTful, una API expone funcionalidades de un sistema a otros sistemas a través de HTTP. REST (Representational State Transfer): Un estilo arquitectónico que define ciertos principios para el diseño de sistemas distribuidos: Utilización de recursos como entidades manejadas a través de la API. Identificación única de recursos mediante URIs (Uniform Resource Identifiers). Empleo de operaciones CRUD para manipular recursos utilizando los métodos HTTP correspondientes. Mantenimiento de un estado sin estado, donde cada solicitud del cliente contiene toda la información necesaria para su procesamiento. JSON (JavaScript Object Notation): Un formato de intercambio de datos ligero y legible para humanos que se utiliza comúnmente en las APIs RESTful para representar la información enviada y recibida entre el cliente y el servidor. Cliente y Servidor: En el contexto de las APIs RESTful, el "cliente" es la aplicación que realiza las solicitudes a la API, mientras que el "servidor" es la aplicación que proporciona los recursos y maneja las solicitudes del cliente.

A continuación, el paso a paso de como consumimos una API de generación de memes aleatorios:

Paso a paso de la elaboracion del codigo:
-𝙌𝙪𝙚 𝙚𝙨 𝙜𝙚𝙩, 𝙥𝙤𝙨𝙩, 𝙙𝙚𝙡𝙚𝙩𝙚 𝙥𝙪𝙩 ?
-GET:

El método GET se utiliza para recuperar datos de un recurso. Es el método HTTP más común y se utiliza para obtener información de un servidor web. Los datos recuperados con el método GET se suelen mostrar en una página web o se utilizan en una aplicación.

-POST:

El método POST se utiliza para enviar datos a un servidor para crear o actualizar un recurso. A diferencia del método GET, los datos enviados con el método POST no se muestran en la URL. En su lugar, se envían en el cuerpo de la solicitud HTTP.

-PUT:

El método PUT se utiliza para actualizar un recurso existente en un servidor. El método PUT sobrescribe el recurso existente con los datos proporcionados en el cuerpo de la solicitud HTTP.

-DELETE:

El método DELETE se utiliza para eliminar un recurso existente de un servidor. El método DELETE no devuelve ningún dato.

![image](https://github.com/KevColomaDev/Laboratorio10/assets/150806786/fbbecc05-39c5-4f25-bc27-ecfa79cd68fe)


Ejemplos:

GET: Supongamos que tiene un blog y desea recuperar una entrada de blog específica. Puede utilizar el método GET para enviar una solicitud al servidor web que aloja su blog, especificando la URL de la entrada de blog que desea recuperar. El servidor web devolverá la entrada de blog en el cuerpo de la respuesta HTTP.
POST: Supongamos que desea crear una nueva entrada de blog. Puede utilizar el método POST para enviar una solicitud al servidor web que aloja su blog, incluyendo el contenido de la nueva entrada de blog en el cuerpo de la solicitud HTTP. El servidor web creará la nueva entrada de blog y devolverá una respuesta HTTP indicando si la entrada de blog se creó correctamente.
PUT: Supongamos que desea actualizar una entrada de blog existente. Puede utilizar el método PUT para enviar una solicitud al servidor web que aloja su blog, especificando la URL de la entrada de blog que desea actualizar e incluyendo el contenido actualizado de la entrada de blog en el cuerpo de la solicitud HTTP. El servidor web actualizará la entrada de blog existente y devolverá una respuesta HTTP indicando si la entrada de blog se actualizó correctamente.
DELETE: Supongamos que desea eliminar una entrada de blog existente. Puede utilizar el método DELETE para enviar una solicitud al servidor web que aloja su blog, especificando la URL de la entrada de blog que desea eliminar. El servidor web eliminará la entrada de blog existente y devolverá una respuesta HTTP indicando si la entrada de blog se eliminó correctamente.

𝟏.  𝙂𝙀𝙏 -> 𝙏𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤𝙨

API RESTful utilizando Node.js y Express. La API está realizando una solicitud GET al endpoint /api/v1/data/ y devolviendo un conjunto de datos en formato JSON.
Detalles de la solicitud GET:
URL: https://laboratorio 10.onrender.com/api/v1/data/
Método: GET
Estado: 200 OK
Tamaño: 129 bytes
Tiempo: 34.76 s
Encabezados:
Content-Type: application/json
Parámetros de consulta:
id: 6661b27eff22755ccfb97e23
sector: Quito
main street: Av. Amazonas 2
secondary_street: OE-654
size: Mediano

Explicación paso a paso:
El usuario envía una solicitud GET al endpoint /api/v1/data/ utilizando un cliente HTTP. La solicitud puede enviarse desde un navegador web, una aplicación móvil o cualquier otro tipo de cliente HTTP.
El servidor recibe la solicitud y la procesa. Express utiliza un enrutador para determinar qué función del controlador debe llamarse en respuesta a la solicitud.
La función del controlador consulta la base de datos para obtener los datos solicitados. En este caso, la función del controlador está consultando una base de datos para obtener los datos de un registro específico con un id de 6661b27eff22755ccfb97e23.
La función del controlador devuelve los datos al cliente HTTP en formato JSON. Express convierte los datos en una cadena JSON y la envía al cliente en la respuesta.
El cliente HTTP recibe la respuesta y la procesa. El navegador web puede mostrar los datos en la página, una aplicación móvil puede guardar los datos en el almacenamiento local, o cualquier otro tipo de cliente HTTP puede procesar los datos de la manera que desee.
En resumen, esta imagen muestra una API RESTful básica que está siendo utilizada para recuperar datos de una base de datos y devolverlos a un cliente HTTP. La API está utilizando Node.js y Express para implementar el servidor API, y está utilizando JSON para representar los datos.


𝟐. 𝙋𝙊𝙎𝙏 -> 𝘾𝙧𝙚𝙖𝙘𝙞ó𝙣 𝙙𝙚𝙡 𝘽𝙖𝙘𝙝𝙚

El usuario envía una solicitud GET al endpoint /api/v1/data/ utilizando un cliente HTTP. La solicitud puede enviarse desde un navegador web, una aplicación móvil o cualquier otro tipo de cliente HTTP.

El servidor recibe la solicitud y la procesa. Express utiliza un enrutador para determinar qué función del controlador debe llamarse en respuesta a la solicitud.

La función del controlador consulta la base de datos para obtener los datos solicitados. En este caso, la función del controlador está consultando una base de datos para obtener los datos de un registro específico con un id de 6661b27eff22755ccfb97e23.

La función del controlador devuelve los datos al cliente HTTP en formato JSON. Express convierte los datos en una cadena JSON y la envía al cliente en la respuesta.

El cliente HTTP recibe la respuesta y la procesa. El navegador web puede mostrar los datos en la página, una aplicación móvil puede guardar los datos en el almacenamiento local, o cualquier otro tipo de cliente HTTP puede procesar los datos de la manera que desee.

𝟑. 𝘿𝙀𝙇𝙀𝙏𝙀 -> 𝙀𝙡𝙞𝙢𝙞𝙘𝙖𝙘𝙞ó𝙣 𝙙𝙚 𝙪𝙣 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙥𝙤𝙧 𝙄𝘿

El usuario envía una solicitud GET al endpoint /api/v1/data/ utilizando un cliente HTTP. La solicitud puede enviarse desde un navegador web, una aplicación móvil o cualquier otro tipo de cliente HTTP.

El servidor recibe la solicitud y la procesa. Express utiliza un enrutador para determinar qué función del controlador debe llamarse en respuesta a la solicitud.

La función del controlador consulta la base de datos para obtener los datos solicitados. En este caso, la función del controlador está consultando una base de datos para obtener los datos de un registro específico con un id de 6661b27eff22755ccfb97e23.

La función del controlador devuelve los datos al cliente HTTP en formato JSON. Express convierte los datos en una cadena JSON y la envía al cliente en la respuesta.

El cliente HTTP recibe la respuesta y la procesa. El navegador web puede mostrar los datos en la página, una aplicación móvil puede guardar los datos en el almacenamiento local, o cualquier otro tipo de cliente HTTP puede procesar los datos de la manera que desee.

𝟒. 𝙋𝙐𝙏 -> 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖

El usuario envía una consulta GraphQL al servidor. La consulta se puede enviar mediante un cliente GraphQL, como Apollo Client o GraphiQL.

El servidor recibe la consulta y la analiza. El servidor GraphQL utiliza un analizador para comprender la estructura de la consulta y determinar qué datos se solicitan.

El servidor ejecuta la consulta en la fuente de datos. En este caso, es probable que el servidor consulte una base de datos para recuperar los datos sobre el usuario con un ID de 123.

El servidor devuelve los resultados de la consulta al cliente. El servidor GraphQL serializa los resultados de la consulta en formato JSON y los envía de vuelta al cliente.

El cliente recibe los resultados y los procesa. El cliente GraphQL puede utilizar los resultados de la consulta para actualizar la interfaz de usuario o realizar otras acciones.


𝓡𝓮𝓷𝓭𝓲𝓶𝓲𝓮𝓷𝓽𝓸:

𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐡𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 𝐝𝐞 𝐩𝐫𝐮𝐞𝐛𝐚𝐬 𝐝𝐞 𝐫𝐞𝐧𝐝𝐢𝐦𝐢𝐞𝐧𝐭𝐨:

Existen varias herramientas disponibles para realizar pruebas de rendimiento, como Google Lighthouse, WebPageTest, GTmetrix, entre otras. Utiliza estas herramientas para medir el rendimiento de tu aplicación y obtener recomendaciones de optimización.

𝐒𝐢𝐦𝐮𝐥𝐚 𝐜𝐚𝐫𝐠𝐚𝐬 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬:

Utiliza herramientas como Apache JMeter o LoadRunner para simular cargas de usuarios y ver cómo se comporta tu aplicación bajo diferentes niveles de tráfico.

𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚 𝐥𝐚𝐬 𝐢𝐦á𝐠𝐞𝐧𝐞𝐬:

Las imágenes suelen ser uno de los componentes que más pesan en una página web. Optimiza las imágenes utilizando herramientas como TinyPNG o ImageOptim.

𝐌𝐢𝐧𝐢𝐟𝐢𝐜𝐚 𝐥𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬:

Minifica los archivos CSS, JavaScript y HTML para reducir su tamaño y mejorar la velocidad de carga.

𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐜𝐚𝐜𝐡é:

Utiliza caché para almacenar en memoria los archivos estáticos y reducir el tiempo de carga de la página.

𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚 𝐥𝐚𝐬 𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐚𝐬 𝐚 𝐥𝐚 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬:

Optimiza las consultas a la base de datos para reducir el tiempo de respuesta del servidor. Utiliza herramientas como Explain para analizar las consultas y encontrar posibles optimizaciones.

𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐳𝐚 𝐞𝐥 𝐫𝐞𝐧𝐝𝐢𝐦𝐢𝐞𝐧𝐭𝐨:

Monitoriza el rendimiento de tu aplicación utilizando herramientas como New Relic o AppDynamics para identificar y solucionar problemas de rendimiento en tiempo real.

𝓟𝓻𝓾𝓮𝓫𝓪𝓼 𝓭𝓮 𝓡𝓮𝓷𝓭𝓲𝓶𝓲𝓮𝓷𝓽𝓸:
![image](https://github.com/KevColomaDev/Laboratorio10/assets/150806786/d6819678-08d3-476e-bff3-73fa06111aeb)

𝓡𝓮𝓼𝓾𝓵𝓽𝓪𝓭𝓸:
![image](https://github.com/KevColomaDev/Laboratorio10/assets/150806786/e1897d44-d05d-4c81-91c2-d948fc80e324)



![image](https://github.com/KevColomaDev/Laboratorio10/assets/150806786/32bf1805-3fd7-4145-82af-79069863f382)



![image](https://github.com/CarlosAUD/Laboratorio10/assets/150806786/db84a86e-08a1-4e1f-b2d7-bbd107293ae2)

![image](https://github.com/CarlosAUD/Laboratorio10/assets/150806786/31cda7e4-d420-4004-8d56-c53586829ba4)

