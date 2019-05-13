# wing-db

Contents of this repository act as the crowd-source collection of information pertaining to restaurants that sell Wings of all shapes, flavors, and sizes.  We're on the hunt for knowledge so that we may help anyone who is craving wings to find the kind they're looking for.  Whether you're in a foreign town or just looking for a new spot to hit up with friends, the craving for wings are universal.

## How do I search the wing-db?

When any commit gets pushed to master, a redis database in heroku is updated through a git integration.  An API is available which performs geospatial searches of the data to find restaurants near you that have wings.  Additional information available within the geojson as part of the specification can be filtered by clients who which to implement additional functionality.  

The reference API currently is available at http://wing-knight.herokuapp.com and has the following routes

| /wings | | | |
|-|-|-|-|
| lat | Latitude of the location the map is centered on | Number | required |
| lng | Longitude of the location the map is centered on | Number | required |
| dst | Distance in km outwards from the center to search | Number | default = 10 km
| limit | Maximum amount of entries to return in the query | Number | default = 100

## Contributing to the cause

Know a spot in your town, or maybe you're a wing connoisseur and have a list of all the places you've been?  Whatever your reason, if you can provide the information we'll take it.

Chicken wings, pork wings, vegan wings, we don't discriminate here and welcome all data as long as it's wings.  There are a few rules we have for what we collect, however.

- we only record prices of wings, no other menu item from a restaurant
- to begin with we will only be collecting data from around the United States
- data is recorded as geojson files

Data will be peer reviewed using git pull requests as a way to insure our data is accurate(ish) before merging.

If you're still up to supplying information, you can read up on [How to structure a location](/docs/structure-of-a-location.md)