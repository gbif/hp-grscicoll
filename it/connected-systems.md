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

Ogni voce di GRSciColl possiede un Identificatore Universalmente Unico (UUID) e URLs associati. Gli [Editors](/how-to#become-editor) possono inoltre aggiungere una serie d' identificatori esterni alle voci delle proprie collezioni e istituzioni. Le tipologie d'identificatori attualmente disponibili includono:

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
* A tutte le voci collegate all'Index Herbariorum viene assegnato un identificatore Index Herbariorum. Visitare [ come funziona la sincronizzazione con l'Index Herbariorum](/about#index-herbariorum).
* Molti `CITES` identificatori provengono anche dall'Index Herbariorum. Visitare [come funziona la sincronizzazione con l'Index Herbariorum](/connected-systems#index-herbariorum).
* Abbiamo abbinato tante più voci d'istiduzioni GRSciColl quante possibili tramite [Wikidata](https://www.wikidata.org/)con il loro[OpenRefine](https://openrefine.org) strumento di risoluzione e abbiamo importato gli identificatori di "wikidata".
* Abbiamo abbinato tante più voci d'istiduzioni GRSciColl quante possibili tramite [Research Organization Registry (ROR)](https://ror.org) usando il loro[OpenRefine](https://openrefine.org) strumento di risoluzione e abbiamo importato gli identificatori ROR.
* Stiamo lavorando con il team [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections)  per poter importare i loro identificatori nel GRSciColl.

Gli utenti possono cercare sia gli identificatori delle collezioni che quelli delle istituzioni su questo sito e attraverso [ il nostro servizio di ricerca dell' API](https://www.gbif.org/developer/registry#lookup).

Gli identificatori vengono anche utilizzati per collegare eventi legati ai campioni pubblicati su GBIF alle voci di GRSciColl.

## Campioni pubblicati su GBIF

Mentre processa e interpreta i nuovi campioni appena pubblicati, GBIF cerca di collegare i registri che includono valori per ciascuno dei seguenti termini alla corrispettiva entrata di GRSciColl attraverso il[ servizio di ricerca di GRSciColl ](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

Per esempio, se un campione fa riferimento al codice d'istituzione `RBINS` e all'identificatore d'istituzione`https://ror.org/02y22ws83`, essi saranno collegati al [ Royal Belgian Institute of Natural Science](/institution/c2bfdeef-9c03-435e-8465-c483dadd6995). I campioni collegati alle voci di GRSciColl vengono utilizzate per generare "dashboard" e metriche come mostrato in questo esempio.

In casi con più collegamenti possibili, il sistema utilizza il paese di pubblicazione per aiutare a selezionare un collegamento con GRSciColl. [ Scopri di più su come collegare i campioni di GBIF a GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## I dati di GRSciColl provenienti da altre fonti

L'istituzione e le voci delle collezioni di GRSciColl possono avere fonti d'informazione primarie esterne che provengono da un altro registro o sito web. Le modifiche a tali fonti primarie comportano  l'aggiornamento delle voci corrispondenti di GRSciColl, eliminando il bisogno di gestire le informazioni attraverso molteplici registri.

Attualmente, le due possibili fonti d'informazione per le voci di GRSciColl sono [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) e [GBIF](https://www.gbif.org)set di dati e metadati dell'editore. I dati per le voci provenienti da queste fonti dovrebbero essere editate alla radice. In pratica, l'interfaccia di modifica di GRSciColl non permette agli utenti di aggiornare i canali che usano informazioni da fonti esterne.

### Index Herbariorum

Settimanalmente, GRSciColl si sincronizza con l'API [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), aggiornando informazioni per voci già esistenti la cui fonte è l'Index Herbariorum e creando nuove voci a seconda delle necessità.

Di default, una voce dell'Index Herbariorum corrisponde alla voce di un'istituzione e a quella di una collezione di GRSciColl, poichè gli erbari sono spesso collezioni botaniche presenti all'interno di altre istituzioni. Puoi leggere di più sulle motivazioni riguardo alla problematica di GitHub su <a href="https://github.com/gbif/registry/issues/167"</a>. Il processo di sincronizzazione può generare doppie voci d'istituzione quando una singola istituzione è sede di molteplici erbari. Visita il nostro sito [how-to page](/how-to#how-to-edit-a-grscicoll-collection-or-institution) and [FAQs](/faq/#how-to-handle-duplicates) per suggerimenti su come gestire questi casi.

Gli editori possono disconnettere le voci delle istituzioni dall'Index Herbariorum e scegliere di editare l'istituzione direttamente nell'interfaccia di modifica del GRSciColl, come descritto in questo FAQ<a href="/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries"</a>.

### I set di metadati e pagine dell'editore di GBIF

I metadati dei set di dati pubblicati su GBIF possono essere usati come fonti primarie per le voci di collezioni su GRSciColl. Al contrario della sincronizzazione con Index Herbariorum, non c'è nessuna tabella settimanale e le nuove entrate non vengono create automaticamente. Gli editori devono invece collegare le collezioni di GRSciColl alle loro fonti manualmente. Questo avviene poichè l'ambito di applicazione di GBIF include dati che si trovano al di fuori di GRSciColl. Da notare che esiste anche l'opzione di creare una voce di collezione da un set di dati. Visita la nostra pagina <a href="/how-to#how-to-use-the-grscicoll-editing-interface"</a>. When the metadata of a dataset is updated, the corresponding collection entry is updated immediately.

Similarly, the publisher information available on GBIF can be used as a primary source for institution entries in GRSciColl.

## GRSciColl as content for other websites

The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples.

### iDigBio

The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions.

### GBIF hosted portals

The current GRSciColl website uses the [GBIF hosted portal](https://www.gbif.org/hosted-portals) framework, and any GBIF hosted portal can display data from GRSciColl—see, for example, the [UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 
