---
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
  <p class="tagLine">A worldwide catalogue of natural history collections and the material they hold</p>

  <div class="searchWrapper">
    <!-- Tab links -->
    <div class="tab">
      <button class="tablinks active" onclick="openTab(event, 'searchTab_code')">Institution code</button>
      <button class="tablinks" onclick="openTab(event, 'searchTab_name')">Institution name</button>
      <button class="tablinks" onclick="openTab(event, 'searchTab_catalogNumber')">Specimen catalog number</button>
    </div>

    <!-- Tab content -->
    <div id="searchTab_code" class="tabcontent" style="display: block;">
      <form action="/institution/search" method="GET">
        <input name="code" class="input" type="text" placeholder="Search institutions by code" style="width: 100%;">
        <button type="submit" class="button is-ghost">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </form>
    </div>

    <div id="searchTab_name" class="tabcontent">
      <form action="/institution/search" method="GET">
        <input name="name" class="input" type="text" placeholder="Search institutions by name" style="width: 100%;">
        <button type="submit" class="button is-ghost">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </form>
    </div>

    <div id="searchTab_catalogNumber" class="tabcontent">
      <form action="/specimen/search" method="GET">
        <input name="q" class="input" type="text" placeholder="Search digitized specimens across fields" style="width: 100%;">
        <button type="submit" class="button is-ghost">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </form>
    </div>
  </div>
  <script>
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
  Not sure how to get started? <a href="/about/#what-is-this">Watch our Getting started video</a>
background:  "{{ site.data.images.calcinus.src }}"
imageLicense: "{{ site.data.images.calcinus.caption }}"
permalink: /
height: 80vh
composition:
  - type: heroImage # the block type
  - type: features
    data: collections
navbar:
    color: transparent!important
    hasWhiteText: true
    floating: true
---

Edit `/home.md` to change the text.

Lorem markdownum spatium limes indefessus neque *at* orat aestuat, quicquam ne
flavusque omnibus, virginis socerque sparsos vidimus eundem. Sustinet **ramo
pontum ut** avus quamquam de trabes vestemque cruorem tremor.

Viscera mercibus isdem hebetarat undas! Iubet ora ire unum telis adicit, si
Telephus *valent*, instructo refers. Ille **est resque**, sic ruris erit ante
profana detegeret. Et cogor tractus arboribus prensurum praesens memorantur
neque inplet iussus temeraria merui **fas ecce** aethera dixit fieretque [plura
tollebat altius](http://virgineusque.net/est.html).

