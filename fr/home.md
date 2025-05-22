---
lang: fr
permalink: /fr/
lang-ref: home
layout: page d’accueil
klass: page d’accueil
title: Registre Mondial des Collections Scientifiques, #should not be translated
gettingStartedVideoTitle: Premiers pas
institutionsInCountryTemplate: |
  Institutions dans <span id="users-country-name"></span>
description: Un catalogue mondial de collections scientifiques #a descripton for the head element
tagline: Un catalogue mondial de collections scientifiques
tabInstitutions: Nom de l'institution
tabSpecimens: Spécimens numérisés
placeholderInstitutions: Rechercher une institution
placeholderSpecimens: Rechercher un spécimen numérisé
background: "{{ site.data.images.calcinus.src }}"
imageLicense: "{{ site.data.images.calcinus.caption }}"
height: 85vh
composition:
  - 
    type: grscicollHeader #the block type
  - 
    type: stats
    data: navCards.stats
  - 
    type: features
    data: navCards.shortcuts
  - 
    type: split
    data: navCards.video-intro
  - 
    type: features
    data: navCards.news
  - 
    type: features
    data: collections
navbar:
  color: transparent!important
  hasWhiteText: true
  floating: true
---

Idées pour la page d'accueil et le contenu plus large

pages: API + téléchargement, rapports À propos (histoire, plan) Marche à suivre (enregistrer, éditer, utiliser) Statistiques? Contact

homepage shortcut Map of institutions Register new institution about api download reports GRSciColl visualized grscicoll related news stories from contentful

Counts Featured institutions/collections Featured specimens

