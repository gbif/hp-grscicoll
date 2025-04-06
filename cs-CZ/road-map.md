---
permalink: /cs-CZ/road-map
lang-ref: road-map
title: GRSciColl 2025 road mapa
description: |
  Tato road mapa navazuje na [road mapu 2023/2024](https://github.com/gbif/registry/blob/dev/roadmap-grscicoll-2023-2024.md).
background: "{{ site.data.images.pandeleteius.src }}"
imageLicense: "{{ site.data.images.pandeleteius.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## 1.   Pokračovat ve spolupráci s komunitou a stávajícími platformami s cílem aktualizovat a rozšiřovat údaje a zlepšit interoperabilitu

Naším cílem je i nadále podporovat naši komunitu editorů, školit a přijímat nové editory a spolupracovat s dalšími platformami pro uchovávání dat (např. CETAF a ALA) na zlepšování dat dostupných v GRSciColl.

Některé práce se stávajícími platformami mohou zahrnovat:
- Import identifikátorů pro usnadnění interoperability,
- Nastavení připojení, aby se externí platforma mohla stát hlavním zdrojem pro záznamy GRSciColl,
- Pomoc s hromadným importem a aktualizací dat GRSciColl na základě těchto zdrojů.

## 2.   Vytvoření a spuštění školicího modulu GRSciColl pro editory

Sekretariát GBIF ve spolupráci s naší komunitou připravuje školicí modul pro editory GRSciColl. Cílem tohoto modulu je pokrýt vše, co může editor národního GRSciCollu potřebovat ke kurátorství a úpravám obsahu GRSciCollu.

Cílem je uspořádat v roce 2025 alespoň jedno online školení.

Rovněž bychom poskytli podporu všem zájemcům o pořádání školení nebo kurátorských sezení GRSciColl založených na obsahu modulu.

## 3.   Zlepšení vyhledatelnosti a zastoupení sbírek podle témat

Velká část obsahu GRSciColl není standardizovaná a nachází se v různých polích volného textu. Například mnoho entomologických sbírek lze nalézt pouze pomocí kombinace klíčových slov „entomologie“ a „hmyz“ ve volném textovém vyhledávání.

S pomocí příslušných komunit bychom chtěli identifikovat sbírky, které patří k definovaným oborům a tématům, a umožnit jejich vyhledávání přidáním relevantních deskriptorů sbírek. Příkladem takových sbírek jsou sbírky entomologické, mammalogické, fykologické a ornitologické.

Jednou z možností, jak zlepšit zastoupení těchto sbírek, je extrahovat sbírky uvedené v publikacích, jako je tato: https://doi.org/10.1643/ASIHCODONS2020.

Současně s touto prací bychom implementovali slovník pro termín Latimer Core objectClassificationName nejspíše na základě témat vyvinutých společností DISSCO (viz také toto téma na GitHubu: https://github.com/gbif/vocabulary/issues/157).

## 4.   Usnadnění propojení literatury s GRSciColl

Collections are often cited in publications but not always in a standardized manner. It might later be difficult to link a collection to its citation.

We will work with the community and journals, when possible, to agree on best practice for citation of collections. The goal is to facilitate citing a collection and linking specimens coming from PLAZI processed publications to GRSciColl.

A second aspect of this work will be to set up guidelines for institutions who wish to share bibliographic references and citations of their collections on GRSciColl.

