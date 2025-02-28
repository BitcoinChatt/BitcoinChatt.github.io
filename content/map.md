+++
date = '2025-02-19T07:27:26-05:00'
draft = false
title = 'Map'
+++

<div style="text-align:center;">

# Bitcoin Businesses Map

</div>

<br>

{{< rawhtml >}}
<div id="map" style="width: 1280px; height: 720px;"></div>
<link rel="stylesheet" href="/css/leaflet.css" />
<script src="/js/leaflet.js"></script>
<script>
  var map = L.map('map', {
    zoomControl: true,
    dragging: true,
    scrollWheelZoom: true
  }).setView([35.0456, -85.3097], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

</script>
{{< /rawhtml >}}

<br>

### This is a map of all the businesses in the Chattanooga area that accept bitcoin. Select any of them for their details.

<br>

### Do you own a business and accept bitcoin? [join](/join) us and let us know, and we'll add your business' location to our map!

<br><br>
