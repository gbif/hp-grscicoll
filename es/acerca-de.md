---
lang-ref: about
title: ¿Qué es GRSciColl y de dónde proceden los datos?
description: |
    El Registro Global de Colecciones Científicas (GRSciColl) es un centro de intercambio de información exhaustivo y comunitario sobre colecciones científicas, que se basa en los esfuerzos previos desarrollados por el Consorcio del Código de Barras de la Vida (CBOL).
    
background:  "{{ site.data.images.kanakia.src }}"
imageLicense: "{{ site.data.images.kanakia.caption }}"
height: 70vh
lang: es
# layout: documentation
# sideNavigation: about.about
# composition: # you can extend the documentation layout with a custom composition
#  - type: postHeader
#  - type: pageMarkdown
toc: true
---

## ¿Qué es el Registro Global de Colecciones Científicas?

El Registro Mundial de Colecciones Científicas (GRSciColl) es un centro de intercambio de información exhaustivo y elaborado por la comunidad sobre colecciones, alojado en el registro del [Sistema Global de Información sobre Biodiversidad (GBIF)](https://www.gbif.org). Constituye un valioso recurso para investigadores, instituciones y la comunidad científica en general. GRSciColl proporciona información sobre colecciones científicas físicas, incluido su contenido, ubicación, contactos e instituciones asociadas. También sirve de referencia para los códigos e identificadores de instituciones y colecciones.

La información de GRSciColl es mantenida por una comunidad de editores, que incluye representantes de instituciones registradas y editores nacionales. El sistema de sugerencias permite a cualquier persona contribuir actualizando, añadiendo o fusionando registros, que posteriormente son revisados por las personas pertinentes. GRSciColl también se sincroniza periódicamente con fuentes externas como el Index Herbariorum, lo que garantiza una información actualizada y fiable.

## Historia de los datos

Los datos de GRSciColl se han ido creando a lo largo de los años. Gran parte de la información sobre instituciones y colecciones ha sido introducida por un equipo de conservadores y miembros de la comunidad. Algunos datos proceden de fuentes externas como el [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), el [Integrated Digitized Biocollections (iDigBio)](https://www.idigbio.org) y registros nacionales.

### Cómo empezó todo

GRSciColl fue desarrollado originalmente por el [Consorcio del Código de Barras de la Vida (CBOL)](https://www.gbif.org/participant/287) y alojado por el [Instituto Smithsoniano](https://www.si.edu) hasta 2018.

> Schindel DE, Miller SE, Trizna MG, Graham E, Crane AE. The Global Registry of Biodiversity Repositories: A Call for Community Curation. Biodivers Data J. 2016 Aug 26;(4):e10293. doi: 10.3897/BDJ.4.e10293. PMID: 27660523; PMCID: PMC5018115.

En 2018, GRSciColl fue adoptado por el registro del Sistema Global de Información sobre Biodiversidad (GBIF) (revisa [este artículo](https://www.gbif.org/news/5kyAslpqTVxYqZTwYn1cub/gbif-provides-new-home-for-the-global-registry-of-scientific-collections).

Luego,

* [Se desarrolló un API para GRSciColl](/api)
* GBIF trabajó con el [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) para establecer sincronizaciones semanales de la información en GRSciColl.
* La información de las colecciones se importó desde [iDigBio](https://www.idigbio.org).
* Se habilitó la vinculación de las ocurrencias relacionadas con especímenes publicadas en GBIF con las entradas de GRSciColl..
* Los metadatos de los conjuntos de datos publicados en GBIF se convirtieron en una posible fuente de información para las colecciones.

Puede leer más sobre la historia de GRSciColl en [este artículo del blog](https://data-blog.gbif.org/post/grscicoll-2021/).

###  Dónde estamos ahora

GRSciColl cuenta ahora con un sistema de sugerencias, así como con editores que revisan dichas sugerencias. Este sistema permite la curación comunitaria, cualquiera puede contribuir actualizando, añadiendo o fusionando registros.

También trabajamos con organizaciones nacionales para importar datos de sus registros de colecciones a GRSciColl.

Un subconjunto de GRSciColl puede ser parte de los [portales alojados por GBIF](https://www.gbif.org/hosted-portals). Mire por ejemplo [el Portal de Colecciones de Ciencias Naturales de Reino Unido](https://data.dissco-uk.org).

### próximos pasos

Consulte aquí nuestra hoja de ruta actual.
