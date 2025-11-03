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

<div id="cal-inline" style="max-width:800px; margin:0 auto; padding:20px;"></div>

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

  Cal("init", "consultation", {origin:"https://app.cal.com"});

  Cal.ns.consultation("ui", {
    "theme":"dark",
    "cssVarsPerTheme":{
      "light":{"cal-brand":"#111213"},
      "dark":{"cal-brand":"#ff9900"}
    },
    "hideEventTypeDetails":false,
    "layout":"month_view"
  });

  // Render the calendar inline inside #cal-inline
  Cal.ns.consultation("inline", "#cal-inline");
</script>

<br>

<h2 style="text-align:center">Have questions? Check out our <a href="https://www.BitcoinChatt.com/faq">F.A.Q.s</a>!</h2>

<br>

</div>
