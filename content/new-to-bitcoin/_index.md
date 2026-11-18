+++
date = '2025-03-06T07:27:26-05:00'
draft = false
title = 'New to Bitcoin?'
+++

<div class="article">

<h1 style="text-align:center">New to Bitcoin?</h1>

<h2 style="text-align:center">You’ve come to the right place!</h2>

<h3 style="text-align:center">Start by watching these videos:</h3>

<br>

<!-- Swiper CSS + JS (CDNs - no files to upload) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<style>
  .shorts-carousel {
    max-width: 380px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    max-width: 360px;
    padding-top: 177.78%;
    height: 0;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    cursor: pointer;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  .play-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65px;
    height: 65px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    pointer-events: none;
  }
  .play-overlay::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 20px solid #fff;
    margin-left: 4px;
  }

  /* PERMANENTLY LOCK NAVIGATION ARROWS IN PLACE */
  .swiper-button-next,
  .swiper-button-prev {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    color: #ffffff !important;
    width: 45px !important;
    height: 45px !important;
    border-radius: 50% !important;
    top: 50% !important;
    margin-top: -22px !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4) !important;
    z-index: 9999 !important;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 22px !important;
    font-weight: bold;
    color: #ffffff !important;
  }
</style>

<div class="shorts-carousel">
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <!-- Video 1 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/zv_4Qc3YnOY/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/zv_4Qc3YnOY?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 2 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/pdxunE_-kLI/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/pdxunE_-kLI?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 3 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/UM83VmFN0Hk/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/UM83VmFN0Hk?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 4 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/5i6JXEWVxiY/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/5i6JXEWVxiY?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 5 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/6d2WrRjlzSY/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/6d2WrRjlzSY?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 6 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/4r7Ne6JxvkE/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/4r7Ne6JxvkE?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 7 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/LFuhHB_HTyU/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/LFuhHB_HTyU?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 8 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/K_E_aNoj3TQ/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/K_E_aNoj3TQ?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 9 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/ABdN5u4JDKI/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/ABdN5u4JDKI?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
      <!-- Video 10 -->
      <div class="swiper-slide">
        <div class="video-wrapper" style="background-image: url('https://img.youtube.com/vi/JxSlfBaGymg/hqdefault.jpg');" 
             onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/JxSlfBaGymg?autoplay=1&enablejsapi=1\' title=\'YouTube Short\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen></iframe>'">
          <div class="play-overlay"></div>
        </div>
      </div>
    </div>
    <!-- Navigation arrows + pagination -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</div>

<script>
  (function() {
    function initShortsCarousel() {
      if (typeof Swiper === 'undefined') {
        setTimeout(initShortsCarousel, 50);
        return;
      }
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        allowTouchMove: true,
        loop: false,
        rewind: true,
        on: {
          slideChange: function (swiperInstance) {
            const currentIndex = swiperInstance.realIndex;
            document.querySelectorAll('.video-wrapper iframe').forEach((iframe, index) => {
              if (index !== currentIndex && iframe.contentWindow) {
                iframe.contentWindow.postMessage(
                  JSON.stringify({
                    event: 'command',
                    func: 'pauseVideo',
                    args: []
                  }),
                  '*'
                );
              }
            });
          }
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initShortsCarousel);
    } else {
      initShortsCarousel();
    }
  })();
</script>

<br>

<h2 style="text-align:center">Confused by new Bitcoin jargon? Check out our <a href="https://www.bitcoinchatt.com/new-to-bitcoin/glossary/">Glossary</a> of common Bitcoin terms!</h2>

<br>

<a target="_blank" href="https://satsman.com?ref=geekigai"><img class="mobile-banner satsman-banner" src="/new-to-bitcoin/Banner.png" style="width:40dvw;display:block;margin:0 auto;"></a>

<h2 style="text-align:center">Get personalized assistance with Bitcoin!</h2>

<br>

<!-- Cal inline embed code begins -->
<div id="my-cal-inline-onboarding"></div>
<script type="text/javascript">
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "onboarding", {origin:"https://app.cal.com"});
Cal.ns.onboarding("inline", {
elementOrSelector:"#my-cal-inline-onboarding",
config: {"layout":"month_view"},
calLink: "bitcoinchatt/onboarding",
});
Cal.ns.onboarding("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#111213"},"dark":{"cal-brand":"#ff9900"}},"hideEventTypeDetails":false,"layout":"month_view"});
</script>
<!-- Cal inline embed code ends -->

</div>
