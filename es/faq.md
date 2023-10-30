---
permalink: /faq
lang-ref: faq
title: Preguntas frecuentes
description: |
  Aquí encontrará las respuestas a las preguntas más frecuentes.
background: "{{ site.data.images.bombus-rufocinctus.src }}"
imageLicense: "{{ site.data.images.bombus-rufocinctus.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Sitio web de GRSciColl

## ¿Cómo conseguir que mi colección o espécimen aparezca en la página de inicio?

Si desea que su colección o espécimen aparezca en la página de inicio de GRSciColl, debe cumplir los siguientes criterios:
* Debe haber una entrada para la colección y la institución asociada en GRSciColl.
* La colección debe tener algunos especímenes digitalizados disponibles en GBIF:
* Algunas ocurrencias disponibles en GBIF deben estar vinculadas a la entrada de GRSciColl.
* Algunas de las ocurrencias disponibles en GBIF deben tener imágenes

y luego ¨[complete y envíe el siguiente formulario](mailto:scientific-collections@gbif.org?subject=GRSciColl%20website%20-%20Collection%20Nomination&body=Collection%20name:%20%0ACollection%20link%20(on%20GRSciColl):%20%0ASubmiter%20name%20and%20affiliation:%20%0ALink%20to%20image%20that%20you%20wish%20to%20show%20on%20the%20homepage%20(optional):%20).

## ¿Puedo exportar los resultados de GRSciColl a una hoja de cálculo?

El resultado de la búsqueda de una colección o institución puede descargarse del sitio web pulsando este botón:
<img width="1664" alt="download_as_csv" src="https://github.com/gbif/hp-grscicoll/assets/7677271/0ed58648-4efc-4755-876f-29677f6be975" />

## Directrices para la edición

### ¿Cómo representar mi institución y mis colecciones?

No existe jerarquía entre las entradas de las colecciones ni entre las entradas de las instituciones. Las instituciones deciden el nivel de granularidad que desean utilizar para representar sus colecciones. Por ejemplo, una institución podría tener una entrada para una colección de aves y otra para una colección de mamíferos, mientras que otra institución sólo tendría una entrada para su colección de vertebrados.

En caso de duda, puede seguir estas directrices prácticas:
* Haga una entrada de institución por ubicación física (el campus, el edificio donde se alojan las colecciones).
* Haga una entrada para cada grupo de especímenes con el mismo punto de contacto (la persona que puede dar más información sobre la colección, posiblemente organizar un préstamo).

### ¿Qué información debo introducir en GRSciColl?

Aunque muy pocos campos son obligatorios, recomendamos facilitar la mayor cantidad de información posible. En el caso de las instituciones, es importante indicar el nombre, el código y la dirección (o al menos el país). Para las colecciones, no olvide añadir una institución asociada.

### ¿Cuál debe ser el código de mi colección/institución?

Los códigos no tienen por qué ser únicos en GRSciColl y una entrada puede tener varios códigos. Los códigos deben reflejar lo que se utiliza en la práctica (lo que aparece en las etiquetas). Tenga en cuenta que los códigos GRSciColl se utilizan para emparejar las ocurrencias publicadas en GBIF con las entradas GRSciColl.

### ¿Cuáles deben ser los identificadores de mi colección/institución?

Una entrada puede asociarse a identificadores externos como: wikidata, ROR, DOI, etc. Sólo los editores pueden añadir identificadores a las entradas. Tenga en cuenta que los identificadores de GRSciColl se usan para emparejar ocurrencias publicadas en GBIF con entradas de GRSciColl.

#### ¿Qué formato debe tener mi identificador ROR?

El formato recomendado para un identificador ROR es la url completa: https://ror.org/02mhbdp94. Revise [estas preguntas frecuentes](https://ror.org/about/faqs/#what-is-a-ror-identifier).

### Cómo gestionar duplicados

Si encuentra entradas duplicadas en GRSciColl, hay dos maneras de gestionarlas.
* Puede que quiera mantener ambas entradas y etiquetar una como `inactiva` desmarcando la casilla `activa`.
* Puede fusionar las entradas utilizando la interfaz de edición.

La fusión de entradas eliminará una y transferirá todos los identificadores, códigos y colecciones (si se trata de una institución) a la entrada restante. Además, la información de la entrada eliminada se transferirá a los campos vacíos de la entrada restante. Recomendamos fusionar las entradas en lugar de borrarlas para conservar los identificadores. Así, si alguien hace referencia a uno de los identificadores "antiguos", será redirigido a la entrada restante.

## Interfaz de edición - Cuestiones técnicas

La interfaz de edición de GRSciColl se encuentra en el [Registro de GBIF](https://registry.gbif.org). Puede acceder a ella desde cualquier página de institución o colección pulsando el botón `Editar`. No necesita una cuenta para sugerir cambios. Para actualizaciones directas y para añadir o eliminar fuentes primarias e identificadores, necesitará [ser editor](/es/how-to#convertirse-en-editor).

### Mi colección es un conjunto de datos en GBIF: cómo hacer que los metadatos del conjunto de datos de GBIF y las páginas del editor de GBIF sean fuentes primarias para GRSciColl

1. Inicie sesión en la [interfaz del registro](https://registry.gbif.org/), debe ser editor de la entrada de GRSciColl con la que desea trabajar.
2. Haga clic en la pestaña `Master Source`.
3. Haga clic en el botón `Crear nuevo` (en la esquina superior derecha).
4. Seleccione el tipo de fuente (`conjunto de datos de GBIF` si trabaja con una colección o `Publicador de GBIF` si se trata de una institución).
5. Añada el UUID del conjunto de datos o del publicador que desea utilizar. El UUID se encuentra en la URL del conjunto de datos o del publicador. Por ejemplo, el UUID de `https://www.gbif.org/dataset/b275a4c1-9859-4f3c-8ead-d86dde820fbc` es `b275a4c1-9859-4f3c-8ead-d86dde820fbc`.
6. De click en el botón `Crear`.

### Cómo editar entradas conectadas a fuentes externas

Observará que no puede editar los campos que proceden de fuentes externas. La única forma de hacerlo es editar la entrada en la fuente (se proporciona un enlace a la fuente) o desconectar la entrada de la fuente.

### Cómo desconectar una entrada de una fuente externa

1. Inicie sesión en la interfaz del registro de GBIF, debe ser editor de la entrada GRSciColl con la que desea trabajar.
2. Haga clic en la pestaña `Master source`.
3. Haga clic en el botón `Eliminar` (en la misma línea que la fuente).

> Nota: si desea desconectar una colección del Index Herbariorum, póngase en contacto con nosotros.

### Cómo vincular ocurrencias relacionadas con especímenes publicadas en GBIF con entradas de GRSciColl

Para que sus especímenes aparezcan en el GRSciColl, deben estar publicados en GBIF.org y enlazados con al menos una entrada del GRSciColl. Vea cómo publicar datos en GBIF.org [aquí](https://www.gbif.org/es/publishing-data) y cómo enlazar las ocurrencias a GRSciColl más abajo:

La forma recomendada y más declarativa de vincular datos a instituciones o entidades de colección en GRSciColl es utilizar la URL completa de la entidad. Por ejemplo, cuando se utiliza el estándar Darwin Core:
* dwc:institutionID: https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381
* dwc:collectionID: https://www.gbif.org/grscicoll/collection/772f9e37-4643-452b-82b4-a06550283096

También es posible utilizar identificadores relacionados adicionales. Consulte esta entrada del blog para obtener más detalles.

[Vincular ocurrencias](https://data-blog.gbif.org/post/grscicoll-flags/){: .button .is-primary}
