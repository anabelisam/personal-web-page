---
publishDate: "Jul 07 2019"
title: "Estructura de un proyecto en PHP sin framework"
description: "Aprende a organizar un proyecto en PHP sin utilizar ningún framework."
image: "~/assets/images/php-post.png"
category: "Tutorials"
tags: [php, poo, framework, programacion]
---

PHP es un lenguaje tan versátil que te permite ir desde lo más simple hasta lo más complejo, pero siempre tendrás tú la decisión del alcance del control que esperas tener en tus proyectos.

Si estás aprendiendo sobre programación y has decidido empezar con PHP mi recomendación es que lo conozcas en su forma más pura y estructurada, sin uso de frameworks, librerías, incluso sin ayudas en el editor. Esto te permitirá acudir a la documentación oficial siempre que tengas dudas o quieras hacer algo puntual. A esto yo le llamo "empezar por el principio".

A continuación te comparto una estructura de archivos que utilicé durante varios años cuando aprendía PHP hacia el 2012, aprendiendo sobre Programación Orientada a Objetos (POO), después de manejar muy bien el lenguaje pasé a trabajar con Laravel y ya fue mucho más familiar aprenderlo y usarlo.

Utilizaremos como referencia 👉🏼 **[este repositorio](https://github.com/anabelisam/project-php-no-framework/)** 👈🏼 donde tenemos un formulario muy sencillo que guarda un registro de usuario a una base de datos que está en PostgreSQL.

Aquí lo importante es que revises cómo están organizados los archivos y los nombres de los directorios, que básicamente es esto:

- configuracion = config
- controladores = controllers
- enlaces = bridges
- terceros = external
- transacciones = transactions
- utilidades = utils
- vistas = views
- webroot = front

Quizás de entrada esta estructura te parezca un poco rara, pero más adelante cuando adquieras más experiencia verás cómo la asociarás con patrones de diseño que te llevarán a ordenar el código de una manera más limpia.

