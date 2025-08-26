---
lang: ar
permalink: /ar/
lang-ref: home
layout: home
klass: home
title: Global Registry of Scientific Collections #should not be translated
gettingStartedVideoTitle: Getting started?
institutionsInCountryTemplate: |
  Institutions in <span id="users-country-name"></span>
description: A worldwide catalogue of scientific collections #a descripton for the head element
tagline: A worldwide catalogue of scientific collections
tabInstitutions: Institution name
tabSpecimens: Digitized specimens
placeholderInstitutions: Search institutions
placeholderSpecimens: Search for digitized specimens
background: "{{ site.data.images.calcinus.src }}"
imageLicense: "{{ site.data.images.calcinus.caption }}"
height: 50vh
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
---

Ideas for the home page and content more broadly

pages: API + download, reports About (history, roadmap) How to (register, edit, use) A metrics page? Contact

homepage shortcut Map of institutions Register new institution about api download reports GRSciColl visualized grscicoll related news stories from contentful

Counts Featured institutions/collections Featured specimens

