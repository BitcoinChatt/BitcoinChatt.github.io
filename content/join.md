+++
date = '2025-05-02T07:27:26-05:00'
draft = false
underConstruction = false
title = 'Join'
+++

<center>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type="text/css">
    @import url("https://assets.mlcdn.com/fonts.css?version=1753872");
    
  /* General Reset */
    * {
      box-sizing: border-box;
    }

  /* Loader Animation */
    .ml-form-embedSubmitLoad {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
    .ml-form-embedSubmitLoad:after {
      content: " ";
      display: block;
      width: 11px;
      height: 11px;
      margin: 1px;
      border-radius: 50%;
      border: 4px solid #fff;
      border-color: #fff #fff #fff transparent;
      animation: ml-form-embedSubmitLoad 1.2s linear infinite;
    }
    @keyframes ml-form-embedSubmitLoad {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

  /* reCAPTCHA Scaling */
    .g-recaptcha {
      transform: scale(1);
      transform-origin: 0 0;
    }
    @media screen and (max-width: 480px) {
      .ml-form-recaptcha {
        width: 220px !important;
      }
      .g-recaptcha {
        transform: scale(0.78);
        transform-origin: 0 0;
      }
    }

  /* Screen Reader Only */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }

  /* Form Container */
    #mlb2-25662429.ml-form-embedContainer {
      display: table;
      margin: 0 auto;
      width: 100% !important;
    }
    .ml-form-embedWrapper {
      background-color: #111213;
      border: 4px solid #FF9900;
      border-radius: 40px;
      display: inline-block !important;
      margin: 0;
      padding: 0;
      position: relative;
    }
    .ml-form-embedWrapper.embedDefault,
    .ml-form-embedWrapper.embedPopup {
      width: 600px;
    }
    .ml-form-embedWrapper.embedForm {
      max-width: 600px;
      width: 100%;
    }
    @media only screen and (max-width: 600px) {
      .ml-form-embedWrapper.embedDefault,
      .ml-form-embedWrapper.embedPopup {
        width: 100% !important;
      }
    }

  /* Form Content */
    .ml-form-embedBody,
    .ml-form-successBody {
      padding: 20px 20px 0;
    }
    .ml-form-embedContent,
    .ml-form-successContent {
      text-align: center;
      margin: 0 0 20px 0;
    }
    .ml-form-embedContent h4,
    .ml-form-successContent h4 {
      color: #FFF;
      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
      font-size: 30px;
      font-weight: 400;
      margin: 0 0 10px 0;
      word-break: break-word;
    }
    .ml-form-embedContent p,
    .ml-form-successContent p {
      color: #FFF;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin: 0 0 10px 0;
    }
    .ml-form-embedContent p a,
    .ml-form-successContent p a {
      color: #ff9416;
      text-decoration: underline;
    }

  /* Form Fields */
    .ml-form-fieldRow,
    .ml-form-formContent,
    .ml-form-checkboxRow,
    .ml-form-interestGroupsRow {
      margin: 0 0 20px 0;
      width: 100%;
    }
    .ml-form-fieldRow.ml-last-item {
      margin: 0;
    }
    .ml-form-fieldRow input,
    .ml-form-fieldRow textarea,
    .ml-form-fieldRow .custom-select {
      background-color: #fff !important;
      color: #000 !important;
      border: 3px solid #FF9900 !important;
      border-radius: 25px !important;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px !important;
      line-height: 21px !important;
      padding: 10px !important;
      width: 100% !important;
      margin: 0;
    }
    .ml-form-fieldRow input::placeholder {
      color: #000;
    }
    .ml-form-fieldRow .custom-select {
      background: url('https://assets.mlcdn.com/ml/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;
      padding-right: 28px !important;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

  /* Checkboxes and Radios */
    .ml-form-checkboxRow input[type="checkbox"],
    .ml-form-fieldRow .custom-radio .custom-control-input,
    .ml-form-fieldRow .custom-checkbox .custom-control-input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      margin: 5px 0 0 -1.5rem;
    }
    .ml-form-checkboxRow .label-description,
    .ml-form-fieldRow .custom-checkbox .custom-control-label,
    .ml-form-fieldRow .custom-radio .custom-control-label,
    .ml-form-interestGroupsRowCheckbox .label-description {
      color: #FFF;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      line-height: 22px;
      font-weight: 700;
      position: relative;
      padding-left: 24px;
      margin: 0;
    }
    .ml-form-interestGroupsRowCheckbox .description {
      color: #FFF;
      font-size: 10px;
      font-style: italic;
      font-weight: 400;
      line-height: 16px;
      margin: 5px 0 0;
    }
    .ml-form-checkboxRow label,
    .ml-form-interestGroupsRowCheckbox label {
      display: block;
      min-height: 24px;
      padding-left: 24px;
    }
    .custom-control-label::before,
    .ml-form-checkboxRow .label-description::before,
    .ml-form-interestGroupsRowCheckbox .label-description::before {
      position: absolute;
      top: 4px;
      left: -1.5rem;
      width: 16px;
      height: 16px;
      content: "";
      background-color: #fff;
      border: 1px solid #adb5bd;
      border-radius: 50%;
    }
    .custom-checkbox .custom-control-label::before,
    .ml-form-checkboxRow .label-description::before {
      border-radius: 4px !important;
    }
    .custom-control-label::after,
    .ml-form-checkboxRow .label-description::after,
    .ml-form-interestGroupsRowCheckbox .label-description::after {
      position: absolute;
      top: 2px;
      left: -1.5rem;
      width: 1rem;
      height: 1rem;
      content: "";
      background: no-repeat 50%/50% 50%;
    }
    .custom-checkbox .custom-control-input:checked~.custom-control-label::before,
    .ml-form-checkboxRow input[type="checkbox"]:checked~.label-description::before,
    .ml-form-interestGroupsRowCheckbox input[type="checkbox"]:checked~.label-description::before {
      border-color: #FF9900 !important;
      background-color: #000 !important;
    }
    .custom-checkbox .custom-control-input:checked~.custom-control-label::after,
    .ml-form-checkboxRow input[type="checkbox"]:checked~.label-description::after,
    .ml-form-interestGroupsRowCheckbox input[type="checkbox"]:checked~.label-description::after {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    .custom-radio .custom-control-input:checked~.custom-control-label::after {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }

  /* Submit Button */
    .ml-form-embedSubmit button {
      background-color: #FF9900 !important;
      border: none !important;
      border-radius: 25px !important;
      color: #fff !important;
      cursor: pointer;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px !important;
      font-weight: 700 !important;
      line-height: 21px !important;
      padding: 10px !important;
      width: 100% !important;
    }
    .ml-form-embedSubmit button:hover {
      background-color: #FFCE07 !important;
    }
    .ml-form-embedSubmit button.loading {
      display: none;
    }
    .ml-form-embedSubmit {
      margin: 0 0 20px 0;
      width: 100%;
    }

  /* Error States */
    .ml-error input,
    .ml-error textarea,
    .ml-error select {
      border-color: red !important;
    }
    .ml-error .custom-checkbox-radio-list {
      border: 1px solid red !important;
      border-radius: 40px;
      padding: 10px;
    }
    .ml-error .label-description,
    .ml-error .label-description p,
    .ml-error .label-description p a,
    .ml-error label:first-child {
      color: #ff0000 !important;
    }

  /* Horizontal Form Layout */
    .ml-form-formContent.horozintalForm {
      float: left;
    }
    .ml-form-horizontalRow {
      height: auto;
      width: 100%;
      float: left;
    }
    .ml-form-horizontalRow .ml-input-horizontal {
      width: 70%;
      float: left;
    }
    .ml-form-horizontalRow .ml-button-horizontal {
      width: 30%;
      float: left;
    }
    .ml-form-horizontalRow .ml-button-horizontal.labelsOn {
      padding-top: 25px;
    }
    .ml-form-horizontalRow .horizontal-fields {
      float: left;
      padding-right: 10px;
    }
    @media only screen and (max-width: 600px) {
      .ml-form-formContent.horozintalForm,
      .ml-form-horizontalRow,
      .ml-form-horizontalRow .ml-input-horizontal,
      .ml-form-horizontalRow .ml-button-horizontal {
        width: 100% !important;
      }
      .ml-form-horizontalRow .ml-input-horizontal > div {
        padding-right: 0 !important;
        padding-bottom: 10px;
      }
      .ml-form-horizontalRow .ml-button-horizontal.labelsOn {
        padding-top: 0 !important;
      }
    }

  /* Close Button */
    .ml-subscribe-close {
      width: 30px;
      height: 30px;
      background: url('https://assets.mlcdn.com/ml/images/default/modal_close.png') no-repeat;
      background-size: 30px;
      cursor: pointer;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  </style>
</head>
<body>
  <div id="mlb2-25662429" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-25662429">
    <div class="ml-form-align-center">
      <div class="ml-form-embedWrapper embedForm">
        <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
          <div class="ml-form-embedContent">
            <h4>Join Bitcoin Chattanooga</h4>
            <p>
              <span style="font-size: 16px;">
                Membership is <strong>free</strong>, and you'll get weekly (<em>at most</em>) 
                <a href="https://www.bitcoinchatt.org/blog/">blog</a> posts, news, and announcements 
                straight to your email inbox.
              </span>
            </p>
          </div>
          <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/1502763/forms/153678193931322867/subscribe" method="post" target="_blank">
            <div class="ml-form-formContent">
              <div class="ml-form-fieldRow">
                <div class="ml-field-group ml-field-name ml-validate-required">
                  <input aria-label="name" aria-required="true" type="text" class="form-control" name="fields[name]" placeholder="Name" autocomplete="given-name">
                </div>
              </div>
              <div class="ml-form-fieldRow ml-last-item">
                <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                  <input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email">
                </div>
              </div>
            </div>
            <div class="ml-form-interestGroupsRow ml-block-groups ml-validate-required">
              <div class="ml-form-interestGroupsRowCheckbox group" style="display:none;">
                <label>
                  <input type="hidden" name="groups[]" value="153678219903501707" checked="checked">
                  <div class="label-description">All Members</div>
                </label>
              </div>
              <div class="ml-form-interestGroupsRowCheckbox group">
                <label>
                  <input type="checkbox" name="groups[]" value="153678240500679990">
                  <div class="label-description">I'm a Business Owner</div>
                </label>
              </div>
              <div class="ml-form-interestGroupsRowCheckbox last-group">
                <label>
                  <input type="checkbox" name="groups[]" value="153678307630515370">
                  <div class="label-description">I'm New to Bitcoin</div>
                </label>
              </div>
            </div>
            <div class="ml-form-recaptcha ml-validate-required">
              <script src="https://www.google.com/recaptcha/api.js"></script>
              <div class="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
            </div>
            <input type="hidden" name="ml-submit" value="1">
            <input type="hidden" name="anticsrf" value="true">
            <div class="ml-form-embedSubmit">
              <button type="submit" class="primary">Subscribe</button>
              <button disabled="disabled" style="display: none;" type="button" class="loading">
                <div class="ml-form-embedSubmitLoad"></div>
                <span class="sr-only">Loading...</span>
              </button>
            </div>
          </form>
        </div>
        <div class="ml-form-successBody row-success" style="display: none">
          <div class="ml-form-successContent">
            <h4>Welcome aboard!</h4>
            <p>
              <span style="font-size: 16px;">
                Expect our newsletter, <em>The Bitcoin Chatt</em>, every Saturday morning.
              </span>
            </p>
            <p>
              <span style="font-size: 16px;">
                If you have any questions, please message us on our 
                <a href="https://www.bitcoinchatt.org/contact/">Contact</a> page, 
                and we'll do our best to reply within 24 hours.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"></script>
  <script>
    function ml_webform_success_25662429() {
      var $ = ml_jQuery || jQuery;
      $('.ml-subscribe-form-25662429 .row-success').show();
      $('.ml-subscribe-form-25662429 .row-form').hide();
    }
    fetch("https://assets.mailerlite.com/jsonp/1502763/forms/153678193931322867/takel");
  </script>
</body>
</html>
</center>
