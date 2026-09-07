function isMobile() {
  return window.innerWidth <= 900;
}

function toggleHeaderMenu() {
  const menu = document.getElementById("header-list");
  if (menu) {
    menu.classList.toggle("open");
  }
}

window.onload = function () {
  setupCalendar();
  setupMapPage();
};

function setupCalendar() {
  if (isMobile()) {
    var calendarWidget = document.getElementById("calendar-widget");
    if (calendarWidget) {
      calendarWidget.src =
        "https://teamup.com/kshn1rcuawwcj2uczf?view=l&showHeader=1&showLogo=1&showSearch=1&showProfileAndInfo=0&showSidepanel=1&showViewHeader=1&showAgendaDetails=0&showDateControls=1&showDateRange=1";
    }
  }
}

function setupMapPage() {
  var mapElement = document.getElementById("map");
  if (!mapElement) {
    return; // Only run map code on the map page
  }

  // Change these two variables and the image alignment should adjust automatically
  var iconWidth = 30;
  var iconHeight = 50;

  var businessIcon = L.icon({
    iconUrl: "/images/orange-marker-icon-2x.png",
    iconSize: [iconWidth, iconHeight],
    iconAnchor: [iconWidth / 2, iconHeight],
    popupAnchor: [0, -iconHeight],
    tooltipAnchor: [0, -iconHeight],
    shadowUrl: "/images/marker-shadow.png",
    shadowSize: [iconWidth, iconHeight],
  });

  var map = L.map("map", {
    zoomControl: true,
    dragging: true,
    scrollWheelZoom: true,
    zoomSnap: 0.1,
    tapHold: true,
  });

  var pos = [35.056145, -85.121643];
  if (isMobile()) {
    map.setView(pos, 9.7);
  } else {
    map.setView(pos, 10);
  }

  var markers = [
    // Pin 1: Divine Design Natural Health
    {
      coords: [35.19425, -84.856933],
      image: "/images/Bitcoin Businesses/DDNH/Divine Design Natural Health.jpg",
      name: "Divine Design Natural Health",
      address: "3800 Keith St NW, Cleveland, TN 37312",
      phone: "423-800-6800",
      hours: "Mon-Thurs, 10AM-6PM",
      websiteURL: "https://divinedesignnaturalhealth.com",
      websiteName: "DivineDesignNaturalHealth.com",
    },
    // Pin 2: Calvary Chapel
    {
      coords: [35.0157164, -85.3241693],
      image: "/images/Bitcoin Businesses/Calvary Chapel/Calvary Chapel.jpg",
      name: "Calvary Chapel Chattanooga",
      address: "3415 Broad St, Chattanooga, TN 37409",
      phone: "423-752-0004",
      hours: "Sat 3:30–8 PM, Sun 8:30 AM–2 PM",
      websiteURL: "http://www.calvarychatt.com",
      websiteName: "CalvaryChatt.com",
    },
    // Pin 3: Same Day Septic
    {
      coords: [35.002027, -85.204528],
      image: "/images/Bitcoin Businesses/Same Day Septic/Same Day Septic.png",
      name: "Same Day Septic",
      address: "Chattanooga, TN",
      phone: "423-834-4867",
      hours: "Sun-Sat, 12AM-11:45PM",
      websiteURL: "https://samedayseptic.com",
      websiteName: "SameDaySeptic.co",
    },
    // Pin 4: Steak 'n Shake (Fort Oglethorpe)
    {
      coords: [34.951935, -85.244715],
      image: "/images/Bitcoin Businesses/Steak n Shake/Steak-n-Shake.png",
      name: "Steak n Shake",
      address: "1182 Battlefield Pkwy, Fort Oglethorpe, GA 30742",
      phone: "706-858-1919",
      hours: "Sun-Sat, 11AM-11PM",
      websiteURL:
        "https://www.steaknshake.com/locations/ga-ft-oglethorpe-battlefield-parkway/",
      websiteName: "SteaknShake.com",
    },
    // Pin 5: Steak 'n Shake (Dalton)
    {
      coords: [34.759589, -84.989919],
      image: "/images/Bitcoin Businesses/Steak n Shake/Steak-n-Shake.png",
      name: "Steak n Shake",
      address: "1250 W Walnut Ave, Dalton, GA 30720",
      phone: "706-272-3300",
      hours: "Sun-Sat, 11AM-12AM",
      websiteURL:
        "https://www.steaknshake.com/locations/ga-dalton-w-walnut-avenue/",
      websiteName: "SteaknShake.com",
    },
    // Pin 6: Steak 'n Shake (Gunbarrel)
    {
      coords: [35.039848, -85.149789],
      image: "/images/Bitcoin Businesses/Steak n Shake/Steak-n-Shake.png",
      name: "Steak n Shake",
      address: "2296 Gunbarrel Rd, Chattanooga, TN 37421",
      phone: "423-892-2993",
      hours: "Sun-Sat, 11AM-12AM",
      websiteURL:
        "https://www.steaknshake.com/locations/tn-chattanooga-gunbarrel-road/",
      websiteName: "SteaknShake.com",
    },
    // Pin 7: Steak 'n Shake (Cleveland)
    {
      coords: [35.205077, -84.849458],
      image: "/images/Bitcoin Businesses/Steak n Shake/Steak-n-Shake.png",
      name: "Steak n Shake",
      address: "220 Paul Huff Pkwy NW, Cleveland, TN 37312",
      phone: "423-614-7300",
      hours: "Sun-Sat, 11AM-12AM",
      websiteURL:
        "https://www.steaknshake.com/locations/tn-cleveland-paul-huff-parkway/",
      websiteName: "SteaknShake.com",
    },
    // Pin 8: City Collectibles
    {
      coords: [34.990641, -85.196578],
      image: "/images/Bitcoin Businesses/City Collectibles/City Collectibles.jpg",
      name: "City Collectibles",
      address: "6725 Ringgold Rd, Ste 137, Chattanooga, TN 37412",
      phone: "423-486-1025",
      hours: "Sun 12-6PM, Tues-Thurs 12-8PM, Fri 12-9PM, Sat 11AM-9PM",
    },
    // Pin 9: Anchor Barber Co.
    {
      coords: [35.066856, -85.308845],
      image: "/images/Bitcoin Businesses/Anchor Barber Co/Anchor Barber Co.png",
      name: "Anchor Barber Co.",
      address: "502 N Market St, Chattanooga, TN 37405",
      phone: "423-690-7291",
      hours: "Mon 10AM-6PM, Tues-Thurs 10AM-7PM, Fri 10AM-6PM, Sat 10AM-4PM",
      websiteURL: "https://www.AnchorBarberCo.com",
      websiteName: "AnchorBarberCo.com",
    },
    // Pin 10: Gadget Mechanic
    {
      coords: [34.7855517, -85.003133],
      image: "/images/Bitcoin Businesses/Gadget Mechanic/Gadget Mechanic.png",
      name: "Gadget Mechanic",
      address: "819 N. Tibbs Road, Dalton, GA 30720",
      phone: "706-671-5835",
      hours: "Mon-Fri 10AM-6PM, Sat 11AM-4PM",
      websiteURL: "https://www.gadgetmechanic.us/",
      websiteName: "GadgetMechanic.us",
    },
    // Pin 11: Bespoke Barbershop
    {
      coords: [35.0315116, -85.1509364],
      image: "/images/Bitcoin Businesses/Bespoke Barbershop/Bespoke Barbershop.png",
      name: "Bespoke Barbershop",
      address: "2020 Gunbarrel Road 194, Suite #107, Chattanooga, TN 37421",
      phone: "928-848-9368",
      hours: "Tues-Sat 11 AM–7 PM",
      websiteURL: "https://www.bespokebarbershop.co/",
      websiteName: "BespokeBarbershop.co",
    },
    // Pin 12: First Response Towing and Recovery
    {
      coords: [35.0328476, -85.1940908],
      image:
        "/images/Bitcoin Businesses/First Response Towing and Recovery/First Response Towing and Recovery.png",
      name: "First Response Towing and Recovery",
      address: "980 Airport Road, Chattanooga, TN 37421",
      phone: "423-702-5074",
      hours: "24/7",
      websiteURL: "https://www.firstresponsetowingandrecovery.com/",
      websiteName: "FirstResponseTowingAndRecovery.com",
    },
    // Pin 13: Standard Ink Tattoo Company
    {
      coords: [35.0611373, -85.3036354],
      image:
        "/images/Bitcoin Businesses/Standard Ink Tattoo Company/Standard Ink Tattoo Company.png",
      name: "Standard Ink Tattoo Company",
      address: "434 Frazier Avenue, Chattanooga, TN 37405",
      phone: "423-490-9819",
      hours: "Sun 12-10PM, Mon-Thurs 12-9PM, Fri-Sat 12PM-12AM",
      websiteURL: "https://www.facebook.com/standardink",
      websiteName: "Facebook Page",
    },
    // Pin 14: Organizational Change Solutions
    {
      coords: [35.1971021, -84.8947589],
      image:
        "/images/Bitcoin Businesses/Organizational Change Solutions/Organizational Change Solutions.png",
      name: "Organizational Change Solutions",
      address: "2250 Candies Lane NW, A, Cleveland, TN 37312",
    },
    // Pin 15: Running Wild Inflatables
    {
      coords: [35.2492368, -85.1857456],
      image:
        "/images/Bitcoin Businesses/Running Wild Inflatables/Running Wild Inflatables.png",
      name: "Running Wild Inflatables",
      address: "9917 Dayton Pike, Soddy-Daisy, TN 37379",
      phone: "423-401-8611",
      hours: "Sun-Sat 8AM-9PM",
      websiteURL: "https://www.runningwildinflatables.com/",
      websiteName: "RunningWildInflatables.com",
    },
    // Pin 16: Noble Mediation and Notary
    {
      coords: [35.1602695, -84.8750917],
      image:
        "/images/Bitcoin Businesses/Noble Mediation and Notary/Noble Mediation and Notary.png",
      name: "Noble Mediation and Notary",
      address: "170 N Ocoee Street, #202, Cleveland, TN 37311",
      phone: "423-458-4645",
      hours: "Wed 5:30-9PM, Fri 5:30-9PM, Sat-Sun 9AM-5PM",
      websiteURL: "https://www.noblemediationandnotary.com/",
      websiteName: "NobleMediationAndNotary.com",
    },
    // Pin 17: North Cleveland Church of God
    {
      coords: [35.1640222, -84.8678335],
      image:
        "/images/Bitcoin Businesses/North Cleveland Church of God/North Cleveland Church of God.png",
      name: "North Cleveland Church of God",
      address: "335 11th Street NE, Cleveland, TN 37311",
      phone: "423-476-5513",
      hours: "Sun 10:30AM-12PM, Mon-Thurs 8AM-5PM",
      websiteURL: "https://www.nccog.com/",
      websiteName: "NCCOG.com",
    },
    // Pin 18: Toots Braids of Love
    {
      coords: [35.0461207, -85.2616513],
      image: "/images/Bitcoin Businesses/Toots Braids of Love/Toots Braids of Love.png",
      name: "Toots Braids of Love",
      address: "904 Arlington Avenue, Chattanooga, TN 37406",
    },
    // Pin 19: CrabTrap Mobile Kitchen
    {
      coords: [35.0549418, -85.1988804],
      image:
        "/images/Bitcoin Businesses/CrabTrap Mobile Kitchen/CrabTrap Mobile Kitchen.png",
      name: "CrabTrap Mobile Kitchen",
      address: "5902 Shallowford Road, Chattanooga, TN 37421",
      phone: "423-255-0436",
      websiteURL: "https://www.facebook.com/profile.php?id=100063589031640",
      websiteName: "Facebook Page",
    },
    // Pin 20: Chattanooga Crystal Store
    {
      coords: [35.0301926, -85.2906239],
      image:
        "/images/Bitcoin Businesses/Chattanooga Crystal Store/Chattanooga Crystal Store.jpg",
      name: "Chattanooga Crystal Store",
      address: "1155 E Main St, Chattanooga, TN 37408",
      phone: "423-883-1864",
      websiteURL: "http://chattanoogacrystalstore.com/",
      websiteName: "ChattanoogaCrystalStore.com",
    },
    // Pin 21: Erica's Pristine Touch Cleaning Service
    {
      coords: [35.0467664, -85.3113186],
      name: "Erica's Pristine Touch Cleaning Service",
      address: "808 Chestnut St, Chattanooga, TN 37402",
    },
    // Pin 22: Oh My Goodness Chef Chasty Seafood & More
    {
      coords: [35.0317024, -85.170861],
      image: "/images/Bitcoin Businesses/Chef Chasty Seafood/Chef Chasty Seafood.jpg",
      name: "Oh My Goodness Chef Chasty Seafood & More",
      address: "6838 Old Stage Rd, Chattanooga, TN 37421",
      phone: "423-505-7488",
      websiteURL: "https://www.facebook.com/Chefchasty/",
      websiteName: "Facebook Page",
    },
    // Pin 23: Kelly's Restaurant
    {
      coords: [34.7464956, -84.9716389],
      image: "/images/Bitcoin Businesses/Kelly's Restaurant/Kelly's Restaurant.jpg",
      name: "Kelly's Restaurant",
      address: "1700 S. Dixie Hwy, Dalton, GA 30720",
      phone: "706-275-6789",
      hours: "Sun 10:30AM-12PM, Mon-Fri 6AM-2PM",
      websiteURL: "https://kellys-restaurant.com/",
      websiteName: "Kellys-Restaurant.com",
    },
    // Pin 24: Top Notch Customs, LLC
    {
      coords: [34.9328006, -85.3412157],
      image: "/images/Bitcoin Businesses/Top Notch Customs/Top Notch Customs.jpg",
      name: "Top Notch Customs, LLC",
      address: "134 Lake City Drive, Flintstone, GA 30725",
      phone: "423-463-4760",
      hours: "Mon-Fri 8AM-5PM",
      websiteURL: "http://www.topnotchcustomsllc.com",
      websiteName: "TopNotchCustomsLLC.com",
    },
    // Pin 25: Augustine Life Solutions DBA Fred's Kettle Corn
    {
      coords: [35.0800913, -85.0622878],
      image:
        "/images/Bitcoin Businesses/Augustine Life Solutions/Augustine Life Solutions.png",
      name: "Augustine Life Solutions DBA Fred's Kettle Corn",
      address: "5829 Main Street, Collegedale, TN 37363",
      phone: "919-452-7310",
      hours: "Mon-Fri 9AM-6PM",
      websiteURL: "https://augustinelifesolutions.com",
      websiteName: "AugustineLifeSolutions.com",
    },
    // Pin 26: Power-Up Pizza
    {
      coords: [34.9565883, -85.2326928],
      image: "/images/Bitcoin Businesses/Power-Up Pizza/Power-Up Pizza.jpg",
      name: "Power-Up Pizza",
      address: "1628 Cloud Springs Road, Rossville, GA 30741",
      phone: "423-243-3346",
      hours: "Mon-Sat 11AM-7PM",
      websiteURL: "https://poweruppizzatruck.com",
      websiteName: "PowerUpPizzaTruck.com",
    },
    // Pin 27: Power-Up Pizza Food Truck
    {
      coords: [35.0074528, -85.2108077],
      image: "/images/Bitcoin Businesses/Power-Up Pizza/Power-Up Pizza.jpg",
      name: "Power-Up Pizza Food Truck",
      address: "5704 Marlin Road, Chattanooga, TN 37411",
      phone: "423-243-3346",
      hours: "Mon-Sat 11AM-7PM",
      websiteURL: "https://poweruppizzatruck.com",
      websiteName: "PowerUpPizzaTruck.com",
    },
    // Pin 28: Laughing Koffin Tattoo
    {
      coords: [35.0085833, -85.1520737],
      image:
        "/images/Bitcoin Businesses/Laughing Koffin Tattoo/Laughing Koffin Tattoo.png",
      name: "Laughing Koffin Tattoo",
      address: "1414 Jenkins Road, Suite 121, Chattanooga, TN 37421",
      phone: "423-206-9933",
      hours: "Tues-Sat 12-8PM",
      websiteURL: "https://laughingkoffintattoo.com",
      websiteName: "LaughingKoffinTattoo.com",
    },
    // Pin 29: The Esthetics Shop by Myriam, LLC
    {
      coords: [34.7568811, -84.9828673],
      image:
        "/images/Bitcoin Businesses/The Esthetics Shop by Myriam/The Esthetics Shop by Myriam.jpg",
      name: "The Esthetics Shop by Myriam, LLC",
      address: "1100 Lakemont Drive, Dalton, GA 30720",
      phone: "706-229-1194",
      hours: "Wed-Thurs 4-7PM, Fri 9AM-6:30PM, Sat 8AM-1PM, Sun 12-4PM",
      websiteURL: "https://the-esthetics-shop-by-myriam-llc.square.site",
      websiteName: "The-Esthetics-Shop-by-Myriam-LLC.square.site",
    },
    // Pin 30: Backroad Cheesesteaks
    {
      coords: [34.9682497, -85.2568861],
      name: "Backroad Cheesesteaks",
      address: "507 Chickamauga Avenue, Rossville, GA 30741",
    },
    // Pin 31: All About You Day Spa
    {
      coords: [34.9891382, -85.1932672],
      image:
        "/images/Bitcoin Businesses/All About You Day Spa/All About You Day Spa.png",
      name: "All About You Day Spa",
      address: "6737 Ringgold Road, Suite B, Chattanooga, TN 37412",
      phone: "423-991-0875",
      hours: "Tues, Thurs, & Fri 9AM-6PM, Sat 9AM-3PM, Sun 9AM-5PM",
      websiteURL: "https://elenadion-skincare.square.site",
      websiteName: "Elenadion-Skincare.square.site",
    },
    // Pin 32: Trading Post Food Store
    {
      coords: [35.064477, -85.0996096],
      image:
        "/images/Bitcoin Businesses/Trading Post Food Store/Trading Post Food Store.png",
      name: "Trading Post Food Store",
      address: "4896 Pattentown Road, Ooltewah, TN 37363",
      phone: "423-910-1887",
      hours: "Mon-Sun 7AM-10PM",
      websiteURL: "https://tradingpost-quick-stop.base44.app",
      websiteName: "TradingPost-Quick-Stop.base44.app",
    },
    // Pin 33: R2 Delivery Service, LLC
    {
      coords: [34.9763265, -85.2526557],
      name: "R2 Delivery Service, LLC",
      address: "190 Center Street, Rossville, GA 30741",
      phone: "423-637-8062",
      hours: "Mon-Fri 10AM-6PM, Sat 10AM-2:30PM",
    },
    // Pin 34: Georgia Dragonfly
    {
      coords: [34.8052939, -85.2750261],
      image: "/images/Bitcoin Businesses/Georgia Dragonfly/Georgia Dragonfly.jpg",
      name: "Georgia Dragonfly",
      address: "681 Taylor Smith Rd, Rock Spring, GA 30739",
      phone: "404-663-4984",
      hours: "Sun-Sat, 9AM-5PM",
      websiteURL: "https://www.georgiadragonfly.com/",
      websiteName: "GeorgiaDragonfly.com",
    },
    // Pin 35: Skiles Services
    {
      coords: [34.9624146, -85.2271333],
      image: "/images/Bitcoin Businesses/Skiles Services/Skiles Services.png",
      name: "Skiles Services",
      address: "3235 Lakeview Dr, Rossville, GA 30741",
      phone: "423-602-3104",
      hours: "Sun 12-4PM, Mon-Fri 8AM-6PM, Sat 9AM-5PM",
      websiteURL: "https://skiles.services/",
      websiteName: "Skiles.services",
    },
    // Pin 36: Off the Grill by Chef Q
    {
      coords: [35.1282873, -85.2460754],
      image: "/images/Bitcoin Businesses/Off the Grill/Off the Grill.jpg",
      name: "Off the Grill by Chef Q",
      address: "4848 Hixson Pike, Hixson, TN 37348",
      phone: "423-541-7329",
      hours: "Tues-Sat 11AM-7PM",
      websiteURL: "https://www.offthegrillbychefq.com/",
      websiteName: "OffTheGrillByChefQ.com",
    },
    // Pin 37: Playing Hookey Antiques and Estates
    {
      coords: [35.22393798828125, -85.21839904785156],
      image:
        "/images/Bitcoin Businesses/Playing Hookey Antiques and Estates/Playing Hookey Antiques and Estates.jpg",
      name: "Playing Hookey Antiques and Estates",
      address: "8959 Dayton Pike, Soddy-Daisy, TN 37379",
      hours: "Sun 10AM-5PM, Mon 10AM-6PM, Tues-Thurs 10AM-5PM, Fri-Sat 10AM-6PM",
      websiteURL: "https://www.facebook.com/profile.php?id=61555409485553",
      websiteName: "Facebook Page",
    },
    // Pin 38: Paniagua Auto Sales III Inc.
    {
      coords: [34.7784422, -84.9649083],
      image: "/images/Bitcoin Businesses/Paniagua Auto Sales/Paniagua Auto Sales.jpg",
      name: "Paniagua Auto Sales III Inc.",
      address: "527 N Glenwood Ave, Dalton, GA 30721",
      phone: "706-529-6412",
      hours: "Mon-Fri 10AM-6PM, Sat 10AM-4PM",
      websiteURL: "http://www.paniaguausedcars.com/",
      websiteName: "PaniaguaUsedCars.com",
    },
    // Pin 39: Clipped by Richyurr
    {
      coords: [34.9194847, -85.1274633],
      name: "Clipped by Richyurr",
      address: "6702 US-41, Ringgold, GA 30736",
    },
    // Pin 40: Cherrybark Rental
    {
      coords: [35.120227, -85.060369],
      name: "Cherrybark Rental",
      address: "9070 Knolling Loop, Ooltewah, TN 37363",
    },
    // Pin 41: We R Booth Co
    {
      coords: [35.1356679, -85.0550129],
      name: "We R Booth Co",
      address: "8432 Cherrybark Ln, Ooltewah, TN 37363",
    },
  ];

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  for (var m = 0; m < markers.length; m++) {
    var markerString = "";

    if (markers[m].image !== undefined) {
      markerString +=
        '<img src="' + markers[m].image + '" style="width: 100px;"><br>';
    }
    if (markers[m].name !== undefined) {
      markerString += "<b>" + markers[m].name + "</b><br>";
    }
    if (markers[m].address !== undefined) {
      markerString += "<b>Address:</b> " + markers[m].address + "<br>";
    }
    if (markers[m].phone !== undefined) {
      markerString += "<b>Phone:</b> " + markers[m].phone + "<br>";
    }
    if (markers[m].hours !== undefined) {
      markerString += "<b>Hours:</b> " + markers[m].hours + "<br>";
    }
    if (
      markers[m].websiteURL !== undefined &&
      markers[m].websiteName !== undefined
    ) {
      markerString +=
        '<b>Website:</b> <a href="' +
        markers[m].websiteURL +
        '" target="_blank">' +
        markers[m].websiteName +
        "</a>";
    }

    L.marker(markers[m].coords, { icon: businessIcon })
      .addTo(map)
      .bindPopup(markerString);
  }
}