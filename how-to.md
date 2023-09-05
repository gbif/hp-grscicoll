---
lang-ref: how-to

title: How to
description: |
    How to navigate the Global Registry of Scientific Collections and update its content
background:  "{{ site.data.images.catocala.src }}"
imageLicense: "{{ site.data.images.catocala.caption }}"
height: 70vh
# layout: documentation
# sideNavigation: about.about
# composition: # you can extend the documentation layout with a custom composition
#  - type: postHeader
#  - type: pageMarkdown
toc: true
---

## How to add a collection or an institution to GRSciColl

You can suggest or add a collection or an institution to GRSciColl here:

[Add New Institution](https://registry.gbif.org/institution/create){: .button .is-primary}

[Add New Collection](https://registry.gbif.org/collection/create){: .button .is-primary}

When creating a new entry in GRSciColl, very few fields are mandatory. However, we really appreciate if you could provide the address for the entry you created (especially the country).

## How to edit a GRSciColl collection or institution

There are three ways to update information on GRSciColl:
* you can suggest a change
* you can become an editor
* you can import data

### Suggest a change

Anyone can suggest changes by clicking on any GRSciColl entry, then:
* Click on `Edit`
* Click on the `Suggest` toggle button
* Make your suggestion and leave your email address and a comment

You can also suggest adding new entries, merging duplicates and transforming institution entries into collections.

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

## Editing Guidelines

### How to represent my institution and collections?

There is no hierarchy between collection entries nor between institution entries.
Institutions decide the level of granularity you want to use to represent their collections. For examples, an institution could have an entry for a bird collection and another for a mammal collection while another institution would have only one entry for their vertebrate collection.

In doubt, you can follow these practical guidelines:
* Make one institution entry per physical locations (the campus, building where the collections are hosted).
* Make one collection entry for each group of specimen with same point of contact (the person who can tell more about the collection, possibly arrange a loan).

### What information should I put in GRSciColl?

Although very few fields are mandatory, we recommend to provide as much information as possible. For institutions, it is important to provide a name, code and address (or at least country). For collections, don't forget to add an associated institution.

### What should be my collection/institution code?

Codes don’t have to be unique in GRSciColl and an entry can have several codes. The codes should reflect what is used in practice (what is on the labels).
Note that GRSciColl codes are used to match occurrences published on GBIF to GRSciColl entries.

### What should be my collection/institution identifiers?

An entry can be associated with external identifiers such as: wikidata, ROR, DOI etc.
Only editors can add identifiers to entries.
Note that GRSciColl identifiers are used to match occurrences published on GBIF to GRSciColl entries.

## How to link specimen-related occurrences published on GBIF to GRSciColl entries

See this blogpost: https://data-blog.gbif.org/post/grscicoll-flags/

## How to use the GRSciColl editing interface

The GRSciColl editing interface lives in the [GBIF Registry](https://registry.gbif.org). You can access it from any institution or collection page by clicking on the `Edit` button. You don't need an account to suggest changes. For direct updates and for adding or removing primary sources and identifiers, you will need to [be an editor](/how-to#become-editor).

### My collection is a dataset on GBIF: how to make GBIF dataset metadata and GBIF publisher pages primary sources for GRSciColl

1. Log in the registry interface, you must be an editor for the GRSciColl entry you would like to work with.
2. Click on the `Master source` tab.
3. Click on the `Create new` button (in the upper rigth corner).
4. Select the source type (`GBIF dataset` if you are working with a collection or `GBIF publisher` if it is an institution).
5. Add the UUID of the dataset or publisher that you would like to use. The UUID can be found in the dataset or publisher URL. For example, the UUID for `https://www.gbif.org/dataset/b275a4c1-9859-4f3c-8ead-d86dde820fbc` is `b275a4c1-9859-4f3c-8ead-d86dde820fbc`.
6. Click on the `Create` button.

### How to edit entries connected to external sources

You will notice that you cannot edit fields that come from external sources. The only way to do so is to edit the entry at the source (a link to the source is provided) or disconnect the entry from the source.

### How to disconnect an entry from an external source

1. Log in the registry interface, you must be an editor for the GRSciColl entry you would like to work with.
2. Click on the `Master source` tab.
3. Click on the `Delete` button (on the same line as the source).

> NB: if you would like to disconnect an collection from Index Herbariorum, please contact us.

### How to handle duplicates

