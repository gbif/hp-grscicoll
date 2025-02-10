---
permalink: /it/faq
lang-ref: faq
title: Domande Frequenti
description: |
  Quì troverete le risposte alle principali domande.
background: "{{ site.data.images.bombus-rufocinctus.src }}"
imageLicense: "{{ site.data.images.bombus-rufocinctus.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: vero
---

## Sito web di GRSciColl

## Come far apparire la mia collezione o il mio campione sulla homepage?

Se desiderate dare un nome alla vostra collezione o campione in modo che possa apparire sulla homepage di GRSciColl, assicuratevi che rispetti i seguenti criteri:
* Ci deve essere una voce per la collezione e l' istituzione associata su GRSciColl.
* La collezione deve avere alcuni campioni digitalizzati disponibili su GBIF.
* Alcuni eventi disponibili su GBIF devono essere collegati alla voce di GRSciColl
* Alcuni degli eventi disponibili su GBIF devono contenere delle immagini

e successivamente, compilare e inviare il modello di candidatura <a href="mailto:scientific-collections@gbif.org?subject=GRSciColl%20website%20-%20Collection%20Nomination&body=Collection%20name:%20%0ACollection%20link%20(on%20GRSciColl):%20%0ASubmiter%20name%20and%20affiliation:%20%0ALink%20to%20image%20that%20you%20wish%20to%20show%20on%20the%20homepage%20(optional):%20"</a>.

## Posso esportare dei dati di GRSciColl in un foglio di calcolo?

Il risultato di ricerca di una collezione o istituzione può essere scaricato dal sito web cliccando questo bottone:
<img width="1664" alt="download_as_csv" src="https://github.com/gbif/hp-grscicoll/assets/7677271/0ed58648-4efc-4755-876f-29677f6be975" />

## Qual'è la differenza tra il set di dati di GBIF e le collezioni di GRSciColl?

GRSciColl ha avuto origine indipendentemente da GBIF, e possiede una storia personale <a href="/about#data-history"</a>. Molti set di dati pubblicati su GBIF contengono dei registri di campioni che appartengono a collezioni registrate su GRSciColl. Il contenuto di GBIF e GRSciColl può sovrapporsi. Tuttavia, vi sono alcune differenze:
* Una voce di collezione di GRSciColl deve corrispondere ad una collezione fisica mentre il set di dati di GBIF può contenere altri tipi di registri come osservazioni.
* Una voce di collezione di GRSciColl può fare riferimento ad una collezione storica che è andata perduta o divisa.
* I set di dati pubblicati su GBIF contengono dati legati alla biodiversità mentre le voci di collezione su GRSciColl possono descrivere collezioni di tipo archeologico o geologico.

Gli editori di GBIF potrebbero scegliere di pubblicare tutti i loro registri in un singolo set di dati ma descrivere il loro patrimonio tramite diverse voci di collezione su GRSciColl. In alternativa, molti set di dati possono contenere dei registri corrispondenti a dei campioni che appartengono alla stessa collezione.

Vedere come gli eventi pubblicati su GBIF sono collegati alle voci di GRSciColl [ quì](/connected-systems#occurrences-published-on-gbif). Vedere come i set di dati di GBIF possono essere collegati alle voci di collezione di GRSciColl [ quì ](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## Qual'è la differenza tra gli editori di GBIF e le istituzioni di GRSciColl?

GRSciColl ha avuto origine indipendentemente da GBIF, e possiede una storia personale <a href="/about#data-history"</a>. Molti set di dati pubblicati su GBIF contengono dei registri di campioni che appartengono a collezioni registrate su GRSciColl. Il contenuto di GBIF e GRSciColl può sovrapporsi. Per rispondere alla domanda precedente vedere <a href="/faq#what-is-the-difference-between-gbif-datasets-and-grscicoll-collections" </a>. Tuttavia, vi sono alcune differenze:
* Gli editori di GBIF sono organizzazioni registrate che attivamente condividono dati su GBIF. Utilizzano [ strumenti di pubblicazione](https://data-blog.gbif.org/post/installations-and-hosting-solutions-explained/) per poter condividere i set di dati su GBIF. Alcuni editori sono musei ed erbari ma altri sono iniziative scientifiche dei cittadini, giornali o centri di ricerca che però potrebbero condividere soltanto osservazioni, descrizioni di taxa o dati derivanti dal DNA.
* Le istituzioni di GRSciColl sono state registrate poichè sono risapute possedere collezioni scientifiche fisiche. Le voci d'istituzione di GRSciColl possono essere aggiunte dagli editori di GRSciColl (basandosi sulle informazioni trovate nelle pubblicazioni oppure online) o dalle istituzioni stesse.

Un grande ente amministrativo come un'università può registrarsi come editore di GBIF e descrivere i propri dipartimenti come istituzioni di GRSciColl. In alternativa, alcuni editori di GBIF possono corrispondere a entità più piccole e avere la propria istituzione rappresentata come singola voce su GRSciColl.

Vedere come gli eventi pubblicati su GBIF sono collegati alle voci di GRSciColl[ quì](/connected-systems#occurrences-published-on-gbif). Vedere come i set di dati di GBIF possono essere collegati alle voci di collezione di GRSciColl [ quì ](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## Cosa sono i descrittori di collezione su GRSciColl?

I descrittori di collezione sono pensati per condividere informazioni strutturate riguardo alle collezioni. Essi possono contenere importanti dettagli riguardo a collezioni e sub-collezioni così come dati quantitativi che non possono essere condivisi su pagine di collezione (per esempio, il numero delle tipologie di campioni per uno specifico taxon). Alcuni descrittori di collezione vengono utilizzati per l'indicizzazione delle collezioni. Questo significa che migliorano la scopribilità delle collezioni. Per esempio, una collezione associata a dei nomi di specie di libellula, potrà essere ritrovata dagli utenti che avranno cercato "Odonata" nel campo del nome scientifico della ricerca di collezione.

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
