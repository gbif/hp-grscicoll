---
permalink: /es/connected-systems
lang-ref: connected-systems
title: Sistemas conectados
description: |
  El Registro Mundial de Colecciones Científicas (GRSciColl) pretende mejorar la interoperabilidad e interactúa con otros sistemas.
background: "{{ site.data.images.echinometra.src }}"
imageLicense: "{{ site.data.images.echinometra.caption }}"
height: 60vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Identificadores

Los identificadores y códigos de referencia son esenciales para permitir la interoperabilidad.

Cada entrada de GRSciColl tiene un Identificador Único Universal (UUID) y URLs asociadas. Los [editores](/es/how-to#convertirse-en-editor) también pueden añadir una serie de identificadores externos a sus colecciones y entradas institucionales. Los identificadores actualmente disponibles son los siguientes:

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

Además de las contribuciones de los editores de GRSciColl, los identificadores para algunas instituciones se importan automáticamente o semi-automáticamente.
* Todas las entradas conectadas al Index Herbariorum reciben un identificador Index Herbariorum. Vea [cómo funciona la sincronización con el Index Herbariorum](/es/connected-systems#index-herbariorum).
* Muchos identificadores `CITES` también proceden del Index Herbariorum. Vea [cómo funciona la sincronización con el Index Herbariorum](/es/connected-systems#index-herbariorum).
* Vinculamos tantas entradas de instituciones GRSciColl como fue posible con [*Wikidata*](https://www.wikidata.org/) con su herramienta de resolución [*OpenRefine*](https://openrefine.org) e importamos los identificadores de *wikidata*.
* Vinculamos tantas entradas de instituciones GRSciColl como fue posible con el [Research Organization Registry (ROR)](https://ror.org) con su herramienta de resolución [OpenRefine](https://openrefine.org) e importamos los identificadores ROR.
* Estamos trabajando con el equipo de la [*NCBI BioCollection*](https://www.ncbi.nlm.nih.gov/biocollections) para importar sus identificadores en GRSciColl.

Los usuarios pueden buscar los identificadores de colecciones e instituciones tanto en este sitio web como a través de [nuestro servicio de búsqueda de API](https://www.gbif.org/developer/registry#lookup).

Los identificadores también se utilizan para vincular los registros relacionados con especímenes publicados en GBIF con las entradas de GRSciColl.

## Registros publicados en GBIF

Al procesar e interpretar registros biológicos recientemente publicados, GBIF busca emparejar los registros que incluyen valores para cualquiera de los siguientes términos correspondientes a la entrada de GRSciColl a través de los [servicios de búsqueda de GRSciColl](https://www.gbif.org/developer/registry#lookup):
* `institutionCode`
* `collectionCode`
* `institutionID`
* `collectionID`

Por ejemplo, si un registro hace referencia al código de institución `RBINS` y al identificador de institución `https://ror.org/02y22ws83`, se vinculará al [*Royal Belgian Institute of Natural Sciences*](http://grscicoll.org/institution/royal-belgian-institute-natural-sciences). Los registros biológicos que coinciden con las entradas GRSciColl se utilizan en la generación de paneles y métricas como se muestra en este ejemplo.

En los casos con más de una coincidencia posible, el sistema utiliza el país del editor para ayudar a seleccionar una coincidencia en GRSciColl. Puede aprender más sobre cómo vincular registros de GBIF a GRSciColl [aquí](/how-to#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

## Datos de GRSciColl procedentes de otras fuentes

Las entradas de instituciones y colecciones de GRSciColl pueden tener fuentes primarias externas de información que procedan de otro registro o sitio web. Las modificaciones de estas fuentes primarias provocan actualizaciones de las entradas GRSciColl correspondientes, lo que elimina la necesidad de gestionar la información en múltiples registros.

Actualmente, las dos posibles fuentes de información para las entradas GRSciColl son el [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) y los metadatos asociados a los conjuntos de datos de datos y a los publicadores en [GBIF](https://www.gbif.org) . Los datos de las entradas extraídas de estas fuentes deben editarse en la fuente. En la práctica, la interfaz de edición de GRSciColl no permite a los usuarios actualizar los campos que utilizan información de una fuente externa.

### Index Herbariorum

Semanalmente, GRSciColl se sincroniza con la API del [Index Herbariorum](https://sweetgum.nybg.org/science/ih/), actualizando la información de entradas provenientes del *Index Herbarorium* y creando nuevas entradas de ser necesario.

Por defecto, una entrada del Index Herbarorium corresponde a una entrada institucional así como a una entrada de colección en GRSciColl, ya que los herbarios son usualmente colecciones botánicas al interior de otras instituciones. Puede leer más sobre este tema en este *issue* en [ GitHub](https://github.com/gbif/registry/issues/167). El proceso de sincronización puede generar entradas duplicadas cuando una sola institución es sede de diversos herbarios. Vea nuestra página de [Guías básicas](/how-to#how-to-edit-a-grscicoll-collection-or-institution) y [ Preguntas frecuentes](/faq/#how-to-handle-duplicates) para obtener sugerencias sobre cómo manejar estos casos.

Los editores pueden desconectar entradas institucionales del Index Herbariorum y elegir editar la institución directamente en la interfaz de edición de GRSciColl, tal y como se describe en [ esta pregunta frecuente](/faq#how-to-link-specimen-related-occurrences-published-on-gbif-to-grscicoll-entries).

### Metadatos de conjuntos de datos y páginas de publicadores de GBIF

Los metadatos de los conjuntos de datos publicados en GBIF pueden usarse como fuentes primarias para las entradas de las colecciones en GRSciColl. A diferencia de la sincronización con el *Index Herbariorum*, no hay programación semanal y no se crean automáticamente nuevas entradas. En su lugar, los editores deben vincular manualmente las colecciones de GRSciColl con sus fuentes. Esto se debe a que el alcance de GBIF incluye datos más allá del alcance de GRSciColl. Tenga en cuenta que también existe la opción de crear una entrada de colección a partir de un conjunto de datos. Vea nuestra página [how-to](/how-to#how-to-use-the-grscicoll-editing-interface). Cuando se actualizan los metadatos de un conjunto de datos, la entrada de colección correspondiente se actualiza inmediatamente.

Del mismo modo, la información sobre publicadores disponible en GBIF puede utilizarse como fuente primaria para las entradas de instituciones en GRSciColl.

## GRSciColl como contenido para otros sitios web

La [API de GRSciColl](/api) permite a otras aplicaciones acceder a los datos de GRSciColl mediante programación. Esto significa que otros sitios web pueden mostrar el contenido de GRSciColl, que permanece centralizado. Cualquiera puede utilizar la API para incluir los datos de GRSciColl en sus sistemas. A continuación se muestran dos ejemplos documentados.

### iDigBio

Los datos que aparecen en [el sitio web de iDigBio](https://www.idigbio.org/portal/collections) se gestionan en GRSciColl. iDigBio forma parte de nuestro equipo de editores y revisa las sugerencias de actualización para las instituciones estadounidenses.

### Portales alojados GBIF

El sitio web actual de GRSciColl utiliza el modelo de [Portales alojados de GBIF](https://www.gbif.org/hosted-portals) y cualquier portal alojado en GBIF puede mostrar datos de GRSciColl; véase, por ejemplo, el [Portal de Colecciones de Ciencias Naturales del Reino Unido.](https://data.dissco-uk.org). 
