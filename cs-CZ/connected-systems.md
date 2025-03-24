---
permalink: /connected-systems
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
