+++
date = '2025-03-06T07:27:26-05:00'
draft = false
title = 'New to Bitcoin?'
+++

<div class="article">

<h1 style="text-align:center">New to Bitcoin?</h1>

<h2 style="text-align:center">You’ve come to the right place!</h2>

<h3 style="text-align:center">Start by watching this video:</h3>

<br>

<iframe width="800" height="450" src="https://www.youtube.com/embed/VeU0bwcIZJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

<h2 style="text-align:center">Schedule a 1-on-1 meeting to get started with Bitcoin!</h2>

<br>

<body>
<!-- Centered inline Cal.com calendar -->
<div id="cal-container" style="max-width:850px; margin:0 auto; padding:20px;"></div>

<script type="text/javascript">
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal; let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {}; cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const ns = ar[1]; api.q = api.q || [];
        if (typeof ns === "string") {
          cal.ns[ns] = cal.ns[ns] || api;
          p(cal.ns[ns], ar); p(cal, ["initNamespace", ns]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  // Initialise namespace
  Cal("init", "consultation", {origin: "https://app.cal.com"});

  // UI configuration
  Cal.ns.consultation("ui", {
    theme: "dark",
    cssVarsPerTheme: {
      light: { "cal-brand": "#111213" },
      dark:  { "cal-brand": "#ff9900" }
    },
    hideEventTypeDetails: false,
    layout: "month_view"
  });

  // Render inline (wait for script load)
  function renderCal() {
    if (window.Cal && Cal.ns && Cal.ns.consultation) {
      Cal.ns.consultation("inline", "#cal-container");
    } else {
      setTimeout(renderCal, 100);
    }
  }
  renderCal();
</script>
</body>

<br>

<h2 style="text-align:center">Have questions? Check out our <a href="https://www.BitcoinChatt.com/faq">F.A.Q.s</a>!</h2>

<br>

</div>
