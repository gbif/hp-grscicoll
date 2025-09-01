---
permalink: /it/faq
lang-ref: faq
title: Domande Frequenti
description: |
  Quì troverete le risposte alle principali domande.
background: "{{ site.data.images.bombus-rufocinctus.src }}"
imageLicense: "{{ site.data.images.bombus-rufocinctus.caption }}"
height: 60vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: vero
---

## Sito web di GRSciColl

## Come far apparire la mia collezione o il mio campione nella homepage?

Se desiderate dare un nome alla vostra collezione o campione in modo che possa apparire nella homepage di GRSciColl, assicuratevi che rispetti i seguenti criteri:
* Una collezione e l'istituzione a essa associata, devono essere registrate con una voce di GRSciColl.
* La collezione deve avere alcuni campioni digitalizzati disponibili su GBIF.
* Alcuni eventi disponibili su GBIF devono essere collegati alla voce di GRSciColl
* Alcuni degli eventi disponibili su GBIF devono contenere delle immagini

e successivamente, compilare e inviare il  [modello di candidatura](mailto:scientific-collections@gbif.org?subject=GRSciColl%20website%20-%20Collection%20Nomination&body=Collection%20name:%20%0ACollection%20link%20(on%20GRSciColl):%20%0ASubmiter%20name%20and%20affiliation:%20%0ALink%20to%20image%20that%20you%20wish%20to%20show%20on%20the%20homepage%20(optional):%20).

## Posso esportare dei dati di GRSciColl in un foglio di calcolo?

Il risultato di ricerca di una collezione o istituzione può essere scaricato dal sito web cliccando questo bottone:
<img width="1664" alt="download_as_csv" src="https://github.com/gbif/hp-grscicoll/assets/7677271/0ed58648-4efc-4755-876f-29677f6be975" />

## Qual'è la differenza tra il set di dati di GBIF e le collezioni di GRSciColl?

GRSciColl ha avuto origine indipendentemente da GBIF, e possiede una [storia personale ](/about#data-history). Molti set di dati pubblicati su GBIF contengono dei registri di campioni che appartengono a collezioni registrate su GRSciColl. Il contenuto di GBIF e GRSciColl può sovrapporsi. Tuttavia, vi sono alcune differenze:
* Una voce di collezione di GRSciColl deve corrispondere ad una collezione fisica mentre il set di dati di GBIF può contenere altri tipi di registri come osservazioni.
* Una voce di collezione di GRSciColl può fare riferimento a una collezione storica che è andata perduta o divisa.
* I set di dati pubblicati su GBIF contengono dati legati alla biodiversità mentre le voci di collezione su GRSciColl possono descrivere collezioni di tipo archeologico o geologico.

Gli editori di GBIF potrebbero scegliere di pubblicare tutti i loro registri in un singolo set di dati ma descrivere il loro patrimonio tramite diverse voci di collezione su GRSciColl. In alternativa, molti set di dati possono contenere dei registri corrispondenti a dei campioni che appartengono alla stessa collezione.

Vedere come gli eventi pubblicati su GBIF sono collegati alle voci di GRSciColl [ quì](/connected-systems#occurrences-published-on-gbif). Per vedere come i set di dati di GBIF possono essere collegati alle voci di collezione di GRSciColl [ cliccare quì ](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## Qual'è la differenza tra gli editori di GBIF e le istituzioni di GRSciColl?

GRSciColl ha avuto origine indipendentemente da GBIF, e possiede una [storia personale ](/about#data-history). Molti set di dati pubblicati su GBIF contengono dei registri di campioni che appartengono a collezioni registrate su GRSciColl. Il contenuto di GBIF e GRSciColl può sovrapporsi. Consultare la [ domanda precedente ](/faq#what-is-the-difference-between-gbif-datasets-and-grscicoll-collections). Tuttavia, vi sono alcune differenze:
* Gli editori di GBIF sono organizzazioni registrate che attivamente condividono dati su GBIF. Utilizzano [ strumenti di pubblicazione](https://data-blog.gbif.org/post/installations-and-hosting-solutions-explained/) per poter condividere i set di dati su GBIF. Alcuni editori sono musei ed erbari ma altri sono iniziative scientifiche dei cittadini, giornali o centri di ricerca che però potrebbero condividere soltanto osservazioni, descrizioni di taxa o dati derivanti dal DNA.
* Le istituzioni di GRSciColl sono state registrate poichè sono risapute possedere collezioni scientifiche fisiche. Le voci d'istituzione di GRSciColl possono essere aggiunte dagli editori di GRSciColl (basandosi sulle informazioni trovate nelle pubblicazioni oppure online) o dalle istituzioni stesse.

Un grande ente amministrativo come un'università può registrarsi come editore di GBIF e descrivere i propri dipartimenti come istituzioni di GRSciColl. In alternativa, alcuni editori di GBIF possono corrispondere a entità più piccole e avere la propria istituzione rappresentata come singola voce su GRSciColl.

Per vedere come le occorrenze pubblicate su GBIF sono collegati alle voci di GRSciColl[ cliccare quì](/connected-systems#occurrences-published-on-gbif). Per vedere come i set di dati di GBIF possono essere collegati alle voci di collezione di GRSciColl [ cliccare quì ](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## Cosa sono i descrittori di collezione su GRSciColl?

I descrittori di collezione sono pensati per condividere informazioni strutturate riguardo alle collezioni. Essi possono contenere importanti dettagli riguardo a collezioni e sub-collezioni così come dati quantitativi che non possono essere condivisi su pagine di collezione (per esempio, il numero delle tipologie di campioni per uno specifico taxon). Alcuni descrittori di collezione vengono utilizzati per l'indicizzazione delle collezioni. Questo significa che migliorano la scopribilità delle collezioni. Per esempio, una collezione associata a dei nomi di specie di libellula, potrà essere ritrovata dagli utenti che avranno cercato "Odonata" nel campo del nome scientifico della ricerca di collezione.

I descrittori di collezione sono particolarmente rilevanti per le collezioni che non sono completamente digitalizzate e/o dove i registri dei campioni non sono disponibili su GBIF.org.

I registri di collezione vengono caricati su GRSciColl come tavole con titoli e descrizioni associati.

* Ogni linea corrisponde a un gruppo di campioni descritti e ogni colonna rappresenta un descrittore.
* Quando possibile, questi descrittori dovrebbero essere mappati su [Darwin Core](https://dwc.tdwg.org/terms/) e/o [Latimer core](https://ltc.tdwg.org) terms.
* Una tavola può contenere informazioni riguardo un aspetto specifico o sottoinsieme della collezione. Le tavole possono contenere informazioni sovrapposte o descrittori diversi per lo stesso sottoinsieme di campioni.

Imparare come condividere i descrittori di collezione sulla nostra pagina [how-to](/how-to).


## Linee guida per la redazione

### Come rappresentare la mia istituzione e le mie collezioni?

Non c'è nessuna gerarchia tra le voci di collezione e nemmeno tra le voci d'istituzione. Le istituzioni decidono il livello di granularità che desiderate utilizzare per rappresentare le loro collezioni. Per esempio, un'istituzione potrebbe avere una voce per una collezione sugli uccelli e un'altra per una collezione sui mammiferi, mentre un'ulteriore istituzione avrebbe una singola voce per la loro collezione sui vertebrati.

In caso di dubbio, potete seguire queste pratiche linee guida:
* Realizzate una voce d'istituzione per un singolo luogo fisico (il campus, edificio dove sono ospitate le collezioni).
* Realizzate una voce di collezione per ogni gruppo di campioni con lo stesso punto di contatto (la persona che può dire di più riguardo alla collezione, e che possibilmente organizzi un prestito).

### Quali informazioni dovrei inserire su GRSciColl?

Nonostante pochi campi siano obbligatori, vi raccomandiamo di fornire quante più informazioni possibili. Per quanto riguarda le istituzioni, è importante fornire un nome, un codice e un indirizzo (o per lo meno la nazione). Per le collezioni, non dimenticate di aggiungere un'istituzione associata.

### Quale dovrebbe essere il mio codice di collezione/istituzione?

I codici non devono essere unici su GRSciColl e una voce può avere molteplici codici. I codici dovrebbero riflettere ciò che viene utilizzato nella pratica (ciò che appare sulle etichette). Da notare che i codici di GRSciColl sono utilizzati per abbinare gli eventi pubblicati su GBIF alle voci di GRSciColl.

### Quali dovrebbero essere i miei identificatori di collezione/istituzione?

Una voce può essere associata a identificatori esterni come: wikidata, ROR, DOI eccetera. Solo gli editori possono aggiungere gli identificatori alle voci. Da notare che gli identificatori di GRSciColl sono soliti ad abbinare eventi pubblicati su GBIF alle voci di GRSciColl.

#### Che tipo di formato dovrebbe avere il mio identificatore ROR?

Il formato raccomandato per un identificatore ROR è l'intero URL: https://ror.org/02mhbdp94. Consultare questo [ROR FAQ](https://ror.org/about/faqs/#what-is-a-ror-identifier).

### Come gestire i duplicati

Se trovate delle voci duplicate su GRSciColl, ci sono due modi per gestirle.
* Potreste voler tenere entrambe le voci e catalogarne una come`inattiva`deselezionando la casella`attiva`.
* Potreste voler unire le voci utilizzando l'interfaccia di redazione.

Unire le voci ne cancellerà una e trasferirà tutti gli identificatori, codici e collezioni (se si tratta di un'istituzione) alla voce rimanente. Inoltre, le informazioni provenienti dalla voce cancellata saranno trasferite ai campi vuoti presenti nella voce rimasta. Raccomandiamo di unire le voci invece di cancellarle per poter conservare gli identificatori. Quindi, se qualcuno fa riferimento ai "vecchi" identificatori, saranno reindirizzati alla voce rimasta.

## Interfaccia di modifica - Domande tecniche

L'interfaccia di modifica di GRSciColl si trova nel Registro di GBIF [](https://registry.gbif.org). Potete accedervi attraverso qualsiasi pagina d'istituzione o collezione cliccando sul pulsante `Edita`. Non ti serve un account per suggerire cambiamenti. Per aggiornamenti diretti e per aggiungere o rimuovere fonti primarie e identificatori, avrete bisogno di [ essere un editore](/how-to#become-editor).

### La mia collezione è un set di dati su GBIF: come rendere i set di metadati e le pagine degli editori di GBIF fonti primarie per GRSciColl

1. Accedete all' \[interfaccia di registro\](https://registry. gbif. org/). Dovete essere un editore per la voce di GRSciColl con la quale vorreste lavorare.
2. Cliccate sulla scheda `Master source`.
3. Cliccate sul pulsante`Crea nuovo` (nell'angolo in alto a destra).
4. Selezionate la tipologia di fonte (`set di dati GBIF` se state lavorando con una collezione oppure cliccate su `editore GBIF` se si tratta di un'istituzione).
5. Aggiungete l' UUID del set di dati o dell'editore che vorreste utilizzare. L'UUID può essere trovato nel set di dati o nell'URL dell'editore. Per esempio, l'UUID per `https://www.gbif.org/dataset/b275a4c1-9859-4f3c-8ead-d86dde820fbc` è `b275a4c1-9859-4f3c-8ead-d86dde820fbc`.
6. Cliccate sul pulsante `Crea`.

### Come editare voci collegate a fonti esterne

Noterete che non potete editare campi che provengono da fonti esterne. L'unico modo per poterlo fare è editare la voce alla fonte (un link alla fonte vi verrà fornito) o disconnettere la voce dalla fonte.

### Come disconnettere una voce da una fonte esterna

1. Accedete all' \[interfaccia di registro\](https://registry. gbif. org/). Dovete essere un editore per la voce di GRSciColl con la quale vorreste lavorare.
2. Cliccate sulla scheda `Master source`.
3. Cliccate sul pulsante `Cancella` (sulla stessa linea della fonte).

> NB: se desiderate disconnettere una collezione dall'Index Herbariorum, vi preghiamo di contattarci.

### Come collegare degli eventi legati ai campioni pubblicati su GBIF alle voci di GRSciColl

Per far sì che i vostri campioni vengano visualizzati su GRSciColl, devono essere pubblicati su GBIF.org ed essere collegati ad almeno una voce di GRSciColl. Per vedere come pubblicare dati su GBIF.org[ cliccate quì ](https://www.gbif.org/publishing-data) e per collegare le occorrenze a GRSciColl, seguite le istruzioni riportate quì sotto:

La maniera consigliata e più dichiarativa possibile di collegare i dati a istituzioni o collezioni su GRSciColl, è quella di utilizzare il loro URL completo. Per esempio, quando si usa Darwin Core:
* dwc:institutionID: https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381
* dwc:collectionID: https://www.gbif.org/grscicoll/collection/772f9e37-4643-452b-82b4-a06550283096

Inoltre, è possibile utilizzare ulteriori identificatori associati. Consultate questa voce del blog per ulteriori dettagli.

[link agli eventi ](https://data-blog.gbif.org/post/grscicoll-flags/){: .button .is-primary}
