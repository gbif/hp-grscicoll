---
permalink: about
lang-ref: about
title: GRSciColl
description: |
  The Global Registry of Scientific Collections, or GRSciColl, is a comprehensive, community-curated repository of information about scientific collections that extends work initially started by the Consortium of the Barcode of Life (CBOL).
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

## What is the Global Registry of Scientific Collections?

The Global Registry of Scientific Collections, or GRSciColl, is a comprehensive and community-curated clearing house of information about scientific collections in the [GBIF](https://www.gbif.org/) registry. By providing information about physical scientific collections—their content, location, contacts, associated institutions, and collection codes and identifiers—GRSciColl offers a resource for a wide range of uses by experts, researchers and members of broader society.

A community comprised of national editors and representatives from registered institutions keeps the information in GRSciColl up to date. [Any user can suggest updates, additions or mergers of records](/how-to#suggest-a-change), prompting editors to review the proposed changes. GBIF regularly synchronizes GRSciColl with external sources such as [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), further ensuring that its information is up-to-date and reliable.

## Data history

Most of the information about institutions and collections contained in GRSciColl has come from years of contributions by curators and community members. Other data comes from external sources such as Index Herbariorum, the [Integrated Digitized Biocollections](https://www.idigbio.org/) (iDigBio) and national registries.

### How it all started

GRSciColl, originially conceived (like GBIF) under the auspices of the [OECD Global Science Forum](http://www.oecd.org/sti/sci-tech/oecdglobalscienceforum.htm), was initially developed by the [Consortium of the Barcode of Life (CBOL)](https://www.gbif.org/participant/287) and hosted until 2018 by [the Smithsonian Institution](https://www.si.edu).

> Schindel DE, Miller SE, Trizna MG, Graham E, Crane AE (2016) The Global Registry of Biodiversity Repositories: A Call for Community Curation. Biodiversity Data Journal 26(4): e10293. https://doi.org/10.3897/BDJ.4.e10293

In 2018, GRSciColl was adopted GBIF and merged into its registry (see [this news item](https://www.gbif.org/news/5kyAslpqTVxYqZTwYn1cub/)).

Recent improvements include:
* Development of an [API for GRSciColl](/api)
* Establishment of weekly synchronization between GBIF and Index Herbariorum
* Import of collection information from [iDigBio](https://www.idigbio.org)
* Linking of specimen-related occurrences published on GBIF to GRSciColl entries
* Inclusion of metadata from datasets published on GBIF as a potential source of collections information

[Read more about some of the history of GRSciColl](https://data-blog.gbif.org/post/grscicoll-2021/).

### Where are we now

GRSciColl now has a suggestion system that editors use to review proposed changes. This system enables community curation and allows anyone to contribute by updating, adding, or merging records.

We also work with national organizations to import data from their collection registries in GRSciColl. Subsets of GRSciColl can also be used to organize [GBIF hosted portals](https://www.gbif.org/hosted-portals) like [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org).

### What's next

Please check our current road map [here](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll.md).
