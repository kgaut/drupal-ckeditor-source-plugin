/**
 * @file
 * Plugin definition and settings.
 */

(function () {
  'use strict';
  CKEDITOR.plugins.add('sourceit', {
    icon: 'sourceit',
    init: function (editor) {
      editor.ui.addButton('sourceit', {
        label: 'Insert a source link',
        icon: this.path + 'images/sourceit.png',
        command: 'sourceIt'
      });

      editor.addCommand('sourceIt', new CKEDITOR.dialogCommand('sourceIt'));

      CKEDITOR.dialog.add('sourceIt', this.path + 'dialogs/sourceIt.js');

      var cssPath = this.path + 'sourceit.css';

      editor.on('instanceReady', function () {
        this.document.appendStyleSheet(cssPath);
      });

    }
  });
})();
