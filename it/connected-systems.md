---
permalink: /it/connected-systems
lang-ref: connected-systems
title: Sistemi collegati
description: |
  GRSciColl supporta l'interoperabilità e interagisce con numerosi altri sistemi.
background: "{{ site.data.images.echinometra.src }}"
imageLicense: "{{ site.data.images.echinometra.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: vero
---

## Identificatori

Gli identificatori e i codici di referenza sono essenziali per poter permettere l'interoperabilità.

Ogni entrata di GRSciColl possiede un Identificatore Universalmente Unico (UUID) e URLs associati. Gli [Editors](/how-to#become-editor) possono inoltre aggiungere una serie d' identificatori esterni alle entrate delle proprie collezioni e istituzioni. Le tipologie d'identificatori attualmente disponibili includono:

<ul id="identifierEnums"></ul>

<script>
    // Function to fetch and display data
    function fetchAndDisplayIdentifiers() {
        const url = 'https://api.gbif.org/v1/enumeration/basic/IdentifierType';
        const identifierEnumsList = document.getElementById('identifierEnums');
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Clear any existing list items
                identifierEnumsList.innerHTML = '';
                // Iterate through the array and create list items
                data.forEach(identifier => {
                    const listItem = document.createElement('li');
                    listItem.textContent = identifier;
                    identifierEnumsList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    // Call the function to fetch and display data when the page loads
    fetchAndDisplayIdentifiers();
</script>

Oltre al contributo degli editori di GRSciColl, gli identificatori di certe istituzioni vengono importate automaticamente o semi-automaticamente.
* A tutte le entrate collegate all'Index Herbariorum viene assegnato un identificatore Index Herbariorum. Visitare [ come funziona la sincronizzazione con l'Index Herbariorum](/about#index-herbariorum).
* Molti `CITES` identificatori provengono anche dall'Index Herbariorum. Visitare [come funziona la sincronizzazione con l'Index Herbariorum](/connected-systems#index-herbariorum).
* Abbiamo abbinato tante più entrate d'istiduzioni GRSciColl quanto possibile tramite [Wikidata](https://www.wikidata.org/)con il loro[OpenRefine](https://openrefine.org) strumento di risoluzione e abbiamo importato gli identificatori di "wikidata".
* Abbiamo abbinato tante più entrate d'istiduzioni GRSciColl quanto possibile tramite [Research Organization Registry (ROR)](https://ror.org) usando il loro[OpenRefine](https://openrefine.org) strumento di risoluzione e abbiamo importato gli identificatori ROR.
* Stiamo lavorando con il team [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections)  per poter importare i loro identificatori nel GRSciColl.

Gli utenti possono cercare sia gli identificatori delle collezioni che quelli delle istituzioni su questo sito e attraverso [ il nostro servizio di ricerca dell' API](https://www.gbif.org/developer/registry#lookup).

Gli identificatori vengono anche utilizzati per collegare eventi legati ai campioni pubblicati su GBIF alle entrate di GRSciColl.

## Campioni pubblicati su GBIF

Mentre processa e interpreta i nuovi campioni appena pubblicati, GBIF cerca di collegare i registri che includono valori per ciascuno dei seguenti termini alla corrispettiva entrata di GRSciColl attraverso il[ servizio di ricerca di GRSciColl ](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

Per esempio, se un campione fa riferimento al codice d'istituzione `RBINS` e all'identificatore d'istituzione`https://ror.org/02y22ws83`, essi saranno collegati al [ Royal Belgian Institute of Natural Science](/institution/c2bfdeef-9c03-435e-8465-c483dadd6995). Occurrences matched to GRSciColl entries are used in generating dashboards and metrics as shown in this example.

In cases with more than one possible match, the system uses the publisher country to help select a GRSciColl match. [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## GRSciColl data coming from other sources

The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries.

Currently, the two possible sources of information for GRSciColl entries are [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) and the [GBIF](https://www.gbif.org) dataset and publisher metadata. Data for entries drawn from these sources should be edited at the source. In practice, GRSciColl's editing interface doesn't allow users to update fields that use information from an external source.

### Index Herbariorum

Every week, GRSciColl synchronizes with the [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) API, updating information for existing entries whose source is Index Herbariorum and creating new entries as needed.

By default, one Index Herbariorum entry corresponds to an institution entry as well as a collection entry in GRSciColl because herbaria are often botanical collections within other institutions. You can read more about the rationale in [this GitHub issue](https://github.com/gbif/registry/issues/167). The synchronization process can generate duplicate institution entries when a single institution is home to several herbaria collections. See our [how-to page](/how-to#how-to-edit-a-grscicoll-collection-or-institution) and [FAQs](/faq/#how-to-handle-duplicates) for suggestions on how to handle these cases.

Editors can disconnect institutions entries from Index Herbariorum and choose to edit the institution directly in the GRSciColl editing interface as described in [this FAQ](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

### GBIF dataset metadata and GBIF publisher pages

The metadata of datasets published on GBIF can be used as primary sources for collection entries in GRSciColl. Unlike with the Index Herbariorum synchronization, there is no weekly schedule and new entries aren't automatically created. Instead, editors must link GRSciColl collections to their sources manually. This is because the scope of GBIF includes data beyond the scope of GRSciColl. Note that there is also an option to create a collection entry from a dataset. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface). When the metadata of a dataset is updated, the corresponding collection entry is updated immediately.

Similarly, the publisher information available on GBIF can be used as a primary source for institution entries in GRSciColl.

## GRSciColl as content for other websites

The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples.

### iDigBio

The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions.

### GBIF hosted portals

The current GRSciColl website uses the [GBIF hosted portal](https://www.gbif.org/hosted-portals) framework, and any GBIF hosted portal can display data from GRSciColl—see, for example, the [UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 
