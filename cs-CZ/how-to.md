---
permalink: /cs-CZ/how-to
lang-ref: how-to
title: Jak na to
description: |
  Jak se pohybovat v celosvětovém registru vědeckých sbírek a aktualizovat jeho obsah
background: "{{ site.data.images.pagurus.src }}"
imageLicense: "{{ site.data.images.pagurus.caption }}"
height: 60vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Jak přidat sbírku nebo instituci do GRSciColl

Zde můžete navrhnout nebo přidat sbírku či instituci do GRSciColl:

[Přidat novou instituci](https://registry.gbif.org/institution/create){: .button .is-primary}

[Přidat novou sbírku](https://registry.gbif.org/collection/create){: .button .is-primary}

Při vytváření nového záznamu v GRSciColl je povinných jen velmi málo polí. Velmi bychom však ocenili, kdybyste mohli uvést adresu vytvořeného záznamu (zejména zemi).

Viz také tento krátký videonávod:
<iframe title="vimeo-player" src="https://player.vimeo.com/video/649977782?h=fb1d926798" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

Pokud nemáte ve své zemi přístup na Vimeo, [zde](https://www.youtube.com/watch?v=R6ftJ61oOn4) je video na YouTube.

## Jak upravit sbírku nebo instituci GRSciColl

Informace na GRSciColl lze aktualizovat třemi způsoby:
* můžete navrhnout změnu
* můžete se stát editorem
* můžete importovat data

Viz také tento krátký videonávod:
<iframe title="vimeo-player" src="https://player.vimeo.com/video/649977825?h=a0068cfcd8" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

Pokud nemáte ve své zemi přístup na Vimeo, [zde](https://www.youtube.com/watch?v=rgMQK9qFVfs) je video na YouTube

### Navržení změny

Kdokoli může navrhnout změny kliknutím na libovolnou položku GRSciColl:
* Klikněte na `Upravit`
* Klikněte na přepínací tlačítko `Navrhnout`
* Podejte svůj návrh a zanechte svou e-mailovou adresu a komentář

Můžete také navrhnout přidání nových záznamů, sloučení duplicit a přeměnu záznamů institucí na sbírky.

Návrh přezkoumají institucionální editoři, editoři jednotlivých zemí nebo zaměstnanci GBIF v závislosti na upravovaném záznamu.

### Staňte se editorem

V GRSciColl existují dva typy editorů: editoři a mediátoři. Oba mohou upravovat data v GRSciColl a kontrolovat změny, ale pouze zprostředkovatelé mohou mazat, slučovat a transformovat záznamy. Editor (nebo mediátor) může mít oprávnění k úpravám:
* jedné nebo několika sbírek
* jedna nebo více institucí (a jejich sbírek)
* jedné nebo několika zemí (a jejich přidružených institucí a sbírek)

Abyste se mohli stát editorem GRSciColl, musíte mít [uživatelský účet GBIF](https://www.gbif.org/user/profile) spojený s vaší institucionální e-mailovou adresou. Pošlete nám prosím e-mail na adresu scientific-collections@gbif.org a oznamte nám, že se chcete stát editorem.

### Import dat

Rozhraní [GBIF Collections API](https://www.gbif.org/developer/registry#collections) umožňuje úpravy bez použití webového rozhraní. API má také experimentální funkci pro nahrávání dávek sbírek a institucí. Viz dokumentace [zde](https://github.com/gbif/registry/blob/dev/docs/grscicoll_batches.md).

Pokud máte zájem používat API pro editaci GRSciColl, systém oprávnění a požadavky jsou stejné jako v případě, že se chcete stát editorem.

## Jak sdílet deskriptory sbírky

Pracujeme na zlepšení dokumentace. Mezitím se podívejte na tento návod: https://data-blog.gbif.org/post/grscicoll-collection-descriptors/
