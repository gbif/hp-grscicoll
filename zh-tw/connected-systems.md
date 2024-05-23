---
permalink: /connected-systems
lang-ref: connected-systems
title: Connected systems
description: |
  GRSciColl supports interoperability and interacts with a number of other systems.
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

## Identifiers

Identifiers and reference codes are essential to enable interoperbility.

Each GRSciColl entry has a Universally Unique IDentifier (UUID) and associated URLs. [Editors](/how-to#become-editor) can also add a number of external identifiers to their collections and institution entries. Currently available identifier types include: [Editors](/how-to#become-editor) can also add a number of external identifiers to their collections and institution entries. Currently available identifier types include: [Editors](/how-to#become-editor) can also add a number of external identifiers to their collections and institution entries. Currently available identifier types include: [Editors](/how-to#become-editor) can also add a number of external identifiers to their collections and institution entries. Currently available identifier types include: [Editors](/how-to#become-editor) can also add a number of external identifiers to their collections and institution entries. Currently available identifier types include:

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

In addition to contributions of the GRSciColl editors, identifiers for some institutions are imported automatically or semi-automatically.
* All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). All the entries connected to Index Herbariorum are given an Index Herbariorum identifier. See [how the syncronization with Index Herbariorum works](/about#index-herbariorum). See [how the syncronization with Index Herbariorum works](/about#index-herbariorum).
* Many `CITES` identifiers also come from Index Herbariorum. See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum). Many `CITES` identifiers also come from Index Herbariorum. See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum). See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum). Many `CITES` identifiers also come from Index Herbariorum. See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum). See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum). Many `CITES` identifiers also come from Index Herbariorum. See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum). See [how the syncronization with Index Herbariorum works](/connected-systems#index-herbariorum).
* We matched as many GRSciColl institution entries as possible with [Wikidata](https://www.wikidata.org/) with their [OpenRefine](https://openrefine.org) Resolution tool and imported the wikidata identifiers.
* We matched as many GRSciColl institution entries as possible with the [Research Organization Registry (ROR)](https://ror.org) using their [OpenRefine](https://openrefine.org) Resolution tool and imported the ROR identifiers.
* We are working with the [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections) team to import their identifiers in GRSciColl.

Users can search identifiers for collections and institutions both on this website and through [our API lookup servcie](https://www.gbif.org/developer/registry#lookup).

Identifiers are also used to link specimen-related occurrences published on GBIF to GRSciColl entries.

## Occurrences published on GBIF

While processing and interpreting newly published occurrences, GBIF seeks to match records that include values for any of the following terms to the corresponding GRSciColl entry through the [GRSciColl lookup service](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

For example, if an occurrence references the institution code `RBINS` and the institution identifier `https://ror.org/02y22ws83`, they will be linked to the [Royal Belgian Institute of Natural Sciences](/institution/c2bfdeef-9c03-435e-8465-c483dadd6995). Occurrences matched to GRSciColl entries are used in generating dashboards and metrics as shown in this example. Occurrences matched to GRSciColl entries are used in generating dashboards and metrics as shown in this example. Occurrences matched to GRSciColl entries are used in generating dashboards and metrics as shown in this example. Occurrences matched to GRSciColl entries are used in generating dashboards and metrics as shown in this example. Occurrences matched to GRSciColl entries are used in generating dashboards and metrics as shown in this example.

In cases with more than one possible match, the system uses the publisher country to help select a GRSciColl match. [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries). In cases with more than one possible match, the system uses the publisher country to help select a GRSciColl match. [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries). In cases with more than one possible match, the system uses the publisher country to help select a GRSciColl match. [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries). In cases with more than one possible match, the system uses the publisher country to help select a GRSciColl match. [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries). In cases with more than one possible match, the system uses the publisher country to help select a GRSciColl match. [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries). [Learn more about how to link GBIF occurrences to GRSciColl](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## GRSciColl data coming from other sources

The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries. The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries. The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries. The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries. The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries.

Currently, the two possible sources of information for GRSciColl entries are [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) and the [GBIF](https://www.gbif.org) dataset and publisher metadata. Data for entries drawn from these sources should be edited at the source. In practice, GRSciColl's editing interface doesn't allow users to update fields that use information from an external source. Data for entries drawn from these sources should be edited at the source. In practice, GRSciColl's editing interface doesn't allow users to update fields that use information from an external source. Data for entries drawn from these sources should be edited at the source. In practice, GRSciColl's editing interface doesn't allow users to update fields that use information from an external source. Data for entries drawn from these sources should be edited at the source. In practice, GRSciColl's editing interface doesn't allow users to update fields that use information from an external source. Data for entries drawn from these sources should be edited at the source. In practice, GRSciColl's editing interface doesn't allow users to update fields that use information from an external source.

### Index Herbariorum

Every week, GRSciColl synchronizes with the [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) API, updating information for existing entries whose source is Index Herbariorum and creating new entries as needed.

By default, one Index Herbariorum entry corresponds to an institution entry as well as a collection entry in GRSciColl because herbaria are often botanical collections within other institutions. You can read more about the rationale in [this GitHub issue](https://github.com/gbif/registry/issues/167). The synchronization process can generate duplicate institution entries when a single institution is home to several herbaria collections. See our [how-to page](/how-to#how-to-edit-a-grscicoll-collection-or-institution) and [FAQs](/faq/#how-to-handle-duplicates) for suggestions on how to handle these cases. You can read more about the rationale in [this GitHub issue](https://github.com/gbif/registry/issues/167). The synchronization process can generate duplicate institution entries when a single institution is home to several herbaria collections. See our [how-to page](/how-to#how-to-edit-a-grscicoll-collection-or-institution) and [FAQs](/faq/#how-to-handle-duplicates) for suggestions on how to handle these cases.

Editors can disconnect institutions entries from Index Herbariorum and choose to edit the institution directly in the GRSciColl editing interface as described in [this FAQ](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

### GBIF dataset metadata and GBIF publisher pages

The metadata of datasets published on GBIF can be used as primary sources for collection entries in GRSciColl. Unlike with the Index Herbariorum synchronization, there is no weekly schedule and new entries aren't automatically created. Instead, editors must link GRSciColl collections to their sources manually. This is because the scope of GBIF includes data beyond the scope of GRSciColl. Note that there is also an option to create a collection entry from a dataset. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface). When the metadata of a dataset is updated, the corresponding collection entry is updated immediately. Unlike with the Index Herbariorum synchronization, there is no weekly schedule and new entries aren't automatically created. Instead, editors must link GRSciColl collections to their sources manually. This is because the scope of GBIF includes data beyond the scope of GRSciColl. Note that there is also an option to create a collection entry from a dataset. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface). When the metadata of a dataset is updated, the corresponding collection entry is updated immediately. Unlike with the Index Herbariorum synchronization, there is no weekly schedule and new entries aren't automatically created. Instead, editors must link GRSciColl collections to their sources manually. This is because the scope of GBIF includes data beyond the scope of GRSciColl. Note that there is also an option to create a collection entry from a dataset. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface). When the metadata of a dataset is updated, the corresponding collection entry is updated immediately.

Similarly, the publisher information available on GBIF can be used as a primary source for institution entries in GRSciColl.

## GRSciColl as content for other websites

The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. This means that other website are able to display the GRSciColl content, which remains centrally curated. The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. This means that other website are able to display the GRSciColl content, which remains centrally curated. The [GRSciColl API](/api) makes it possible for other applications to access the GRSciColl data programmatically. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. This means that other website are able to display the GRSciColl content, which remains centrally curated. Anyone can use the API to include the GRSciColl data in their systems. Below are two documented examples. Below are two documented examples. Below are two documented examples.

### iDigBio

The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions. The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions. iDigBio is part of our team of editors and review update suggestions for US institutions. The data displayed on the [iDigBio Collections website](https://www.idigbio.org/portal/collections) is maintained in GRSciColl. iDigBio is part of our team of editors and review update suggestions for US institutions. iDigBio is part of our team of editors and review update suggestions for US institutions.

### GBIF hosted portals

The current GRSciColl website uses the [GBIF hosted portal](https://www.gbif.org/hosted-portals) framework, and any GBIF hosted portal can display data from GRSciColl—see, for example, the [UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 
