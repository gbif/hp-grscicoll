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

<img width="420" alt="Screenshot 2023-09-28 at 16 43 46" src="https://github.com/gbif/registry/assets/7677271/459e7d2a-2ddb-4307-9e8f-fef88db96ace" />

Prevemos que el sistema sea lo suficientemente flexible para adaptarse a diferentes niveles de detalle, de listas simples a representaciones detalladas de la colección que existe para algunas colecciones. Al tolerar múltiples descriptores para una colección, el sistema toleraría diversos niveles de documentación de aspectos detallados de una colección, e indexar los contenidos mejorará su capacidad de descubrimiento. Por ejemplo, apuntamos a indexar nombres científicos utilizando la [Estructura principal de Taxonomía de GBIF](https://doi.org/10.15468/39omei) con la intención de facilitar el descubrimiento de colecciones a través de taxa.

Cabe señalar que este enfoque significaría que uno podría no ser capaz de añadir recuentos entre descriptores, ya que los objetos pueden ser incluidos en múltiples lugares y así contar dos veces. Sin embargo, el foco principal es apoyar las necesidades de los taxonómicos que buscan descubrir colecciones de interés o identificar lugares donde pueden residir especímenes individuales.

El Índice de Herbariorum tiene tablas de descriptores (Vea, por ejemplo, la pestaña de `resumen de colecciones` en esta [página Índice de Herbariorum](https://sweetgum.nybg.org/science/ih/herbarium-details/?irn=125976)), que se incorporará automáticamente durante el proceso de sincronización.

Una API que expone a los descriptores como un documento Latimer Core que representa la colección estará disponible (probablemente en formato JSON).

## 3. Institutional surveys

While the collection descriptors above aim to help taxonomists discover where specimens of a particular species are preserved, institutional surveys are concerned with assessment and comparison across institutions. There are many approaches to assess the composition and size of collections held by institutions, with a view to generate aggregate views at higher scales (e.g. nationally) and to draw comparisons across them. These are often in the form of a survey or structured database and in many cases use a different set of categories than how the institution has registered its collections within GRSciColl. The application of consistent categories across collections are necessary to draw consistent comparisons across them.

Survey results would be clearly labeled and not be editable as they represent a particular assessment in a defined context.

We intend to explore adding the ability to archive the outputs of such surveys when they have produced data that can be expressed within the framework of Latimer Core. As an example, the Global Collection Survey assessed institutions against a survey scheme that included:

- The type of the collections categorised to a specific list (e.g. amphibians, birds, molluscs, human biology)
- The geographic region categorized to a specific list (e.g. Australasia, Pacific, Europe)
- The number of objects held for the combination of the collection type and region grouped by ranges (1-10, 11-100, etc.)
- The number of staff years of experience per region and separately per collection type

The outputs of these data can likely be structured as Latimer Core and held as a survey response against the specific survey protocol for the institution.

We foresee that archiving these may bring benefits:

- GRSciColl can help provide services that drive dashboards and reports
- Survey protocols may be shared with other initiatives, helping increase the range of institutions that can be compared in a consistent manner
- The results of previous surveys become more visible and may reduce effort spent, or the need for more surveys to be conducted

Given the feedback received, we will also explore how to make GRSciColl a place where surveys can converge and be updated. For example, we will try to answers questions like:

- Can we make GRSciColl a place to collect survey results by combining the data schema review and the upload of collection descriptors?
- Should/can we and how to make surveys editable? Answering those questions will help shape the roadmap for the following year.
- Answering those questions will help shape the road map for the following year.

## 4. Una nueva interfaz de usuario para GRSciColl

The public interface of GRSciColl is limited in capabilities, offering less than both the management interface and what is possible using the GBIF Hosted Portal software like the DiSSCo UK site. We intend to replace the existing GRSciColl site with a hosted portal deployment enhanced with new features, such as maps for institutions and clear explanatory text for users and data managers. Work on this has begun and can be seen at https://scientific-collections.gbif.org.

## 5. Establish mechanism for regular community updates

As the community of GRSciColl editors and users is growing, we want to offer a place where we can communicate updates, provide feedback and discuss improvements for the system. There is already an informal mailing list for GRSciColl mediators and other interested parties. We think that regular virtual meetups would be a great way to exchange more interactively. We aim to have meetings every four months for a year and assess whether the frequency and format of those meetings is adequate.
