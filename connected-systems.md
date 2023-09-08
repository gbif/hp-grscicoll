---
lang-ref: connected-systems
title: Connected systems
description: |
    The Global Registry of Scientific Collections (GRSciColl) aims to improve interoperability and interacts with a number of other systems.
    
background:  "{{ site.data.images.echinometra.src }}"
imageLicense: "{{ site.data.images.echinometra.caption }}"
height: 70vh
# layout: documentation
# sideNavigation: about.about
# composition: # you can extend the documentation layout with a custom composition
#  - type: postHeader
#  - type: pageMarkdown
toc: true
---

## Identifiers

Identifiers and reference codes are essential to enable interoperbility.

Each GRSciColl entry has a Universally Unique IDentifier (UUID) and associated URLs. [Editors](/how-to#become-editor) can also add a number of external identifiers to their collections and institution entries.
Here is current the list of identifier types available:

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


In addition to the work of the GRSciCOll editors, a number of identifiers were imported automatically or semi-automatically for a number of institutions.
* All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum).
* Many `CITES` identifiers also come from Index Herbariorum. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum).
* We matched as many GRSciColl institution entries as possible with [Wikidata](https://www.wikidata.org/) with their [OpenRefine](https://openrefine.org) Resolution tool and imported the wikidata identifiers.
* We matched as many GRSciColl institution entries as possible with the [Research Organization Registry (ROR)](https://ror.org) their [OpenRefine](https://openrefine.org) Resolution tool and imported the ROR identifiers.
* We are working with the [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections) team to import their identifiers in GRSciColl. We already imported the identifiers for a number of institutions.

Institutions and collections can be searched by identifiers both on our website and with [our API lookup servcie](https://www.gbif.org/developer/registry#lookup).

Identifiers are also used to link specimen-related occurrences published on GBIF to GRSciColl entries.

## Occurrences published on GBIF

The GBIF interprets every newly published occurrence. If this occurrence has a value for any of the following terms, the interpretation will attempt to link it to a GRSciColl entry by using the GRSciColl lookup service:
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

The [GRSciColl lookup service](https://www.gbif.org/developer/registry#lookup) attempts to find which GRSciColl entries match the codes and identifiers given as input. During the occurrence interpretation, the system will use the publisher country to help choose a match in GRSciColl in cases where there are more than one candidate.

For example, if an occurrence references the institution code `RBINS` and the institution identifier `https://ror.org/02y22ws83`, they will be linked to the [Royal Belgian Institute of Natural Sciences](http://grscicoll.org/institution/royal-belgian-institute-natural-sciences).
You can learn more on how to link GBIF occurrences to GRSciColl [here](/how-to#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

Occurrences linked to GRSciColl are used to generate some of the dashboards and metrics on the GRSciColl website.

## GRSciColl data coming from other sources

The GRSciColl institution and collection entries can have an external primary source of information. In other words, the information available in GRSciColl can come from another registry or website. Every time the primary source is edited, the corresponding GRSciColl entry is also updated.
The goal is to avoid maintaining the same information in multiple registries.

Currently, the two possible sources of information for GRSciColl entries are [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) and the [GBIF](https://www.gbif.org) dataset and publisher metadata.
When an entry is connected to one of these sources, the data should be edited at the source. In practise, the editing interface doesn't allow updating the fields where the information comes from an external source.

### Index Herbariorum

Every week, GRSciColl synchronizes with the [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) API. This means that it will use the information accessible via that API to update exsting entries whose sources are Index Herbariorum as well as create new entries.

By default, one Index Herbariorum entry correspond to an institution entry as well as a collection entry in GRSciColl. This is because Herbaria are often botany collections within other institutions. You can read more about the rationale in [this GitHub issue](https://github.com/gbif/registry/issues/167).
The synchronization process might generate duplicate institution entries as several herbaria can belong to the same university. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface) to handle these cases.

Editors can disconnect institutions entries from Index Herbariorum and choose to edit the institution directly in the GRSciColl editing interface. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface).

### GBIF dataset metadata and GBIF publisher pages

The metadata of datasets published on GBIF can be used as primary sources for collection entries in GRSciColl. Unlike with the Index Herbariorum synchronization, there is no weekly schedule and new entries aren't automatically created.
Instead, editors must link GRSciColl collections to their sources manually. This is because the scope of GBIF includes data beyond the scope of GRSciColl. Note that there is also an option to create a collection entry from a dataset. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface).
When the metadata of a dataset is updated, the corresponding collection entry is updated immediately.

Similarly, the publisher information available on GBIF can be used as primary source for institution entries in GRSciColl.

## GRSciColl as content for other websites

The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl conten, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples.

### iDigBio

The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions.

### GBIF Hosted portals

The current GRSciColl website is in fact one of the [GBIF Hosted Portals](https://www.gbif.org/hosted-portals). Any GBIF Hosted portal can display the GRSciColl data. See for example [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 
