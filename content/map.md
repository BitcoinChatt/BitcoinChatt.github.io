+++
date = '2025-02-19T07:27:26-05:00'
draft = false
title = 'Map'
+++

<div style="text-align:center;">

# Bitcoin Businesses Map

</div>

<br>

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

  // Pin 1: Divine Design Natural Health
  L.marker([35.1851, -84.8755]).addTo(map)
    .bindPopup('<b>Divine Design Natural Health</b><br>' +
              'Address: 3800 Keith St NW, Cleveland, TN 37312<br>' +
              'Phone: 423-800-6800<br>' +
              'Hours: Mon-Thurs, 10AM-6PM<br>' +
              'Website: <a href="https://divinedesignnaturalhealth.com" target="_blank">DivineDesignNaturalHealth.com</a><br>' +
              '<img src="themes/main/static/images/Bitcoin Businesses/DDNH/Divine Design Natural Health.jpg" style="width: 100px;">');

  // Pin 2: The Agora
  L.marker([35.1478, -85.2350]).addTo(map)
    .bindPopup('<b>The Agora</b><br>' +
              'Address: 6112 Hixson Pike, Hixson, TN 37343<br>' +
              'Hours: Mon & Sat, 10AM-7PM<br>' +
              'Website: <a href="https://theagorahub.com" target="_blank">TheAgoraHub.com</a><br>' +
              '<img src="themes/main/static/images/Bitcoin Businesses/The Agora/The-Agora.png" style="width: 100px;">');

  // Polygon for Same Day Septic Service Area
  var sameDaySepticPolygon = [
    [35.221744, -84.788608],
    [34.863648, -85.054517],
    [34.685611, -85.266279],
    [34.675898, -85.287830],
    [34.672740, -85.301062],
    [34.987224, -85.468056],
    [34.987231, -85.468055],
    [35.159486, -85.376866],
    [35.176297, -85.363120],
    [35.327259, -85.154306],
    [35.330686, -85.132336]
  ];
  L.polygon(sameDaySepticPolygon, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2
  }).addTo(map);

  // Pin 3: Same Day Septic (Centroid of Polygon)
  L.marker([35.007984, -85.241003]).addTo(map)
    .bindPopup('<b>Same Day Septic</b><br>' +
              'Address: Chattanooga, TN<br>' +
              'Phone: 423-834-4867<br>' +
              'Hours: Sun-Sat, 12AM-11:45PM<br>' +
              'Website: <a href="https://samedayseptic.co" target="_blank">SameDaySeptic.co</a><br>' +
              '<img src="themes/main/static/images/Bitcoin Businesses/Same Day Septic/Same Day Septic.png" style="width: 100px;">');

</script>

<br>

### This is a map of all the businesses in the Chattanooga area that accept bitcoin. Select any of them for their details.

<br>

### Do you own a business and accept bitcoin? [join](/join) us and let us know, and we'll add your business' location to our map!

<br><br>
