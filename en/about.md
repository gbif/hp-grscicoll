---
permalink: about
lang-ref: about
title: GRSciColl
description: |
    The **G**lobal **R**egistry of **Sci**entific **Coll**ections (GRSciColl) is a comprehensive repository of information about scientific collections. It is a community-driven initiative that builds upon prior work by the Consortium of the Barcode of Life (CBOL).
    
background:  "{{ site.data.images.kanakia.src }}"
imageLicense: "{{ site.data.images.kanakia.caption }}"
height: 70vh
# layout: documentation
# sideNavigation: about.about
# composition: # you can extend the documentation layout with a custom composition
#  - type: postHeader
#  - type: pageMarkdown
toc: true
---

## What is the Global Registry of Scientific Collections?

The Global Registry of Scientific Collections (GRSciColl) is a comprehensive and community-curated clearinghouse of collection information hosted in the [Global Biodiversity Information Facility](https://www.gbif.org/) (GBIF) registry. It serves as a valuable resource for researchers, institutions and the scientific community at large. GRSciColl provides information about physical scientific collections, including their content, location, contacts, and associated institutions. It also serves as a reference for institution and collection codes and identifiers.

A community of editors–including representatives from registered institutions and national editors–maintain the information in GRSciColl up to date. The suggestion system enables anyone to contribute by updating, adding, or merging records, which relevant individuals review. GRSciColl regularly synchronizes with external sources such as Index Herbariorum, ensuring up-to-date and reliable information.


## Data history

Built over the years, most of the information about institutions and collections comes from a dedicated team of curators and community members. Some data comes from external sources such as [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), the [Integrated Digitized Biocollections](https://www.idigbio.org/) (iDigBio) and national registries.

### How it all started

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

GRSciColl now has a suggestion system and editors reviewing them. This system enables community curation, enabling anyone to contribute by updating, adding, or merging records.
We also work with national organizations to import data from their collection registries in GRSciColl. A Subset of GRSciColl can be part of [GBIF-Hosted Portals](https://www.gbif.org/hosted-portals). See, for example [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org).

### What is next

Please check our current roadmap [here](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll.md).
