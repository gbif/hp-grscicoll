---
permalink: /cs-CZ/connected-systems
lang-ref: connected-systems
title: Propojené systémy
description: |
  GRSciColl podporuje interoperabilitu a spolupracuje s řadou dalších systémů.
background: "{{ site.data.images.echinometra.src }}"
imageLicense: "{{ site.data.images.echinometra.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Identifikátory

Identifikátory a referenční kódy jsou nezbytné pro zajištění interoperability.

Každá položka GRSciColl má univerzální jedinečný identifikátor (UUID) a související adresy URL. [Editoři](/how-to#become-editor) mohou ke svým sbírkám a záznamům institucí přidávat také řadu externích identifikátorů. V současné době jsou k dispozici tyto typy identifikátorů:

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

Kromě příspěvků editorů GRSciColl jsou identifikátory některých institucí importovány automaticky nebo poloautomaticky.
* Všechny záznamy připojené k Index Herbariorum mají identifikátor Index Herbariorum. Podívejte se [jak funguje synchronizace s Index Herbariorum](/o#index-herbariorum).
* Mnoho identifikátorů `CITES` pochází také z Index Herbariorum. Podívejte se [jak funguje synchronizace s Index Herbariorum](/connected-systems#index-herbariorum).
* Spárovali jsme co nejvíce záznamů institucí GRSciColl s [Wikidata](https://www.wikidata.org/) pomocí jejich [OpenRefine](https://openrefine.org) rezolučního nástroje a importovali identifikátory wikidat.
* Spárovali jsme co nejvíce záznamů institucí GRSciColl s [Registrem výzkumných organizací (ROR)](https://ror.org) pomocí jejich [OpenRefine](https://openrefine.org) nástroje pro rozlišení a importovali identifikátory ROR.
* Spolupracujeme s týmem [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections) na importu jejich identifikátorů do GRSciColl.

Uživatelé mohou vyhledávat identifikátory sbírek a institucí jak na těchto webových stránkách, tak prostřednictvím [naší služby vyhledávání API](https://www.gbif.org/developer/registry#lookup).

Identifikátory se rovněž používají k propojení výskytů souvisejících s exempláři publikovanými v GBIF se záznamy v GRSciColl.

## Výskyty zveřejněné na GBIF

Při zpracování a interpretaci nově publikovaných výskytů se GBIF snaží přiřadit záznamy, které obsahují hodnoty pro některý z následujících termínů, k odpovídajícímu záznamu GRSciColl prostřednictvím [vyhledávací služby GRSciColl](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

Pokud například výskyt odkazuje na kód instituce `RBINS` a identifikátor instituce `https://ror.org/02y22ws83`, budou propojeny s <a href="/institution/c2bfdeef-9c03-435e-8465-c483dadd6995>Belgickým královským ústavem přírodních věd</a>. Výskyty přiřazené k záznamům GRSciColl se používají při generování informačních panelů a metrik, jak je uvedeno v tomto příkladu.

V případech, kdy existuje více než jedna možná shoda, používá systém k výběru shody GRSciColl zemi vydavatele. [Zjistěte více o tom, jak propojit výskyty GBIF s GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## Data GRSciColl pocházející z jiných zdrojů

Záznamy o instituci a sbírce GRSciColl mohou mít externí primární zdroje informací, které pocházejí z jiného registru nebo webové stránky. Úpravy těchto primárních zdrojů vyvolávají aktualizace odpovídajících záznamů v databázi GRSciColl, čímž odpadá nutnost spravovat informace ve více registrech.

V současné době jsou dvěma možnými zdroji informací pro položky GRSciColl [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) a [GBIF](https://www.gbif.org) datová sada a metadata vydavatele. Data pro položky čerpané z těchto zdrojů by měly být upraveny u zdroje. V praxi editační rozhraní GRSciColl neumožňuje uživatelům aktualizovat pole, která používají informace z externího zdroje.

### Rejstřík herbářů

Každý týden se GRSciColl synchronizuje s API [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), aktualizuje informace o stávajících položkách, jejichž zdrojem je Index Herbariorum, a podle potřeby vytváří nové položky.

Ve výchozím nastavení odpovídá jedna položka Rejstříku Herbářů položce instituce i položce sbírky v GRSciColl, protože herbáře jsou často botanickými sbírkami v rámci jiných institucí. Více informací o zdůvodnění si můžete přečíst v [tomto issue na GitHubu](https://github.com/gbif/registry/issues/167). Proces synchronizace může generovat duplicitní záznamy institucí, pokud se v jedné instituci nachází několik herbářových sbírek. Viz naše [stránka s návodem](/how-to#how-to-edit-a-grscicoll-collection-or-institution) a [FAQs](/faq/#how-to-handle-duplicates), kde najdete návrhy, jak tyto případy řešit.

Editoři mohou odpojit záznamy institucí od Index Herbariorum a zvolit si editaci instituce přímo v editačním rozhraní GRSciColl, jak je popsáno v [toto FAQ](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

### Metadata datové sady GBIF a stránky vydavatele GBIF

Metadata datových sad zveřejněných na GBIF lze použít jako primární zdroj pro záznamy sbírek v GRSciColl. Na rozdíl od synchronizace Index Herbariorum neexistuje žádný týdenní plán a nové záznamy se nevytvářejí automaticky. Místo toho musí editoři propojit kolekce GRSciColl se svými zdroji ručně. Důvodem je skutečnost, že rozsah GBIF zahrnuje údaje mimo rozsah GRSciColl. Všimněte si, že existuje také možnost vytvořit položku sbírky z datové sady. Podívejte se na naši [stránku s návodem](/how-to#how-to-use-the-grscicoll-editing-interface). Při aktualizaci metadat datové sady se okamžitě aktualizuje odpovídající položka sbírky.

Podobně lze informace o vydavateli dostupné na GBIF použít jako primární zdroj pro záznamy o institucích v GRSciColl.

## GRSciColl jako obsah pro jiné webové stránky

[GRSciColl API](/api) umožňuje ostatním aplikacím programový přístup k datům GRSciColl. To znamená, že ostatní webové stránky mohou zobrazovat obsah GRSciColl, který zůstává centrálně spravovaný. Kdokoli může použít rozhraní API a začlenit data GRSciColl do svých systémů. Níže jsou uvedeny dva zdokumentované příklady.

### iDigBio

Data zobrazená na [webové stránce iDigBio Collections](https://www.idigbio.org/portal/collections) jsou udržována v GRSciColl. iDigBio je součástí našeho týmu editorů a zpracovává návrhy aktualizací pro americké instituce.

### Hostované portály GBIF

Současné webové stránky GRSciColl využívají rámec [GBIF hosted portal](https://www.gbif.org/hosted-portals) a jakýkoli portál hostovaný GBIF může zobrazovat data z GRSciColl - viz například [UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 
