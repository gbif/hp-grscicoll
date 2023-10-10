---
lang-ref: faq

title: Frequently Asked Questions
description: |
    Here you will find the answers to the most frequently asked questions.
background:  "{{ site.data.images.bombus-rufocinctus.src }}"
imageLicense: "{{ site.data.images.bombus-rufocinctus.caption }}"
height: 70vh
# layout: documentation
# sideNavigation: about.about
# composition: # you can extend the documentation layout with a custom composition
#  - type: postHeader
#  - type: pageMarkdown
toc: true
---

## GRSciColl website

## How to get my collection or specimen featured on the homepage?

If you would like to nominate your collection or specimen to be featured on the GRSciColl homepage, confirm that it meets the following criteria:
* There must be an entry for the collection and associated institution in GRSciColl
* The collection must have some digitized specimens available on GBIF.
* Some the occurrences available on GBIF must be linked to the GRSciColl entry
* Some of the occurrences available on GBIF must have images

and then fill in [the nomination form](mailto:scientific-collections@gbif.org?subject=GRSciColl%20website%20-%20Collection%Nomination&body=Collection%20name:\nCollection%20link:\Link%20to%20image%20that%20you%20wish%20to%20show%20on%20the%homepage%20(optional):\nSubmiter%20name%20and%20affiliation:\n).

## Can I export GRSciColl into a spreadsheet?

The result of a collection or institution search can be downloaded from the website by clicking on this button:
<img width="1664" alt="download_as_csv" src="https://github.com/gbif/hp-grscicoll/assets/7677271/0ed58648-4efc-4755-876f-29677f6be975">

## Editing guidelines

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

### How to handle duplicates

If you find duplicate entries in GRSciColl, there are two way to handle them.
* You might want to keep both entries and label one as `inactive` by uncheckling the `active` box.
* You might want to merge the entries by using the editing interface.

Merging entries will delete one and transfert all the identifiers, codes and collections (if it is an institution) to the remaining entry. In additiont to that, the information from the entry deleted will be transferred to empty fields in the remaining entry.
We recommend merging entry rather than deleting them to conserve the identifiers. So if someone references one of the "old" identifiers, they will be redirected to the remaining entry.

## Editing interface - Technical questions

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

### How to link specimen-related occurrences published on GBIF to GRSciColl entries

In order for your specimens to be displayed on the GRSciColl, they mus be published on GBIF.org and linked to at least one GRSciColl entry.
See how to publish data on GBIF.org [here](https://www.gbif.org/publishing-data) and how to link the occurrences to GRSciColl below:

The recommended and most declarative way to link data to institutions or collection entities in GRSciColl is to use the full URL for the entity. For example, when using Darwin Core:
* dwc:institutionID: https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381
* dwc:collectionID: https://www.gbif.org/grscicoll/collection/772f9e37-4643-452b-82b4-a06550283096

It is also possible to use additional related identifiers. See this blog post for more details.

[Link occurrences](https://data-blog.gbif.org/post/grscicoll-flags/){: .button .is-primary}
