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

<!-- The table will be generated here by JavaScript -->
<div class="business-table-wrapper">
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

<br>

### If you own a business and already accept bitcoin, fill out this form and we'll add your business to the map!

</div>

<!-- Business submission form -->
<form id="business-form" class="business-form" action="https://formsubmit.co/d102e88eea9604b3922972d184399313" method="POST" enctype="multipart/form-data" target="_blank">

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
