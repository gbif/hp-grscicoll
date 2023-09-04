---
lang-ref: about
title: What is it and how to contribute
description: |
    The Global Registry of Scientific Collections (GRSciColl) is a comprehensive, community-curated clearing house of information on scientific collections, which builds on previous efforts developed by the Consortium of the Barcode of Life (CBOL).
    
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

## What is this

The Global Registry of Scientific Collections (GRSciColl), is a comprehensive and community-curated clearinghouse of collection information hosted in the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org) registry. It serves as a valuable resource for researchers, institutions and the scientific community at large. GRSciColl provides information about physical scientific collections, including their content, location, contacts, and associated institutions. It also serves as a reference for institution and collection codes and identifiers.

The information in GRSciColl is maintained by a community of editors, including representatives from registered institutions and national editors. The suggestion system enables anyone to contribute by updating, adding, or merging records, which are then reviewed by relevant individuals. GRSciColl also synchronizes regularly with external sources such as Index Herbariorum, ensuring up-to-date and reliable information.

## How to get started

You can start looking for relevant institutions here, collections here and digitized specimens here.

## History of the data

The GRSciColl content has been built over the years. A lot of the institution and collections information has been entered by a dedicated team of curators and members of the community. Some data comes from external sources such as [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), the [Integrated Digitized Biocollections (iDigBio)](https://www.idigbio.org) and national registries.

### How it all started

GRSciColl was originally developed by the [Consortium of the Barcode of Life (CBOL)](https://www.gbif.org/participant/287) and hosted by [the Smithsonian Institution](https://www.si.edu) until 2018.

> Schindel DE, Miller SE, Trizna MG, Graham E, Crane AE. The Global Registry of Biodiversity Repositories: A Call for Community Curation. Biodivers Data J. 2016 Aug 26;(4):e10293. doi: 10.3897/BDJ.4.e10293. PMID: 27660523; PMCID: PMC5018115.

In 2018, GRSciColl was adopted by the Global Biodiversity Information Facility (GBIF) registry (see [this news item](https://www.gbif.org/news/5kyAslpqTVxYqZTwYn1cub/gbif-provides-new-home-for-the-global-registry-of-scientific-collections).

The following years,
* GBIF worked with [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) to set up weekly synchronizations of the information in GRSciColl.
* Collection information was imported from [iDigBio](https://www.idigbio.org).
* The specimen-related occurrences published on GBIF were linked to GRSciColl entries whenever possible.
* It became possible to use the metadata of datasets published on GBIF as source of information for collections.

### Where are we now

GRSciColl has now a suggestion system as well as editors which review those suggestions. This system enables community curation, anyone can contribute by updating, adding, or merging records.
We also work with national organizations to import of data from their collection registries in GRSciColl.

Subset of GRSciColl can be part of GBIF-Hosted Portal. See for example the UK Natural Sciences Collections Portal: https://data.dissco-uk.org

### What is next

Please check our current roadmap here.

You can also ask questions and contribute to our work by subscribing to our mailing list or check our forum.

## How to edit

There are three ways to update information on GRSciColl:
* you can suggest a change
* you can become an editor
* you can import data

### Suggest a change

Anyone can suggest changes by clicking on any GRSciColl entry, then:
* Click on `Edit`
* Click on the `Suggest` toggle button
* Make your suggestion and leave your email address and a comment

The suggestion will be reviewed by institutional editors, country editors or GBIF Staff depending on the entry edited.

### Become editor

There are two types of editors in GRSciColl: editors and mediators. Both can edit data on GRSciColl and review changes but only mediators can delete, merge and transform entries.
An editor (or mediator) can be given the permissions to edit:
* one or several collections
* one or several institutions (and their associated collections)
* one or several countries (and their associated institutions and collections)

To become a GRSciColl editor, you will need to have a [GBIF user account](https://www.gbif.org/user/profile) associated with your institutional email address. Please send us an email at scientific-collections@gbif.org to notify us that you would like to become an editor.

### Import data

The [GBIF Collections API](https://www.gbif.org/developer/registry#collections) allows for editing without going through the web interface. The API also has an experimental feature to upload batches of collection and institutions. See the documentation [here](https://github.com/gbif/registry/blob/dev/docs/grscicoll_batches.md).

If you are interested in using the API for editing GRSciColl, the permission system and requirements are the same as for becoming an editor.

## FAQ

### How to represent my institution and collections?

There is no hierarchy between collection entries nor between institution entries.
Institutions decide the level of granularity you want to use to represent their collections. For examples, an institution could have an entry for a bird collection and another for a mammal collection while another institution would have only one entry for their vertebrate collection.

In doubt, you can follow these practical guidelines:
* Make one institution entry per physical locations (the campus, building where the collections are hosted).
* Make one collection entry for each group of specimen with same point of contact (the person who can tell more about the collection, possibly arrange a loan).

### What should be my collection/institution code?

Codes don’t have to be unique in GRSciColl and an entry can have several codes. The codes should reflect what is used in practice (what is on the labels).
Note that GRSciColl codes are used to match occurrences published on GBIF to GRSciColl entries.

### What should be my collection/institution identifiers?

An entry can be associated with external identifiers such as: wikidata, ROR, DOI etc.
Only editors can add identifiers to entries.
Note that GRSciColl identifiers are used to match occurrences published on GBIF to GRSciColl entries.

