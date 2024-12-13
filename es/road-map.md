---
permalink: /es/road-map
lang-ref: road-map
title: Hoja de ruta de GRSciColl 2023-2024
description: |
  Esta hoja de ruta se construye sobre la [hoja de ruta 2021](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll-2021.md) así como los esfuerzos en 2022 para construir una comunidad de editores y mediadores.
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

## 1.   Revisar el esquema de datos

We aim to keep supporting our community of editors, train and welcome new editors as well as work with other data holding platforms (such as CETAF and ALA) to improve the data available in GRSciColl.

Some of the work with existing platforms may include:
- Importing identifiers to facilitate interoperability,
- Set up connection so an external platform can become a master source for GRSciColl entries,
- Help with bulk import and update of GRSciColl data based on these sources.

## 2.   Soporte estructurado de descriptores de colección

The GBIF Secretariat, in collaboration with our community, is developing a training module for GRSciColl editors. This module aims to cover everything a National GRSciColl editor might need to curate and edit GRSciColl content.

The goal is to organize at least one online training event in 2025.

Anticipamos el soporte de múltiples descriptores para una colección, con un descriptor que contiene un título, explicación textual y tabla de datos editados en línea o subidos como hoja de cálculo.

## 3.   Encuestas institucionales

A lot of the GRSciColl content is not standardized and lives in various free text fields. For example, many entomology collections can only be found by using a combination of keywords like “entomology” and “insect” in free text searches.

With the help of the relevant communities, we would like to identify collections that belong to defined disciplines and topics and make them discoverable by adding relevant collection descriptors. Examples of such collections would be entomology, mammalogy, phycology and ornithology collections.

One avenue to explore to improve the representation of these collections is to extract collections mentioned in publications such as this one: https://doi.org/10.1643/ASIHCODONS2020.

Alongside this work, we would implement a vocabulary for the Latimer Core term objectClassificationName most likely based on the topics developed by DISSCO (see also this GitHub issue: https://github.com/gbif/vocabulary/issues/157).

## 4.   Una nueva interfaz de usuario para GRSciColl

Collections are often cited in publications but not always in a standardized manner. It might later be difficult to link a collection to its citation.

We will work with the community and journals, when possible, to agree on best practice for citation of collections. The goal is to facilitate citing a collection and linking specimens coming from PLAZI processed publications to GRSciColl.

A second aspect of this work will be to set up guidelines for institutions who wish to share bibliographic references and citations of their collections on GRSciColl.

