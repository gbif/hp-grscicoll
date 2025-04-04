---
permalink: /cs-CZ/faq
lang-ref: faq
title: Často kladené dotazy
description: |
  Zde najdete odpovědi na nejčastější otázky.
background: "{{ site.data.images.bombus-rufocinctus.src }}"
imageLicense: "{{ site.data.images.bombus-rufocinctus.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Webové stránky GRSciColl

## Jak získat svou sbírku nebo exemplář na domovské stránce?

Pokud chcete nominovat svou sbírku nebo exemplář na umístění na domovské stránce GRSciColl, potvrďte, že splňuje následující kritéria:
* V databázi GRSciColl musí existovat záznam pro sbírku a přidruženou instituci
* Sbírka musí mít některé digitalizované exempláře dostupné na GBIF.
* Některé výskyty dostupné v GBIF musí být propojeny se záznamem v GRSciColl
* Některé výskyty dostupné na GBIF musí mít obrázky

a poté vyplňte a odešlete [nominační šablonu](mailto:scientific-collections@gbif.org?subject=GRSciColl%20website%20-%20Collection%20Nomination&body=Collection%20name:%20%0ACollection%20link%20(on%20GRSciColl):%20%0ASubmiter%20name%20and%20affiliation:%20%0ALink%20to%20image%20that%20you%20wish%20to%20show%20on%20the%20homepage%20(optional):%20).

## Mohu exportovat GRSciColl do tabulkového procesoru?

Výsledek vyhledávání ve sbírce nebo instituci si můžete stáhnout z webových stránek kliknutím na toto tlačítko:
<img width="1664" alt="download_as_csv" src="https://github.com/gbif/hp-grscicoll/assets/7677271/0ed58648-4efc-4755-876f-29677f6be975" />

## Jaký je rozdíl mezi datovými sadami GBIF a sbírkami GRSciColl?

GRSciColl vznikl nezávisle na GBIF, má [svou vlastní historii](/about#data-history). Mnoho datových sad publikovaných na GBIF obsahuje záznamy o exemplářích, které patří do sbírek registrovaných v GRSciColl. Obsah GBIF a GRSciColl se může překrývat. Existuje však několik rozdílů:
* Záznam sbírky GRSciColl musí odpovídat fyzické sbírce, zatímco datové sady GBIF mohou obsahovat jiné typy záznamů, například pozorování.
* Položka sbírky GRSciColl může odkazovat na historickou sbírku, která byla ztracena nebo rozdělena.
* .

Vydavatelé GBIF se mohou rozhodnout zveřejnit všechny své záznamy v jedné datové sadě, ale popsat své fondy několika záznamy o sbírkách v GRSciColl. Případně může několik datových souborů obsahovat záznamy odpovídající exemplářům patřícím do stejné sbírky.

Podívejte se, jak jsou výskyty publikované na GBIF propojeny se záznamy GRSciColl [zde](/connected-systems#occurrences-published-on-gbif). Podívejte se, jak lze datové sady GBIF propojit se záznamy sbírky GRSciColl [zde](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## What is the difference between GBIF publishers and GRSciColl institutions?

GRSciColl originated independently from GBIF, it has [its own history](/about#data-history). Many datasets published on GBIF contain records for specimens that belong to collections registered in GRSciColl. The content between GBIF and GRSciColl can overlap. See [the question above](/faq#what-is-the-difference-between-gbif-datasets-and-grscicoll-collections). However, there are some differences:
* GBIF publishers are registered organizations that actively share data on GBIF. They use [publishing tools](https://data-blog.gbif.org/post/installations-and-hosting-solutions-explained/) in order to share datasets on GBIF. Some publishers are museums and herbaria but others are citizen science initiatives, journals or research facilities which might only be sharing observations, taxa descriptions or DNA-derived data.
* GRSciColl institutions were registered because they are known to hold physical scientific collections. GRSciColl institution entries can be added by GRSciColl editors (based on information found in publications or online) or by the institutions themselves.

A large administrative entity like a university can register as a GBIF publisher and describe its departments as GRSciColl institutions. Alternatively, some GBIF publishers can correspond to smaller entities and have they institution represented as one entry in GRSciColl.

See how occurrences published on GBIF are linked to GRSciColl entries [here](/connected-systems#occurrences-published-on-gbif). See how GBIF datasets can be linked to GRSciColl collection entries [here](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## What are collection descriptors in GRSciColl?

Collection descriptors are meant to share structured information about collections. They can contain relevant details about collections and sub-collections as well as quantitative data which cannot be shared on collection pages (for example, the number of type specimens for a particular taxon). Some collection descriptors are used for indexing collections. This means that they improve collection discoverability. For example, a collection associated with dragonfly species names will be found by users looking for “Odonata” in the scientific name field of the collection search.

Collection descriptors are particularly relevant for collections that aren’t fully digitized and/or where the specimen records aren’t available on GBIF.org.

Collection descriptors are uploaded to GRSciColl as tables with associated titles and descriptions.

* Each line corresponds to a group of specimens described and each column is a descriptor.
* When possible, these descriptors should be mapped to [Darwin Core](https://dwc.tdwg.org/terms/) and/or [Latimer core](https://ltc.tdwg.org) terms.
* A table can contain information about a specific aspect or subset of the collection. Tables might contain overlapping information or different descriptions for the same subset of specimens.

Learn how to share collection descriptors on our [how-to page](/how-to).


## Editing guidelines

### How to represent my institution and collections?

There is no hierarchy between collection entries nor between institution entries. Institutions decide the level of granularity you want to use to represent their collections. For examples, an institution could have an entry for a bird collection and another for a mammal collection while another institution would have only one entry for their vertebrate collection.

In doubt, you can follow these practical guidelines:
* Make one institution entry per physical locations (the campus, building where the collections are hosted).
* Make one collection entry for each group of specimen with same point of contact (the person who can tell more about the collection, possibly arrange a loan).

### What information should I put in GRSciColl?

Although very few fields are mandatory, we recommend to provide as much information as possible. For institutions, it is important to provide a name, code and address (or at least country). For collections, don't forget to add an associated institution.

### What should be my collection/institution code?

Codes don’t have to be unique in GRSciColl and an entry can have several codes. The codes should reflect what is used in practice (what is on the labels). Note that GRSciColl codes are used to match occurrences published on GBIF to GRSciColl entries.

### What should be my collection/institution identifiers?

An entry can be associated with external identifiers such as: wikidata, ROR, DOI etc. Only editors can add identifiers to entries. Note that GRSciColl identifiers are used to match occurrences published on GBIF to GRSciColl entries.

#### What format should be my ROR identifier?

The preferred form of a ROR identifier is the entire URL: https://ror.org/02mhbdp94. See [this ROR FAQ](https://ror.org/about/faqs/#what-is-a-ror-identifier).

### How to handle duplicates

If you find duplicate entries in GRSciColl, there are two way to handle them.
* You might want to keep both entries and label one as `inactive` by uncheckling the `active` box.
* You might want to merge the entries by using the editing interface.

Merging entries will delete one and transfert all the identifiers, codes and collections (if it is an institution) to the remaining entry. In additiont to that, the information from the entry deleted will be transferred to empty fields in the remaining entry. We recommend merging entry rather than deleting them to conserve the identifiers. So if someone references one of the "old" identifiers, they will be redirected to the remaining entry.

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

In order for your specimens to be displayed on the GRSciColl, they mus be published on GBIF.org and linked to at least one GRSciColl entry. See how to publish data on GBIF.org [here](https://www.gbif.org/publishing-data) and how to link the occurrences to GRSciColl below:

The recommended and most declarative way to link data to institutions or collection entities in GRSciColl is to use the full URL for the entity. For example, when using Darwin Core:
* dwc:institutionID: https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381
* dwc:collectionID: https://www.gbif.org/grscicoll/collection/772f9e37-4643-452b-82b4-a06550283096

It is also possible to use additional related identifiers. See this blog post for more details.

[Link occurrences](https://data-blog.gbif.org/post/grscicoll-flags/){: .button .is-primary}
