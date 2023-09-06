---
lang-ref: about
title: What is it and how to contribute
description: |
    The Global Registry of Scientific Collections (GRSciColl) is a comprehensive, community-curated clearing house of information on scientific collections, which builds on previous efforts developed by the Consortium of the Barcode of Life (CBOL).
    
background:  "{{ site.data.images.kanakia.src }}"
imageLicense: "{{ site.data.images.kanakia.caption }}"
height: 70vh
# layout: documentation
# sideNavigation: about.about
# composition: # you can extend the documentation layout with a custom composition
#  - type: postHeader
#  - type: pageMarkdown
toc: true
---

## What is the Global Registry of Scientific Collections?

The Global Registry of Scientific Collections (GRSciColl), is a comprehensive and community-curated clearinghouse of collection information hosted in the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org) registry. It serves as a valuable resource for researchers, institutions and the scientific community at large. GRSciColl provides information about physical scientific collections, including their content, location, contacts, and associated institutions. It also serves as a reference for institution and collection codes and identifiers.

The information in GRSciColl is maintained by a community of editors, including representatives from registered institutions and national editors. The suggestion system enables anyone to contribute by updating, adding, or merging records, which are then reviewed by relevant individuals. GRSciColl also synchronizes regularly with external sources such as Index Herbariorum, ensuring up-to-date and reliable information.

## How to get started

You can start looking for relevant institutions [here](/institution/search), collections [here](/collection/search) and digitized specimens [here](/specimen/search).

## History of the data

The GRSciColl data has been built over the years. A lot of the institution and collections information has been entered by a dedicated team of curators and members of the community. Some data comes from external sources such as [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), the [Integrated Digitized Biocollections (iDigBio)](https://www.idigbio.org) and national registries.

### How it all started

GRSciColl was originally developed by the [Consortium of the Barcode of Life (CBOL)](https://www.gbif.org/participant/287) and hosted by [the Smithsonian Institution](https://www.si.edu) until 2018.

> Schindel DE, Miller SE, Trizna MG, Graham E, Crane AE. The Global Registry of Biodiversity Repositories: A Call for Community Curation. Biodivers Data J. 2016 Aug 26;(4):e10293. doi: 10.3897/BDJ.4.e10293. PMID: 27660523; PMCID: PMC5018115.

In 2018, GRSciColl was adopted by the Global Biodiversity Information Facility (GBIF) registry (see [this news item](https://www.gbif.org/news/5kyAslpqTVxYqZTwYn1cub/gbif-provides-new-home-for-the-global-registry-of-scientific-collections).

The following years,
* An [API was developed for GRSciColl](/api)
* GBIF worked with [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) to set up weekly synchronizations of the information in GRSciColl.
* Collection information was imported from [iDigBio](https://www.idigbio.org).
* The linking of specimen-related occurrences published on GBIF to GRSciColl entries was enabled.
* The metadata of datasets published on GBIF became a possible source of information for collections.

### Where are we now

GRSciColl has now a suggestion system as well as editors which review those suggestions. This system enables community curation, anyone can contribute by updating, adding, or merging records.
We also work with national organizations to import of data from their collection registries in GRSciColl.

Subset of GRSciColl can be part of [GBIF-Hosted Portals](https://www.gbif.org/hosted-portals). See for example [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org).

### What is next

Please check our current roadmap here.

You can ask questions and contribute to our work by subscribing to our mailing list or check our forum. Please check our [contact page](/contact).

## GRSciColl and other systems

As mentioned above, GRSciColl aims to improve interoperability and interacts with a number of other systems.

### Identifiers

Each GRSciColl entry has a Universally Unique IDentifier (UUID) and associated URLs. [Editors](/how-to#become-editor) can add a number of external identifiers to their collections and institution entries.
Here is the list of identifier types available:

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

### Occurrences published on GBIF

The GBIF interprets every newly published occurrence. If this occurrence has a value for any of the following terms, the interpretation will attempt to link it to a GRSciColl entry by using the GRSciColl lookup service:
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

The [GRSciColl lookup service](https://www.gbif.org/developer/registry#lookup) attempts to find which GRSciColl entries match the codes and identifiers given as input. During the occurrence interpretation, the system will use the publisher country to help choose a match in GRSciColl in cases where there are more than one candidate.

For example, if an occurrence references the institution code `RBINS` and the institution identifier `https://ror.org/02y22ws83`, they will be linked to the [Royal Belgian Institute of Natural Sciences](http://grscicoll.org/institution/royal-belgian-institute-natural-sciences).
You can learn more on how to link GBIF occurrences to GRSciColl [here](/how-to#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

Occurrences linked to GRSciColl are used to generate some of the dashboards and metrics on the GRSciColl website.

### GRSciColl data coming from other sources

The GRSciColl institution and collection entries can have an external primary source of information. In other words, the information available in GRSciColl can come from another registry or website. Every time the primary source is edited, the corresponding GRSciColl entry is also updated.
The goal is to avoid maintaining the same information in multiple registries.

Currently, the two possible sources of information for GRSciColl entries are [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) and the [GBIF](https://www.gbif.org) dataset and publisher metadata.
When an entry is connected to one of these sources, the data should be edited at the source. In practise, the editing interface doesn't allow updating the fields where the information comes from an external source.

#### Index Herbariorum

Every week, GRSciColl synchronizes with the [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) API. This means that it will use the information accessible via that API to update exsting entries whose sources are Index Herbariorum as well as create new entries.

By default, one Index Herbariorum entry correspond to an institution entry as well as a collection entry in GRSciColl. This is because Herbaria are often botany collections within other institutions. You can read more about the rationale in [this GitHub issue](https://github.com/gbif/registry/issues/167).
The synchronization process might generate duplicate institution entries as several herbaria can belong to the same university. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface) to handle these cases.

Editors can disconnect institutions entries from Index Herbariorum and choose to edit the institution directly in the GRSciColl editing interface. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface).

#### GBIF dataset metadata and GBIF publisher pages

The metadata of datasets published on GBIF can be used as primary sources for collection entries in GRSciColl. Unlike with the Index Herbariorum synchronization, there is no weekly schedule and new entries aren't automatically created.
Instead, editors must link GRSciColl collections to their sources manually. This is because the scope of GBIF includes data beyond the scope of GRSciColl. Note that there is also an option to create a collection entry from a dataset. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface).
When the metadata of a dataset is updated, the corresponding collection entry is updated immediately.

Similarly, the publisher information available on GBIF can be used as primary source for institution entries in GRSciColl.

### GRSciColl as content for other websites

The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl conten, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples.

#### iDigBio

The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions.

#### GBIF Hosted portals

The current GRSciColl website is in fact one of the [GBIF Hosted Portals](https://www.gbif.org/hosted-portals). Any GBIF Hosted portal can display the GRSciColl data. See for example [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 

## How to edit or add collections and institutions to GRSciColl

To learn how you can contribute to the GRSciColl content, see our how-to page.

[How-to](/how-to){: .button .is-primary}
