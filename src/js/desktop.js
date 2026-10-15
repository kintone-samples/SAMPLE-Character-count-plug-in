/*
 * This sample code counts the number of characters in a text field.
 * Spaces in the text field are excluded from the count.
 * The final count value is set into a number field.
 * Copyright (c) 2018 Cybozu
 *
 * Licensed under the MIT License
 */
(function(PLUGIN_ID) {
  'use strict';

  // Get plug-in configuration settings
  const CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID);

  // Get each settings
  if (!CONFIG) {
    return false;
  }

  const CONFIG_BODY = CONFIG.body;
  const CONFIG_COUNT = CONFIG.count;

  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit', 'app.record.index.edit.submit'],
    function(event) {
      // Obtain characters in the text field
      const rec = event.record;
      const st = rec[CONFIG_BODY].value;

      // If the number of characters is zero, put zero in number field and return
      if (!st) {
        rec[CONFIG_COUNT].value = 0;
        return event;
      }

      // Remove spaces
      const st2 = st.replace(/\s+/g, '');

      // Enter character count into number field
      rec[CONFIG_COUNT].value = st2.length;

      return event;
    });
})(kintone.$PLUGIN_ID);
