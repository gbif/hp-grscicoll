---
permalink: /it/connected-systems
lang-ref: connected-systems
title: Sistemi collegati
description: |
  GRSciColl supporta l'interoperabilità e interagisce con numerosi altri sistemi.
background: "{{ site.data.images.echinometra.src }}"
imageLicense: "{{ site.data.images.echinometra.caption }}"
height: 60vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: vero
---

## Identificatori

Gli identificatori e i codici di referenza sono essenziali per poter permettere l'interoperabilità.

Ogni voce di GRSciColl possiede un Identificatore Universalmente Unico (UUID) e URLs associati. Gli [ editori ](/how-to#become-editor) possono inoltre aggiungere una serie d'identificatori esterni alle voci delle proprie collezioni e istituzioni. Le tipologie d'identificatori attualmente disponibili includono:

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
* Molti `identificatori di citazioni` provengono anche dall'Index Herbariorum. Visitare [come funziona la sincronizzazione con l'Index Herbariorum](/connected-systems#index-herbariorum).
* Abbiamo abbinato tante più voci d'istiduzione GRSciColl quante possibili tramite [Wikidata](https://www.wikidata.org/) con il loro[  strumento di risoluzione (OpenRefine) ](https://openrefine.org) e abbiamo importato gli identificatori di "wikidata".
* Abbiamo abbinato tante più voci d'istiduzione GRSciColl quante possibili tramite il [ Research Organization Registry (ROR)](https://ror.org) utilizzando il loro [ strumento di risoluzione (OpenRefine) ](https://openrefine.org)  e abbiamo importato gli identificatori ROR.
* Stiamo lavorando con il team [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections)  per poter importare i loro identificatori nel GRSciColl.

Gli utenti possono cercare sia gli identificatori delle collezioni che quelli delle istituzioni su questo sito e attraverso [ il nostro servizio di ricerca dell' API](https://www.gbif.org/developer/registry#lookup).

Gli identificatori vengono inoltre utilizzati per collegare eventi legati agli esemplari pubblicati su GBIF alle voci di GRSciColl.

## Occorrenze pubblicate su GBIF

Mentre processa e interpreta le nuove occorrenze appena pubblicate, GBIF cerca di collegare i registri che includono i valori per ciascuno dei seguenti termini alla corrispettiva entrata di GRSciColl attraverso il[ servizio di ricerca di GRSciColl ](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

Per esempio, se un' occorrenza fa riferimento al codice d'istituzione `RBINS` e all'identificatore d'istituzione `https://ror.org/02y22ws83`, essi saranno collegati al [ Royal Belgian Institute of Natural Science](/institution/c2bfdeef-9c03-435e-8465-c483dadd6995). Le occorrenze collegate alle voci di GRSciColl vengono utilizzate per generare pannelli di controllo e metriche come mostrato in questo esempio.

Nel caso di più collegamenti possibili, il sistema utilizza il paese di pubblicazione per aiutare a selezionare un collegamento con GRSciColl. [ Scopri di più su come collegare i campioni di GBIF a GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## I dati di GRSciColl provenienti da altre fonti

Le voci d'istituzione e di collezione di GRSciColl possono avere fonti d'informazione primarie esterne provenienti da un altro registro o sito web. Modifiche a tali fonti primarie comportano  l'aggiornamento delle voci corrispondenti di GRSciColl, eliminando il bisogno di gestire le informazioni attraverso molteplici registri.

Attualmente, le due possibili fonti d'informazione per le voci di GRSciColl sono l'[Index Herbariorum](https://sweetgum.nybg.org/science/ih/) ed [ i set di dati e metadati degli editori di GBIF](https://www.gbif.org) I dati per le voci provenienti da queste fonti dovrebbero essere editati alla radice. I dati per le voci provenienti da queste fonti dovrebbero essere editati alla radice. In pratica, l'interfaccia di modifica di GRSciColl non permette agli utenti di aggiornare i canali che usano informazioni da fonti esterne.

### Index Herbariorum

Settimanalmente, GRSciColl si sincronizza con l'API di [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), aggiornando informazioni per voci già esistenti la cui fonte è l'Index Herbariorum e creando nuove voci a seconda delle necessità.

Di default, una voce dell'Index Herbariorum corrisponde alla voce di un'istituzione e a quella di una collezione di GRSciColl, poichè gli erbari sono spesso collezioni botaniche presenti all'interno di altre istituzioni. Puoi leggere di più sulle motivazioni riguardo alla [problematica di GitHub](https://github.com/gbif/registry/issues/167). Il processo di sincronizzazione può generare doppie voci d'istituzione quando una singola istituzione è sede di molteplici erbari. Visita la nostra [ pagina di gestione ](/how-to#how-to-edit-a-grscicoll-collection-or-institution) ed il nostro [FAQs](/faq/#how-to-handle-duplicates) per suggerimenti su come gestire questi casi.

Gli editori possono disconnettere le voci delle istituzioni dall'Index Herbariorum e scegliere di editare l'istituzione direttamente nell'interfaccia di modifica del GRSciColl, come descritto in questo FAQ.

### I set di metadati e pagine dell'editore di GBIF

I metadati dei set di dati pubblicati su GBIF possono essere usati come fonti primarie per le voci di collezione su GRSciColl. Al contrario della sincronizzazione con Index Herbariorum, non c'è nessuna tabella settimanale e le nuove entrate non vengono create automaticamente. Gli editori devono invece collegare le collezioni di GRSciColl alle loro fonti manualmente. Questo avviene poichè l'ambito di applicazione di GBIF include dati che si trovano al di fuori di GRSciColl. Da notare che esiste anche l'opzione di creare una voce di collezione da un set di dati. Visita la nostra pagina [ pagina di gestione](/how-to#how-to-use-the-grscicoll-editing-interface). Quando i metadati di un set di dati vengono aggiornati, la voce della collezione corrispondente viene anch'essa immediatamente aggiornata.

Allo stesso modo, le informazioni relative all'editore disponibili su GBIF possono essere utilizzate come fonte primaria per le voci delle istituzioni su GRSciColl.

## GRSciColl come contenuto per altri siti web

Il sito [GRSciColl API](/api) permette automaticamente ad altre applicazioni di accedere ai dati di GRSciColl. Questo significa che altri siti web sono in grado di mostrare il contenuto di GRSciColl, che rimane curato da un' autorità centrale. Chiunque può utilizzare l'API per includere i dati di GRSciColl nei propri sistemi. Quì sotto ci sono due esempi documentati.

### iDigBio

I dati mostrati sul sito [iDigBio Collections](https://www.idigbio.org/portal/collections) sono mantenuti da GRSciColl. iDigBio fa parte del nostro team di editori e propone aggiornamenti per le istituzioni statunitensi.

### Portali ospitati da GBIF

L'attuale sito di GRSciColl utilizza il modello [ portali ospitati da GBIF](https://www.gbif.org/hosted-portals), e ogni portale ospitato da GBIF può mostrare dati provenienti da GRSciColl-- per esempio, il Portale delle Collezioni di Scienze Naturali del Regno Unito . 
