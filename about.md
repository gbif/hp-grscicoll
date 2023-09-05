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

You can start looking for relevant institutions [here](/institution), collections [here](/collection) and digitized specimens (here)[/specimens].

## History of the data

The GRSciColl content has been built over the years. A lot of the institution and collections information has been entered by a dedicated team of curators and members of the community. Some data comes from external sources such as [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), the [Integrated Digitized Biocollections (iDigBio)](https://www.idigbio.org) and national registries.

### How it all started

GRSciColl was originally developed by the [Consortium of the Barcode of Life (CBOL)](https://www.gbif.org/participant/287) and hosted by [the Smithsonian Institution](https://www.si.edu) until 2018.

> Schindel DE, Miller SE, Trizna MG, Graham E, Crane AE. The Global Registry of Biodiversity Repositories: A Call for Community Curation. Biodivers Data J. 2016 Aug 26;(4):e10293. doi: 10.3897/BDJ.4.e10293. PMID: 27660523; PMCID: PMC5018115.

In 2018, GRSciColl was adopted by the Global Biodiversity Information Facility (GBIF) registry (see [this news item](https://www.gbif.org/news/5kyAslpqTVxYqZTwYn1cub/gbif-provides-new-home-for-the-global-registry-of-scientific-collections).

The following years,
* An [API was developed for GRSciColl](https://www.gbif.org/developer/registry#collections)
* GBIF worked with [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) to set up weekly synchronizations of the information in GRSciColl.
* Collection information was imported from [iDigBio](https://www.idigbio.org).
* The linking of specimen-related occurrences published on GBIF to GRSciColl entries was enabled.
* The metadata of datasets published on GBIF became a possible source of information for collections.

### Where are we now

GRSciColl has now a suggestion system as well as editors which review those suggestions. This system enables community curation, anyone can contribute by updating, adding, or merging records.
We also work with national organizations to import of data from their collection registries in GRSciColl.

Subset of GRSciColl can be part of [GBIF-Hosted Portals](https://www.gbif.org/hosted-portals). See for example [the UK Natural Sciences Collections Portal](https://data.dissco-uk.org)

### What is next

Please check our current roadmap here.

You can ask questions and contribute to our work by subscribing to our mailing list or check our forum. Please check our [contact page](/contact).

## GRSciColl and other systems

As mentioned above, GRSciColl aims to improve interoperability and interacts with a number of other systems.

### Identifiers

Each GRSciColl entry has a Universally Unique IDentifier (UUID) and associated URLs. In addition to that, editors can add a number of external identifiers to their collections and institution entries.
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



### Occurrences published on GBIF

### GRSciColl content coming from other sources

#### Index Herbariorum

#### GBIF dataset metadata and GBIF publisher pages

### GRSciColl as content for other websites

#### iDigBio

#### GBIF Hosted portals


## How to edit a GRSciColl collection or institution

There are three ways to update information on GRSciColl:
* you can suggest a change
* you can become an editor
* you can import data

See [our How-to](/how-to#how-to-edit-a-grscicoll-collection-or-institution) page for more details.
