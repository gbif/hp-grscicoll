---
permalink: /fr/road-map
lang-ref: road-map
title: Feuille de route de GRSciColl 2025
description: |
  Cette feuille de route est une continuation de [celle de 2023/2024](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll-2023-2024.md).
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

## 1.   Continuer notre travail collaboratif avec la communauté et les plateformes existantes pour mettre à jour et accroître les données en plus d'améliorer leur interopérabilité

Nous souhaitons soutenir notre communauté d'éditeurs bénévoles, former et accueillir de nouveaux éditeurs en plus de notre travail avec d'autres plateformes de données (comme CETAF et ALA) pour améliorer les données disponibles dans GRSciColl.

Ce travail avec les plateformes existantes peut inclure :
- Importer les identifiants pour faciliter l'interopérabilité,
- Mettre en place des connexions pour que ces plateformes puissent devenir les source de données (master source) pour les entrées de GRSciColl,
- Aider à l'import et la misse à jour en masse de GRSciColl basé sur ces sources.

## 4.   Facilitate linking literature to GRSciColl

Le secrétariat du GBIF, en collaboration avec notre communauté, est en train de développer un module de formation pour les éditeurs de GRSciColl. Ce module a pour but de couvrir tout ce dont un éditeur national de GRSciColl aurait besoin pour maintenir et éditer le contenu de GRSciColl.

Le but est d'organiser au moins une formation en ligne en 2025.

Nous apporterions aussi notre support à ceux qui souhaiteraient organiser une formation or une session d'édition de données basée sur le contenu de ce module.

## Améliorer la représentation et découverte de collections par sujet

A lot of the GRSciColl content is not standardized and lives in various free text fields. For example, many entomology collections can only be found by using a combination of keywords like “entomology” and “insect” in free text searches.

With the help of the relevant communities, we would like to identify collections that belong to defined disciplines and topics and make them discoverable by adding relevant collection descriptors. Examples of such collections would be entomology, mammalogy, phycology and ornithology collections.

One avenue to explore to improve the representation of these collections is to extract collections mentioned in publications such as this one: https://doi.org/10.1643/ASIHCODONS2020.

Alongside this work, we would implement a vocabulary for the Latimer Core term objectClassificationName most likely based on the topics developed by DISSCO (see also this GitHub issue: https://github.com/gbif/vocabulary/issues/157).

## 4.   Facilitate linking literature to GRSciColl

Collections are often cited in publications but not always in a standardized manner. It might later be difficult to link a collection to its citation.

We will work with the community and journals, when possible, to agree on best practice for citation of collections. The goal is to facilitate citing a collection and linking specimens coming from PLAZI processed publications to GRSciColl.

A second aspect of this work will be to set up guidelines for institutions who wish to share bibliographic references and citations of their collections on GRSciColl.

