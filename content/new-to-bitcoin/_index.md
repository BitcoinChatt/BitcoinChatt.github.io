+++
date = '2025-03-06T07:27:26-05:00'
draft = false
title = 'New to Bitcoin?'
+++

<div class="article">

<h1 style="text-align:center">New to Bitcoin?</h1>

<h2 style="text-align:center">You’ve come to the right place!</h2>

<h3 style="text-align:center">Start by watching any of these video:</h3>

<br>

<!-- Swiper CSS + JS (CDNs - no files to upload) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<style>
  .shorts-carousel {
    max-width: 450px;           /* slightly wider to comfortably show small slices of prev/next */
    margin: 0 auto;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    max-width: 360px;           /* typical Short width */
    padding-top: 177.78%;       /* 9:16 vertical ratio for Shorts */
    height: 0;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>

<div class="shorts-carousel">
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <!-- Video 1 (default / first one shown) -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/zv_4Qc3YnOY" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 2 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/pdxunE_-kLI" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 3 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/UM83VmFN0Hk" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 4 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/5i6JXEWVxiY" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 5 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/6d2WrRjlzSY" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 6 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/4r7Ne6JxvkE" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 7 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/6G4T2HF1xaM" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 8 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/LFuhHB_HTyU" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <!-- Video 9 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/K_E_aNoj3TQ" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </di
      <!-- Video 10 -->
      <div class="swiper-slide">
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/ABdN5u4JDKI" 
                  title="YouTube Short" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <!-- Navigation Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</div>

<script>
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.2,        /* shows 1 full Short + small slice of prev/next on each side */
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
</script>


<br>

<h2 style="text-align:center">Schedule a 1-on-1 meeting to get started with Bitcoin!</h2>

<br>

<!-- Cal inline embed code begins -->
<div id="my-cal-inline-consultation"></div>
<script type="text/javascript">
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "consultation", {origin:"https://app.cal.com"});
Cal.ns.consultation("inline", {
elementOrSelector:"#my-cal-inline-consultation",
config: {"layout":"month_view"},
calLink: "bitcoinchatt/consultation",
});
Cal.ns.consultation("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#111213"},"dark":{"cal-brand":"#ff9900"}},"hideEventTypeDetails":false,"layout":"month_view"});
</script>
  <!-- Cal inline embed code ends -->

<br>

<a target="_blank" href="https://satsman.com?ref=geekigai"><img class="mobile-banner" src="/new-to-bitcoin/Banner.png" style="width:40dvw;display:block;margin:0 auto;"></a>

<br>

<h2 style="text-align:center">Have questions? Check out our <a href="https://www.BitcoinChatt.com/faq">F.A.Q.s</a>!</h2>

<br>

</div>
