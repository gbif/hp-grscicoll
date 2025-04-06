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
- Pomožte s hromadným importem a aktualizací dat GRSciColl na základě těchto zdrojů.

## 2.   Vytvořte a spusťte školicí modul GRSciColl pro editory

Sekretariát GBIF ve spolupráci s naší komunitou připravuje školicí modul pro editory GRSciColl. Cílem tohoto modulu je pokrýt vše, co může editor národního GRSciCollu potřebovat ke kurátorství a úpravám obsahu GRSciCollu.

Cílem je uspořádat v roce 2025 alespoň jedno online školení.

We would also provide support for anyone interested in organizing training or GRSciColl curation sessions based on the module content.

## 3.   Improve discoverability and representation of collections by topic

A lot of the GRSciColl content is not standardized and lives in various free text fields. For example, many entomology collections can only be found by using a combination of keywords like “entomology” and “insect” in free text searches.

With the help of the relevant communities, we would like to identify collections that belong to defined disciplines and topics and make them discoverable by adding relevant collection descriptors. Examples of such collections would be entomology, mammalogy, phycology and ornithology collections.

One avenue to explore to improve the representation of these collections is to extract collections mentioned in publications such as this one: https://doi.org/10.1643/ASIHCODONS2020.

Alongside this work, we would implement a vocabulary for the Latimer Core term objectClassificationName most likely based on the topics developed by DISSCO (see also this GitHub issue: https://github.com/gbif/vocabulary/issues/157).

## 4.   Facilitate linking literature to GRSciColl

Collections are often cited in publications but not always in a standardized manner. It might later be difficult to link a collection to its citation.

We will work with the community and journals, when possible, to agree on best practice for citation of collections. The goal is to facilitate citing a collection and linking specimens coming from PLAZI processed publications to GRSciColl.

A second aspect of this work will be to set up guidelines for institutions who wish to share bibliographic references and citations of their collections on GRSciColl.

