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

## Jaký je rozdíl mezi vydavateli GBIF a institucemi GRSciColl?

GRSciColl vznikl nezávisle na GBIF, má [svou vlastní historii](/about#data-history). Mnoho datových sad publikovaných na GBIF obsahuje záznamy o exemplářích, které patří do sbírek registrovaných v GRSciColl. Obsah GBIF a GRSciColl se může překrývat. Viz [otázka výše](/faq#what-is-the-difference-between-gbif-datasets-and-grscicoll-collections). Existuje však několik rozdílů:
* Vydavatelé GBIF jsou registrované organizace, které aktivně sdílejí data na GBIF. Ke sdílení datových sad na GBIF používají [publikační nástroje](https://data-blog.gbif.org/post/installations-and-hosting-solutions-explained/). Někteří vydavatelé jsou muzea a herbáře, ale jiní jsou občanské vědecké iniciativy, časopisy nebo výzkumná zařízení, která mohou sdílet pouze pozorování, popisy taxonů nebo data získaná z DNA.
* Instituce GRSciColl byly zaregistrovány, protože je známo, že vlastní fyzické vědecké sbírky. Záznamy o institucích GRSciColl mohou přidávat editoři GRSciColl (na základě informací nalezených v publikacích nebo online) nebo samotné instituce.

Velký administrativní subjekt, jako je univerzita, se může zaregistrovat jako vydavatel GBIF a popsat své katedry jako instituce GRSciColl. Alternativně mohou někteří vydavatelé GBIF odpovídat menším subjektům a mít v GRSciColl zastoupeny jako jednu položku.

Podívejte se, jak jsou výskyty publikované na GBIF propojeny se záznamy GRSciColl [zde](/connected-systems#occurrences-published-on-gbif). Podívejte se, jak lze datové sady GBIF propojit se záznamy sbírky GRSciColl [zde](/connected-systems#gbif-dataset-metadata-and-gbif-publisher-pages).

## Co jsou deskriptory sbírek v GRSciColl?

Deskriptory sbírek slouží ke sdílení strukturovaných informací o sbírkách. Mohou obsahovat důležité údaje o sbírkách a podsbírkách a také kvantitativní údaje, které nelze sdílet na stránkách sbírek (například počet typových exemplářů pro určitý taxon). Některé deskriptory kolekcí se používají k indexování kolekcí. To znamená, že zlepšují vyhledatelnost sbírky. Například sbírku spojenou s názvy druhů vážek najdou uživatelé, kteří v poli vědeckého názvu sbírky vyhledávají slovo "Odonata".

Deskriptory sbírek jsou důležité zejména pro sbírky, které nejsou plně digitalizovány a/nebo jejichž záznamy o exemplářích nejsou dostupné na GBIF.org.

Deskriptory sbírek se do GRSciColl nahrávají jako tabulky s příslušnými názvy a popisy.

* Každý řádek odpovídá skupině popisovaných exemplářů a každý sloupec je deskriptor.
* Pokud je to možné, měly by být tyto deskriptory mapovány na [Darwin Core](https://dwc.tdwg.org/terms/) a/nebo [Latimer core](https://ltc.tdwg.org) termíny.
* Tabulka může obsahovat informace o určitém aspektu nebo podmnožině sbírky. Tabulky mohou obsahovat překrývající se informace nebo různé popisy pro stejnou podskupinu exemplářů.

Jak sdílet deskriptory sbírek se dozvíte na naší [stránce Jak na to](/how-to).


## Pokyny pro úpravy

### Jak reprezentovat svou instituci a sbírky?

Mezi položkami sbírky ani mezi položkami instituce není žádná hierarchie. Instituce se rozhodnou, jakou úroveň granularity chtějí použít pro reprezentaci svých sbírek. Například jedna instituce může mít položku pro sbírku ptáků a druhou pro sbírku savců, zatímco jiná instituce bude mít pouze jednu položku pro svou sbírku obratlovců.

V případě pochybností se můžete řídit těmito praktickými pokyny:
* Proveďte jednu položku instituce pro každé fyzické umístění (kampus, budova, kde jsou sbírky umístěny).
* Pro každou skupinu exemplářů vytvořte jeden záznam o sbírce se stejným kontaktním místem (osoba, která může o sbírce říci více, případně zprostředkovat výpůjčku).

### Jaké informace mám vložit do GRSciColl?

Přestože je jen málo polí povinných, doporučujeme uvést co nejvíce informací. U institucí je důležité uvést název, kód a adresu (nebo alespoň zemi). U sbírek nezapomeňte přidat přidruženou instituci.

### Jaký by měl být kód sbírky/instituce?

Kódy nemusí být v GRSciColl jedinečné a jeden záznam může mít několik kódů. Kódy by měly odrážet to, co se používá v praxi (co je uvedeno na etiketách). Všimněte si, že kódy GRSciColl se používají k přiřazení výskytů publikovaných na GBIF k záznamům GRSciColl.

### Jaké by měly být identifikátory mé sbírky/instituce?

Záznam může být spojen s externími identifikátory, jako jsou: wikidata, ROR, DOI atd. Identifikátory mohou k záznamům přidávat pouze editoři. Všimněte si, že identifikátory GRSciColl se používají k přiřazení výskytů publikovaných v GBIF k záznamům GRSciColl.

#### V jakém formátu má být můj identifikátor ROR?

Preferovanou formou identifikátoru ROR je celá adresa URL: https://ror.org/02mhbdp94. Viz [tento ROR FAQ](https://ror.org/about/faqs/#what-is-a-ror-identifier).

### Jak zacházet s duplicitami

Pokud v GRSciColl najdete duplicitní záznamy, můžete s nimi naložit dvěma způsoby.
* Možná budete chtít ponechat oba záznamy a jeden označit jako `neaktivní` zrušením zaškrtnutí políčka `aktivní`.
* Možná budete chtít sloučit položky pomocí rozhraní pro úpravy.

Sloučením záznamů se jeden z nich odstraní a všechny identifikátory, kódy a sbírky (pokud se jedná o instituci) se přenesou do zbývajícího záznamu. Kromě toho se informace z odstraněného záznamu přenesou do prázdných polí ve zbývajícím záznamu. Z důvodu zachování identifikátorů doporučujeme položky spíše sloučit než odstranit. Pokud tedy někdo odkáže na jeden ze "starých" identifikátorů, bude přesměrován na zbývající položku.

## Rozhraní pro úpravy - Technické otázky

Editační rozhraní GRSciColl je umístěno v [Registru GBIF](https://registry.gbif.org). Můžete k němu přistupovat z libovolné stránky instituce nebo sbírky kliknutím na tlačítko `Upravit`. Pro navrhování změn nepotřebujete účet. Pro přímé aktualizace a přidávání nebo odstraňování primárních zdrojů a identifikátorů je třeba, abyste [byli editorem](/how-to#become-editor).

### Moje sbírka je datová sada na GBIF: jak vytvořit metadata datové sady GBIF a stránky vydavatele GBIF jako primární zdroje pro GRSciColl

1. Přihlaste se do rozhraní registru, musíte být editorem položky GRSciColl, se kterou chcete pracovat.
2. Klikněte na kartu `Hlavní zdroj`.
3. Klikněte na tlačítko `Vytvořit nový` (v pravém horním rohu).
4. Vyberte typ zdroje (`dataset GBIF`, pokud pracujete se sbírkou, nebo `vydavatel GBIF`, pokud se jedná o instituci).
5. Přidejte UUID datové sady nebo vydavatele, který chcete použít. UUID lze nalézt v URL adrese datové sady nebo vydavatele. Například UUID pro `https://www.gbif.org/dataset/b275a4c1-9859-4f3c-8ead-d86dde820fbc` je `b275a4c1-9859-4f3c-8ead-d86dde820f`.
6. Klikněte na tlačítko `Vytvořit`.

### Jak upravovat položky připojené k externím zdrojům

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

Je možné použít i další související identifikátory. Další podrobnosti najdete v tomto příspěvku na blogu.

[Link occurrences](https://data-blog.gbif.org/post/grscicoll-flags/){: .button .is-primary}
