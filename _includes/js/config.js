var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "specimen/search"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "COLLECTION",
    "INSTITUTION"
  ],
  "dataHeader": {
    "enableApiPopup": true,
    "enableInfoPopup": true
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 0,
    "stickyOffset": "0px"
  },
  "apiKeys": {
    "maptiler": "wFxbBf3Tv2e75QQfYOOW",
    "mapbox": "pk.eyJ1IjoiZ2JpZiIsImEiOiJja3VmZm50Z3kxcm1vMnBtdnBmeGd5cm9hIn0.M2z2n9QP9fRHZUCw9vbgOA"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "SATELLITE",
          "DARK"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "es",
      "localeCode": "es",
      "label": "Español",
      "default": false,
      "textDirection": "ltr",
      "cmsLocale": "es",
      "vocabularyLocale": "es-ES",
      "iso3LetterCode": "spa",
      "gbifOrgLocalePrefix": "/es",
      "grSciCollLocalePrefix": "/es",
      "mapTileLocale": "es"
    },
    {
      "code": "it",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "ru",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "ar",
      "localeCode": "ar",
      "label": "العربية",
      "default": false,
      "textDirection": "ltr",
      "reactIntlLocale": "ar-SA",
      "iso3LetterCode": "ara",
      "gbifOrgLocalePrefix": "/ar",
      "grSciCollLocalePrefix": "",
      "mapTileLocale": "ar"
    },
    {
      "code": "fr",
      "localeCode": "fr",
      "label": "Français",
      "default": false,
      "textDirection": "ltr",
      "cmsLocale": "fr",
      "iso3LetterCode": "fra",
      "vocabularyLocale": "fr-FR",
      "gbifOrgLocalePrefix": "/fr",
      "grSciCollLocalePrefix": "",
      "mapTileLocale": "fr"
    },
    {
      "code": "zh",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "zh-tw",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "ja",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {
    "en": {
      "catalogues.occurrences": "Specimens"
    },
    "es": {
      "catalogues.occurrences": "Specimens"
    },
    "it": {
      "catalogues.occurrences": "Specimens"
    },
    "ru": {
      "catalogues.occurrences": "Specimens"
    },
    "ar": {
      "catalogues.occurrences": "Specimens"
    },
    "fr": {
      "catalogues.occurrences": "Specimens"
    },
    "zh": {
      "catalogues.occurrences": "Specimens"
    },
    "zh-tw": {
      "catalogues.occurrences": "Specimens"
    },
    "ja": {
      "catalogues.occurrences": "Specimens"
    }
  },
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "or",
          "predicates": [
            {
              "type": "isNotNull",
              "key": "institutionKey"
            },
            {
              "type": "isNotNull",
              "key": "collectionKey"
            }
          ]
        },
        {
          "type": "in",
          "key": "basisOfRecord",
          "values": [
            "PRESERVED_SPECIMEN",
            "FOSSIL_SPECIMEN",
            "MATERIAL_SAMPLE",
            "LIVING_SPECIMEN",
            "MATERIAL_CITATION"
          ]
        }
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "country",
      "year",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 0,
      "lng": 0,
      "zoom": 0
    }
  },
  "collectionSearch": {
    "scope": {
      "displayOnNHCPortal": true
    },
    "excludedFilters": [
      "typeStatus"
    ]
  },
  "institutionSearch": {
    "scope": {
      "displayOnNHCPortal": true
    }
  },
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
};
