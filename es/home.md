---
permalink: /es
lang-ref: home
layout: home
klass: home
title: |
  <div>
  <div><span>G</span>lobal</div>
  <div><span>R</span>egistry</div>
  <div id="headline-offset-wrapper"><span id="headline-offset">of </span><span>Sci</span>entific</div>
  <div><span>Coll</span>ections</div>
  </div>
description: |
  <p class="tagLine">Un catálogo mundial de colecciones científicas</p>

  <div class="searchWrapper">
  <!-- Tab links -->
  <div class="tab">
  <button class="tablinks active" onclick="openTab(event, 'searchTab_name')">Instituciones</button>
  <a href="/specimen/search"><button class="tablinks" onclick="openTab(event, 'searchTab_catalogNumber')">
  Especímenes digitalizados<svg style="position: relative; top: 2px;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></button></a>
  </div>

  <!-- Tab content -->
  <div id="searchTab_name" class="tabcontent" style="display: block;">
  <form action="/institution/search" method="GET">
  <input name="q" class="input" type="text" placeholder="Buscar instituciones" style="width: 100%;">
  <button type="submit" class="button is-ghost">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
  </svg>
  </button>
  </form>
  </div>

  <div id="searchTab_catalogNumber" class="tabcontent">
  <form action="/specimen/search" method="GET">
  <input id="home_specimen_input" name="q" class="input" type="text" placeholder="Search for digitized specimens" style="width: 100%;">
  <button type="submit" class="button is-ghost" >
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
  </svg>
  </button>
  </form>
  </div>
  </div>
  <script>
  window.setTimeout(function() {
  let a = document.getElementById('headline-offset');
  a.parentElement.style.marginLeft = '-' + a.offsetWidth + 'px';
  // a.parentElement.parentElement.style.paddingLeft = a.offsetWidth + 'px';
  }, 300);

  function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  }
  </script>

  {: .gettingStarted}
  ¿No está seguro de cómo empezar? <a href="/#video-intro">Mire este video</a> <a href="/#video-intro">Watch our Getting started video</a> <a href="/#video-intro">Watch our Getting started video</a> <a href="/#video-intro">Watch our Getting started video</a>
background: "{{ site.data.images.calcinus.src }}"
imageLicense: "{{ site.data.images.calcinus.caption }}"
height: 85vh
composition:
  - 
    type: heroImage #the block type
  - 
    type: stats
    data: es.navCards.stats
  - 
    type: features
    data: es.navCards.shortcuts
  - 
    type: split
    data: es.navCards.video-intro
  - 
    type: features
    data: es.navCards.news
  - 
    type: features
    data: es.collections
navbar:
  color: transparent!important
  hasWhiteText: true
  floating: true
---

Ideas for the home page and content more broadly

pages: API + download, reports About (history, roadmap) How to (register, edit, use) A metrics page? Contact Contact Contact Contact

homepage shortcut Map of institutions Register new institution about api download reports GRSciColl visualized grscicoll related news stories from contentful

Counts Featured institutions/collections Featured specimens

