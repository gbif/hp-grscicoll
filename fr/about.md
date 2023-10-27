---
permalink: /fr/about
lang-ref: about
title: GRSciColl
description: |
  The **G**lobal **R**egistry of **Sci**entific **Coll**ections (GRSciColl) is a comprehensive repository of information about scientific collections. It is a community-driven initiative that builds upon prior work by the Consortium of the Barcode of Life (CBOL).
background: "{{ site.data.images.kanakia.src }}"
imageLicense: "{{ site.data.images.kanakia.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Qu'est ce que GRSciColl?

Le GRSciColl - Registre Global the Collections Scientifique (Global Regsitry of Scientific Collections) est un centre d'information sur les collections scientifiques. Ce registre est maintenu pas une communauté et hébergé sur le registre du [Global Biodiversity Information Facility](https://www.gbif.org/). Il s'agit d'une ressource utile pour les chercheurs, institutions et la communauté scientifique en général. GRSciColl contient des informations sur les collections scientifiques, comme leurs contenus, emplacements, contacts et institutions associées. Il sert également de référence pour les codes et identifiants d'institution et de collection.

Une communauté d'éditeurs – y compris des représentants d’institutions enregistrées et éditeurs nationaux – tient à jour l’information contenue dans GRSciColl. Le système de suggestion permet à quiconque de contribuer à la mise à jour des données. Il est possible d'éditer, ajouter ou fusionner des entrées. Les suggestions sont ensuite envoyées à un éditeur pour vérification. GRSciColl est régulièrement synchronisé avec des sources externes telles qu'Index Herbariorum, assurant ainsi des informations à jour et fiables.


## Histoire des données

Construit au fil des ans, la plupart des informations sur les institutions et les collections proviennent d'une équipe dévouée d'éditeurs et de membres de la communauté. Certaines données proviennent de sources externes telles qu'[Index Herbariorum](https://sweetgum.nybg.org/science/ih/), les [Integrated Digitized Biocollections - Biocollections intégrées numérisées](https://www.idigbio.org/) (iDigBio) et certains registres nationaux.

### Comment tout a commencé

GRSciColl was originally developed by the [Consortium of the Barcode of Life (CBOL)](https://www.gbif.org/participant/287) and hosted by [the Smithsonian Institution](https://www.si.edu) until 2018.

> Schindel DE, Miller SE, Trizna MG, Graham E, Crane AE. The Global Registry of Biodiversity Repositories: A Call for Community Curation. Biodivers Data J. 2016 Aug 26;(4):e10293. doi: 10.3897/BDJ.4.e10293. PMID: 27660523; PMCID: PMC5018115.

In 2018, GRSciColl was adopted by the Global Biodiversity Information Facility (GBIF) registry (see [this news item](https://www.gbif.org/news/5kyAslpqTVxYqZTwYn1cub/gbif-provides-new-home-for-the-global-registry-of-scientific-collections).

The following years,
* An [API was developed for GRSciColl](/api)
* GBIF worked with [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) to set up weekly synchronizations of the information in GRSciColl.
* Collection information was imported from [iDigBio](https://www.idigbio.org).
* The linking of specimen-related occurrences published on GBIF to GRSciColl entries was enabled.
* The metadata of datasets published on GBIF became a possible source of information for collections.

You can read more about some of the history of GRSciColl in [this blog article](https://data-blog.gbif.org/post/grscicoll-2021/).

### Where are we now

GRSciColl now has a suggestion system and editors reviewing them. This system enables community curation, enabling anyone to contribute by updating, adding, or merging records. We also work with national organizations to import data from their collection registries in GRSciColl. A Subset of GRSciColl can be part of [GBIF-Hosted Portals](https://www.gbif.org/hosted-portals). See, for example [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org).

### What is next

Please check our current roadmap [here](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll.md).
