/**
 * @file
 * Plugin definition and settings.
 */

(function () {
  'use strict';
  CKEDITOR.plugins.add('source', {
    icon: 'source',
    init: function (editor) {

      // Register the toolbar buttons.
      editor.ui.addButton('source', {
        label: Drupal.t('Insert a source link'),
        icon: this.path + 'images/source.png',
        command: 'sourceIt'
      });

      var cssPath = this.path + 'source.css';

      editor.on('instanceReady', function () {
        this.document.appendStyleSheet(cssPath);
      });
      editor.addCommand('sourceIt', new CKEDITOR.dialogCommand('sourceIt'));

      CKEDITOR.dialog.add('sourceIt', this.path + 'dialogs/sourceIt.js');
    }
  });
})();
