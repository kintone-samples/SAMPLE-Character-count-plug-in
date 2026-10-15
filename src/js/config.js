/*
MIT License
Copyright (c) 2018 Cybozu
https://github.com/kintone/SAMPLE-Character-count-plug-in/blob/master/LICENSE
*/

jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  // Get configuration settings
  const CONF = kintone.plugin.app.getConfig(PLUGIN_ID);

  const $form = $('.js-submit-settings');
  const $cancelButton = $('.js-cancel-button');
  const $selectBody = $('select[name="js-select_body_field"]');
  const $selectCount = $('select[name="js-select_count_field"]');

  function escapeHtml(htmlstr) {
    return htmlstr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function setDropDown() {
    // Retrieve field information, then set drop-down
    return kintone.app.getFormFields().then((resp) => {
      for (const key in resp) {
        if (!resp.hasOwnProperty(key)) {
          continue;
        }
        const respField = resp[key];
        const $option = $('<option>');
        switch (respField.type) {
          case 'MULTI_LINE_TEXT':
            $option.attr('value', respField.code);
            $option.text(escapeHtml(respField.label));
            $selectBody.append($option.clone());
            break;
          case 'NUMBER':
            $option.attr('value', respField.code);
            $option.text(escapeHtml(respField.label));
            $selectCount.append($option.clone());
            break;
          default:
            break;
        }
      }
      // Set default values
      $selectBody.val(CONF.body);
      $selectCount.val(CONF.count);
    }).catch((err) => {
      return alert('Failed to retrieve field information');
    });
  }
  $(document).ready(function() {
    // Set drop-down list
    setDropDown();
    // Set input values when 'Save' button is clicked
    $form.on('submit', function(e) {
      const config = {};
      e.preventDefault();

      config.body = $selectBody.val();
      config.count = $selectCount.val();

      kintone.plugin.app.setConfig(config, function() {
        alert('The plug-in settings have been saved. Please update the app!');
        window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId();
      });
    });

    // Process when 'Cancel' is clicked
    $cancelButton.on('click', function() {
      window.location.href = '/k/admin/app/' + kintone.app.getId() + '/plugin/';
    });
  });
})(jQuery, kintone.$PLUGIN_ID);
