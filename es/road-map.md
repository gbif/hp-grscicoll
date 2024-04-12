---
permalink: /es/road-map
lang-ref: road-map
title: Hoja de ruta de GRSciColl 2023-2024
description: |
  This road map builds in the [2021 roadmap](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll-2021.md) as well as the efforts in 2022 to build a community of editors an mediators.
background: "{{ site.data.images.pandeleteius.src }}"
imageLicense: "{{ site.data.images.pandeleteius.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## 1. Revisar el esquema de datos

El modelo de datos para GRSciColl ha evolucionado a través del tiempo para ajustar las fuentes de datos interconectadas, tales como iDigBio, Index Herbariorum y las bases de datos originales que fueron integradas. Al mismo tiempo, ha habido un extenso trabajo a mano de [El grupo de Interés de Colecciones Descriptivas](https://www.tdwg.org/community/cd/) para estandarizar acercamientos relevantes y vocabularios emergentes de un marco llamado [Latimer Core (Núcleo Latimer)](https://doi.org/10.3897/biss.6.91159).

Vamos a revisar todos los campos en el esquema de dato y su contenido para asegurar que son intuitivos, totalmente documentado y, en la medida de lo posible, alineados con el Latimer Core. Como ejemplos de lo que esto podría implicar, GRSciColl actualmente tiene:

- "Tipo de contenido" utiliza un vocabulario controlado que ha causado confusión a los editores. Esto debería ser revisado y alineado a Latimer Core.
- "Disciplina" con un vocabulario controlado que pueda ser alineado a la Disciplina del Latimer Core

Aveces no está claro cuándo y cómo los campos "inactivo" e "isHerbarium" deberian y pueden ser utilizados.

## 2. Soporte estructurado de descriptores de colección

GRSciColl no está actualmente estructurado para permitir descubrimiento de colecciones o especímenes individuales, lo cual puede ser crítico para los investigadores. El soporte para describir una colección registrada en GRSciColl estpa actualmente limitado a campos individuales que capturan amplias declaraciones de cobertura taxonómica, geográfica y; por ejemplo, coleccionistas importantes. Esta mejora tiene como objetivo apoyar descripciones mejor estructuradas y más ricas así como la habilidad de subir un inventario de las especies representadas o una tabla representando "especies, sexo, conteo de objetos". Este enfoque tiene como objetivo facilitar el descubrimiento de colecciones (“quién tiene material conservado de una especie específica”) y permitir una descripción más precisa del contenido de una colección, sea digitalizado o no.

Anticipamos el soporte de múltiples descriptores para una colección, con un descriptor que contiene un título, explicación textual y tabla de datos editados en línea o subidos como hoja de cálculo.

Se ilustra un ejemplo sencillo.

<img width="420" alt="Captura de pantalla 2023-09-28 a 16 43 46" src="https://github.com/gbif/registry/assets/7677271/459e7d2a-2ddb-4307-9e8f-fef88db96ace" />

Prevemos que el sistema sea lo suficientemente flexible para adaptarse a diferentes niveles de detalle, de listas simples a representaciones detalladas de la colección que existe para algunas colecciones. Al tolerar múltiples descriptores para una colección, el sistema toleraría diversos niveles de documentación de aspectos detallados de una colección, e indexar los contenidos mejorará su capacidad de descubrimiento. Por ejemplo, apuntamos a indexar nombres científicos utilizando la [Estructura principal de Taxonomía de GBIF](https://doi.org/10.15468/39omei) con la intención de facilitar el descubrimiento de colecciones a través de taxa.

Cabe señalar que este enfoque significaría que uno podría no ser capaz de añadir recuentos entre descriptores, ya que los objetos pueden ser incluidos en múltiples lugares y así contar dos veces. Sin embargo, el foco principal es apoyar las necesidades de los taxonómicos que buscan descubrir colecciones de interés o identificar lugares donde pueden residir especímenes individuales.

El Índice de Herbariorum tiene tablas de descriptores (Vea, por ejemplo, la pestaña de `resumen de colecciones` en esta [página Índice de Herbariorum](https://sweetgum.nybg.org/science/ih/herbarium-details/?irn=125976)), que se incorporará automáticamente durante el proceso de sincronización.

Una API que expone a los descriptores como un documento Latimer Core que representa la colección estará disponible (probablemente en formato JSON).

## 3. Encuestas institucionales

Mientras que los descriptores de la colección antes mencionados apuntan a ayudar a los taxonomistas a descubrir dónde los especímenes de una especie en particular se encuentran preservados, las encuestas institucionales están enfocadas en la evaluación y comparación entre instituciones. Existen muchos enfoques para evaluar la composición y el tamaño de las colecciones en poder de las instituciones, con una vista para generar vistas agregadas a escalas más altas (e.g. nacionalmente) y para hacer comparaciones entre ellos. Estas son, comúnmente, en el estilo de una encuesta o una base de datos estructurada y en muchos casos, utilizan un difrente conjunto de categorias de como la institución ha registrado sus colecciones en GRSciColl. La aplicación de categorías consistentes entre las colecciones son necesarias para atraer comparaciones consistentes entre estas.

Los resultados de las encuestas quedarían claramente etiquetados y no serían editables, ya que representan una evaluación particular en un contexto definido.

Pretendemos explorar la posibilidad de archivar los resultados de dichas encuestas cuando hayan producido datos que puedan ser expresados en el marco de Latimer Core. Como ejemplo, la Encuesta Global de Colección evaluó a las instituciones contra un esquema de encuesta que incluye:

- El tipo de las colecciones clasificadas en una lista específica (por ejemplo, anfibios, aves, moluscos, biología humana)
- La región geográfica categorizada en una lista específica (p. ej., Australia, Asia, el Pacífico, Europa)
- El número de objetos retenidos para la combinación del tipo de colección y región agrupados por rangos (1-10, 11-100, etc.)
- El número de años de experiencia del personal por región y por separado por tipo de colección

Los resultados de estos datos se pueden estructurar como Latimer Core y sostener como una respuesta de encuesta frente al protocolo de encuesta específico para la institución.

Nosotros prevemos que archivar estos puede traer beneficios:

- GRSciColl puede ayudar a proporcionar servicios que controlan los paneles de control e informes
- Los protocolos de las encuestas pueden ser compartidos con otras iniciativas, ayudando a aumentar la gama de instituciones que se pueden comparar de forma consistente
- Los resultados de encuestas anteriores se hacen más visibles y pueden reducir el esfuerzo invertido, o la necesidad de realizar más encuestas

Dada la retroalimentación recibida, también exploraremos cómo hacer de GRSciColl un lugar donde las encuestas pueden converger y ser actualizadas. Por ejemplo, intentaremos responder a preguntas como:

- ¿Podemos hacer de GRSciColl un lugar para recoger los resultados de las encuestas combinando la revisión del esquema de datos y la carga de los descriptores de la colección?
- ¿Debemos / podemos y de qué forma hacemos las encuestas editables?
- Contestar esas preguntas ayudará a dar forma al camino a seguir por el siguiente año.

## 4. Una nueva interfaz de usuario para GRSciColl

La interfaz pública de GRSciColl está limitada en capacidades, ofreciendo menos de la interfaz de gestión y lo que es posible utilizando el software del Portal Hosted GBIF como el sitio de DiSCo Reino Unido. Pretendemos reemplazar el sitio existente de GRSciColl por un despliegue de portal alojado mejorado con nuevas características, tales como mapas para instituciones y texto explicativo claro para usuarios y gestores de datos. El trabajo en esto ha comenzado y se puede ver en https://scientific-collections.gbif.org.

## 5. Mecanismo establecido para actualizaciones regulares de la comunidad

A medida que la comunidad de usuarios y editores de GRSciColl crece, queremos ofrecer un lugar donde podamos comunicar actualizaciones, brindar retroalimentación y discutir mejoras para el sistema. Ya existe una lista de correo informal para los mediadores de GRSciColl y otras partes interesadas. Creemos que las reuniones virtuales periódicas serían una gran manera de intercambiar de forma más interactiva. Nuestro objetivo es celebrar reuniones cada cuatro meses durante un año y evaluar si la frecuencia y el formato de esas reuniones son suficientes.
