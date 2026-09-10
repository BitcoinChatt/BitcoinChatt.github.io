+++
date = '2025-02-19T07:27:26-05:00'
draft = false
title = 'Map'
+++

<div style="text-align:center;">

# Bitcoin Businesses Map

<br>

<div id="map"></div>

<br>

</div>

<div class="article" style="text-align:center;">

### These are all the businesses in the Chattanooga area that accept bitcoin. Select any of them for details.

</div>

<style>
  /* Map-page table styles – scoped and high-priority for desktop */
  #business-table-window {
    display: block !important;
    box-sizing: border-box !important;
    max-width: 900px !important;
    width: 100% !important;
    height: 500px !important;
    margin: 0.75rem auto 1.25rem !important;
    padding: 0 !important;
    overflow: auto !important;
    border-radius: 8px !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    background-color: #1a1a1a !important;
  }

  #business-table-window #business-table {
    width: 100% !important;
    max-width: 100% !important;
    border-collapse: separate !important; /* required for sticky header */
    border-spacing: 0 !important;
    font-size: 0.88rem !important;
    color: #F1F5F9 !important;
    table-layout: fixed !important;
  }

  #business-table-window #business-table thead th {
    position: sticky !important;
    top: 0 !important;
    z-index: 5 !important;
    background-color: #161616 !important;
    padding: 0.8rem 0.65rem !important;
    text-align: left !important;
    font-weight: 600 !important;
    border-bottom: 2px solid rgba(255, 148, 22, 0.55) !important;
    white-space: nowrap !important;
  }

  #business-table-window #business-table th[data-sort] {
    cursor: pointer !important;
    user-select: none !important;
  }

  #business-table-window #business-table th[data-sort]:hover {
    color: #ff9416 !important;
  }

  #business-table-window #business-table td {
    padding: 0.65rem !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
    vertical-align: top !important;
    word-wrap: break-word !important;
  }

  /* Column widths */
  #business-table-window #business-table th:nth-child(1),
  #business-table-window #business-table td:nth-child(1) { width: 22% !important; }
  #business-table-window #business-table th:nth-child(2),
  #business-table-window #business-table td:nth-child(2) { width: 13% !important; }
  #business-table-window #business-table th:nth-child(3),
  #business-table-window #business-table td:nth-child(3) { width: 27% !important; }
  #business-table-window #business-table th:nth-child(4),
  #business-table-window #business-table td:nth-child(4) { width: 14% !important; }
  #business-table-window #business-table th:nth-child(5),
  #business-table-window #business-table td:nth-child(5) { width: 16% !important; }
  #business-table-window #business-table th:nth-child(6),
  #business-table-window #business-table td:nth-child(6) { width: 8% !important; }

  /* Alternating rows – color the cells so it always shows */
  #business-table-window #business-table tbody tr:nth-child(odd) td {
    background-color: #1e1e1e !important;
  }
  #business-table-window #business-table tbody tr:nth-child(even) td {
    background-color: #2a2a2a !important;
  }
  #business-table-window #business-table tbody tr:hover td {
    background-color: #333333 !important;
  }

  /* Website links */
  #business-table-window #business-table a {
    color: #ff9416 !important;
  }
  #business-table-window #business-table a:hover {
    text-decoration: underline !important;
  }

  /* Clickable business names */
  #business-table-window .business-name-link {
    color: #F1F5F9 !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    text-decoration: none !important;
    border-bottom: 1px solid transparent;
    transition: color 0.15s ease, border-color 0.15s ease;
  }
  #business-table-window .business-name-link:hover {
    color: #ff9416 !important;
    border-bottom-color: #ff9416 !important;
  }

  /* Mobile adjustments */
  @media only screen and (max-width: 900px) {
    #business-table-window {
      height: 55dvh !important;
    }
    #business-table-window #business-table {
      font-size: 0.78rem !important;
      width: 720px !important;
      min-width: 720px !important;
    }
    #business-table-window #business-table th:nth-child(1),
    #business-table-window #business-table td:nth-child(1) { width: 150px !important; }
    #business-table-window #business-table th:nth-child(2),
    #business-table-window #business-table td:nth-child(2) { width: 95px !important; }
    #business-table-window #business-table th:nth-child(3),
    #business-table-window #business-table td:nth-child(3) { width: 180px !important; }
    #business-table-window #business-table th:nth-child(4),
    #business-table-window #business-table td:nth-child(4) { width: 110px !important; }
    #business-table-window #business-table th:nth-child(5),
    #business-table-window #business-table td:nth-child(5) { width: 130px !important; }
    #business-table-window #business-table th:nth-child(6),
    #business-table-window #business-table td:nth-child(6) { width: 55px !important; }
  }
</style>

<div id="business-table-window" class="business-table-wrapper">
  <table id="business-table">
    <thead>
      <tr>
        <th data-sort="name">Name ▼</th>
        <th data-sort="type">Type ▼</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Hours</th>
        <th>Website</th>
      </tr>
    </thead>
    <tbody id="business-table-body">
      <!-- Rows are inserted by JavaScript -->
    </tbody>
  </table>
</div>

<div class="article" style="text-align:center;">

<br>

### Own a business and want to start accepting bitcoin?

### Make sure to check out the [New to Bitcoin](/new-to-bitcoin) page, and set up a time to meet with Bitcoin Chattanooga's organizer, Jason, so he can help you get started.

</div>

<div class="article form-intro" style="text-align:center;">
  <h3>If you own a business and already accept bitcoin, fill out this form and we'll add your business to the map!</h3>
</div>

<!-- Business submission form -->
<form id="business-form" class="business-form" action="https://formsubmit.co/jason@bitcoinchatt.com" method="POST" enctype="multipart/form-data" target="_blank">

  <!-- FormSubmit helpers -->
  <input type="hidden" name="_subject" value="New Bitcoin Business Submission – Bitcoin Chatt">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_captcha" value="true">

  <!-- This will be filled by JavaScript with the ready-to-paste code -->
  <input type="hidden" name="ready_to_paste_code" id="ready-to-paste-code" value="">

  <div class="form-group">
    <input type="text" name="business_name" id="biz-name" class="form-control" placeholder="Business Name *" required>
  </div>

  <div class="form-group">
    <input type="text" name="type" id="biz-type" class="form-control" placeholder="Type (e.g. Restaurant, Barbershop, Retail Store) *" required>
  </div>

  <div class="form-group">
    <input type="text" name="address" id="biz-address" class="form-control" placeholder="Full Address *" required>
  </div>

  <div class="form-group">
    <input type="tel" name="phone" id="biz-phone" class="form-control" placeholder="Phone">
  </div>

  <div class="form-group">
    <input type="text" name="hours" id="biz-hours" class="form-control" placeholder="Hours (e.g. Mon-Fri 9AM-5PM)">
  </div>

  <div class="form-group">
    <input type="url" name="website" id="biz-website" class="form-control" placeholder="Website (https://...)">
  </div>

  <div class="form-group">
    <label for="photo" class="form-label">Upload Photo (optional)</label>
    <input type="file" name="photo" id="photo" class="form-control form-file" accept="image/*">
  </div>

  <div class="form-group">
    <textarea name="notes" id="biz-notes" class="form-control textarea" placeholder="Notes / Message for Jason only (optional)" rows="5"></textarea>
  </div>

  <button type="submit" class="form-button">Submit Business</button>

</form>

<div class="article" style="text-align:center;">
  <p class="form-helper-text">
    Fields marked with * are required. After submitting, you may be asked to complete a CAPTCHA.
  </p>
</div>
