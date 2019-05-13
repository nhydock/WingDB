# Sourcing a Restaurant

WingKnight uses geojson to organize its data.  These documents are served down whole to clients through the search API, which will organize them by distance to the user.  We'll look here at each part of the `ugrille.json` location to better understand the structure of a location record.

A base geojson file follows the typical structure of 
```
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [40.0510972, -77.5203395]
    },
    "properties": {
        ...
    }
}
```

For WingKnight, we only document singular points on the map, so any other geojson value is not necessary.  A type of `"Feature"` is provided to adhere largely to spec and doesn't serve us any purpose in the mean time.  Organizing the rest of the details for a location occurs within `"properties"` object field, which acts as a document.  For us, this properties dictionary has a defined schemas.

### Location
| property | description | type |
|-|-|-|
| name | Proper name of the restaurant location | String |
| address | Street address of the location | String |
| menu | list of purchasing options for wings | MenuItem[] |
| flavors | list of flavors wings can be | Flavor[] |
| deals | list of Wing Nights the restaurant has | WingNight[] |

### MenuItem

| property | description | type |
|-|-|-|
| $id | reference id | String |
| name | Proper name of the menu item | String |
| price | Price per wing (USD) | Number |

### Flavor

| property | description | type |
|-|-|-|
| $id | reference id | String |
| name | Proper name of the flavor on the menu | String |
| heat | Heat Index (Spicyness) of the flavor on a scale of sweet (1) to atomic (10) | Number |
| available | Menu items this flavors can be applied to (implied all if not specified) | MenuItem$id[]? |

### Wing Night

| property | description | type |
|-|-|-|
| name | Name of the event | String |
| description | Promotional details about the event | String |
| rrule | calendar event describing when the deal occurs | RRule |
| menu | Show additional items when this event is active | MenuItem[]? |
| flavors | Show additional flavors when this event is active | Flavor[]? |

