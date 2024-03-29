---
permalink: /es/how-to
lang-ref: how-to
title: How to
description: |
  How to navigate the Global Registry of Scientific Collections and update its content
background: "{{ site.data.images.pagurus.src }}"
imageLicense: "{{ site.data.images.pagurus.caption }}"
height: 70vh
#layout: documentation
#sideNavigation: about.about
#composition: # you can extend the documentation layout with a custom composition
#- type: postHeader
#- type: pageMarkdown
toc: true
---

## Como añadir una colección o institución a GRSciColl

Usted puede sugerir o añadir ya sea una colección o institución aquí:

[Añadir una nueva Institución](https://registry.gbif.org/institution/create){: .button .is-primary}

[Añadir una nueva Colección](https://registry.gbif.org/collection/create){: .button .is-primary}

Al crear una nueva entrada en GRSciColl, muy pocos campos son obligatorios. Sin embargo, le agradeceríamos que nos facilitara la dirección de la entrada que ha creado (especialmente el país).

Mire también este video tutorial:
<iframe title="vimeo-player" src="https://player.vimeo.com/video/649977782?h=fb1d926798" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

If you can't access Vimeo in your country, [here](https://www.youtube.com/watch?v=R6ftJ61oOn4) is the YouTube video

## Como editar una colección o institución en GRSciColl

Hay tres formas de actualizar la información en GRSciColl:
* puede sugerir un cambio
* convertirse en editor
* puede importar datos

También puede ver este breve video tutorial:
<iframe title="vimeo-player" src="https://player.vimeo.com/video/649977825?h=a0068cfcd8" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

If you can't access Vimeo in your country, [here](https://www.youtube.com/watch?v=rgMQK9qFVfs) is the YouTube video

### Sugerir un cambio

Cualquiera puede sugerir cambios haciendo clic en cualquier entrada de GRSciColl y, a continuación:
* Haga clic en "Editar
* Haga clic en el botón `Sugerir`
* Haga su sugerencia y deje su dirección de correo electrónico y un comentario.

También puede sugerir la adición de nuevas entradas, la fusión de duplicados y la transformación de entradas institucionales en colecciones.

La sugerencia será revisada por editores institucionales, editores de país o personal de GBIF dependiendo de la entrada editada.

### Convertirse en editor

There are two types of editors in GRSciColl: editors and mediators. Both can edit data on GRSciColl and review changes but only mediators can delete, merge and transform entries. An editor (or mediator) can be given the permissions to edit:
* one or several collections
* one or several institutions (and their associated collections)
* one or several countries (and their associated institutions and collections)

To become a GRSciColl editor, you will need to have a [GBIF user account](https://www.gbif.org/user/profile) associated with your institutional email address. Please send us an email at scientific-collections@gbif.org to notify us that you would like to become an editor.

### Importar datos

The [GBIF Collections API](https://www.gbif.org/developer/registry#collections) allows for editing without going through the web interface. The API also has an experimental feature to upload batches of collection and institutions. See the documentation [here](https://github.com/gbif/registry/blob/dev/docs/grscicoll_batches.md).

If you are interested in using the API for editing GRSciColl, the permission system and requirements are the same as for becoming an editor.
