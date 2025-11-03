+++
date = '2025-03-06T07:27:26-05:00'
draft = false
title = 'New to Bitcoin?'
+++

<div class="article">

<h1 style="text-align:center">New to Bitcoin?</h1>

<h2 style="text-align:center">You’ve come to the right place!</h2>

<h2 style="text-align:center">Start by watching this video:</h2>

<br>

<iframe width="800" height="450" src="https://www.youtube.com/embed/VeU0bwcIZJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

<h2 style="text-align:center">Schedule a 1-on-1 meeting with Jason, and get started with Bitcoin!</h2>

<br>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site with Cal Scheduler</title>
  <style>
    /* Optional – make the button look nice */
    .cal-trigger {
      display: inline-block;
      padding: 12px 24px;
      background: #ff9900;
      color: #111213;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
    }
    .cal-trigger:hover { opacity: 0.9; }
  </style>
</head>
<body>

  <button class="cal-trigger"
          data-cal-link="bitcoinchatt/consultation"
          data-cal-namespace="consultation"
          data-cal-config='{"layout":"month_view","theme":"dark"}'>
    Book a Consultation
  </button>

  <script type="text/javascript">
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialise the namespace
    Cal("init", "consultation", {origin:"https://app.cal.com"});

    // UI styling (dark theme, orange brand colour, month view)
    Cal.ns.consultation("ui", {
      "theme":"dark",
      "cssVarsPerTheme":{
        "light":{"cal-brand":"#111213"},
        "dark":{"cal-brand":"#ff9900"}
      },
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  </script>
</body>

<br>

</div>
