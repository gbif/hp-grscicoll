---
permalink: /connected-systems
lang-ref: connected-systems
title: Connected systems
description: |
  El Registro Mundial de Colecciones Científicas (GRSciColl) pretende mejorar la interoperabilidad e interactúa con otros sistemas.
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

## Identificadores

Los identificadores y códigos de referencia son esenciales para permitir la interoperabilidad.

Cada entrada de GRSciColl tiene un Identificador Único Universal (UUID) y URLs asociadas. Los [editores](/how-to#become-editor) también pueden añadir una serie de identificadores externos a sus colecciones y entradas institucionales. Aquí está la lista actual de tipos de identificadores disponibles:

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

Además del trabajo de los editores de GRSciCOll, se importaron de forma automática o semiautomática una serie de identificadores para varias instituciones.
* Todas las entradas conectadas al Index Herbariorum reciben un identificador Index Herbariorum. Revise [cómo funciona la sincronización con el Index Herbariorum](/about#index-herbariorum).
* Muchos identificadores `CITES` también proceden del Index Herbariorum. Revise [cómo funciona la sincronización con el Index Herbariorum](/about#index-herbariorum).
* Vinculamos tantas entradas de instituciones GRSciColl como fue posible con [Wikidata](https://www.wikidata.org/) con su herramienta de resolución [OpenRefine](https://openrefine.org) e importamos los identificadores de wikidata.
* Vinculamos tantas entradas de instituciones GRSciColl como fue posible con el [Research Organization Registry (ROR)](https://ror.org) con su herramienta de resolución [OpenRefine](https://openrefine.org) e importamos los identificadores ROR.
* We are working with the [NCBI BioCollection](https://www.ncbi.nlm.nih.gov/biocollections) team to import their identifiers in GRSciColl.

Las instituciones y colecciones pueden buscarse por identificadores tanto en nuestro sitio web como con [nuestro servicio de búsqueda API](https://www.gbif.org/developer/registry#lookup).

Los identificadores también se utilizan para vincular las ocurrencias relacionadas con especímenes publicadas en GBIF con las entradas de GRSciColl.

## Occurrencias publicadas en GBIF

While processing and interpreting newly published occurrences, GBIF seeks to match records that include values for any of the following terms to the corresponding GRSciColl entry through the [GRSciColl lookup service](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

Por ejemplo, si una ocurrencia hace referencia al código de institución `RBINS` y al identificador de institución `https://ror.org/02y22ws83`, se vinculará al [Real Instituto Belga de Ciencias Naturales](http://grscicoll.org/institution/royal-belgian-institute-natural-sciences). Puede aprender más sobre cómo vincular ocurrencias de GBIF a GRSciColl [aquí](/how-to#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

Durante la interpretación de la ocurrencia, el sistema utilizará el país del editor para ayudar a elegir una coincidencia en GRSciColl en los casos en que haya más de un candidato. Puede aprender más sobre cómo vincular ocurrencias de GBIF a GRSciColl [aquí](/how-to#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## Datos de GRSciColl procedentes de otras fuentes

The GRSciColl institution and collection entries can have external primary sources of information that comes from another registry or website. Edits to such primary sources prompt updates to corresponding GRSciColl entries, eliminating the need to manage information across multiple registries.

Actualmente, las dos posibles fuentes de información para las entradas GRSciColl son el [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) y los conjuntos de datos de [GBIF](https://www.gbif.org) y los metadatos de los publicadores. En otras palabras, la información disponible en GRSciColl puede proceder de otro registro o sitio web. Cada vez que se edita la fuente primaria, se actualiza también la entrada GRSciColl correspondiente.

### Index Herbariorum

Every week, GRSciColl synchronizes with the [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) API, updating information for existing entries whose source is Index Herbariorum and creating new entries as needed.

Cada semana, GRSciColl se sincroniza con la API del [Index Herbariorum](https://sweetgum.nybg.org/science/ih/). Puede leer más sobre la justificación en este tema [de GitHub](https://github.com/gbif/registry/issues/167). The synchronization process can generate duplicate institution entries when a single institution is home to several herbaria collections. See our [how-to page](/how-to#how-to-use-the-grscicoll-editing-interface) and [FAQs](/faq/#how-to-handle-duplicates) for suggestions on how to handle these cases.

Editors can disconnect institutions entries from Index Herbariorum and choose to edit the institution directly in the GRSciColl editing interface as described in [this FAQ](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

### Metadatos de conjuntos de datos de GBIF y páginas de publicadores de GBIF

Los metadatos de los conjuntos de datos publicados en GBIF pueden usarse como fuentes primarias para las entradas de las colecciones en GRSciColl. A diferencia de la sincronización con el Index Herbariorum, no hay un calendario semanal y las nuevas entradas no se crean automáticamente. En su lugar, los editores deben vincular manualmente las colecciones de GRSciColl con sus fuentes. Esto se debe a que el ámbito de GBIF incluye datos que van más allá del ámbito de GRSciColl. Tenga en cuenta que también existe la opción de crear una entrada de colección a partir de un conjunto de datos. Vea nuestra página [how-to](/how-to#how-to-use-the-grscicoll-editing-interface). Cuando se actualizan los metadatos de un conjunto de datos, la entrada de colección correspondiente se actualiza inmediatamente.

Del mismo modo, la información sobre publicadores disponible en GBIF puede utilizarse como fuente primaria para las entradas de instituciones en GRSciColl.

## GRSciColl as content for other websites

La [API de GRSciColl](/api) permite a otras aplicaciones acceder a los datos de GRSciColl mediante programación. Esto significa que otros sitios web pueden mostrar el contenido de GRSciColl, que permanece centralizado. Cualquiera puede utilizar la API para incluir los datos de GRSciColl en sus sistemas. A continuación se muestran dos ejemplos documentados.

### iDigBio

Los datos que aparecen en [el sitio web de iDigBio](https://www.idigbio.org/portal/collections) se mantienen en GRSciColl. iDigBio forma parte de nuestro equipo de editores y revisa las sugerencias de actualización para las instituciones estadounidenses.

### GBIF Hosted portals

The current GRSciColl website uses the [GBIF hosted portal](https://www.gbif.org/hosted-portals) framework, and any GBIF hosted portal can display data from GRSciColl—see, for example, the [UK Natural Sciences Collections Portal](https://data.dissco-uk.org). 
