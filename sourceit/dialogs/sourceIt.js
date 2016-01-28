/**
 * @file
 * Plugin functions.
 */

CKEDITOR.dialog.add('sourceIt', function (editor) {
  'use strict';
  return {
    title: 'Add a sourceit',
    minWidth: 400,
    minHeight: 200,
    contents: [
      {
        id: 'tab-basic',
        label: 'Basic Settings',
        elements: [
          {
            type: 'text',
            id: 'source_title',
            label: 'Title',
            validate: CKEDITOR.dialog.validate.notEmpty( "The sourceit title cannot be empty." )
          },
          {
            type: 'text',
            id: 'source_url',
            label: 'Source URL'
          }
        ]
      }
    ],
    onOk: function () {
      var dialog = this;
      var source_title = dialog.getValueOf('tab-basic', 'source_title');
      var source_url = dialog.getValueOf('tab-basic', 'source_url');
      var markup = '';
      if (source_url.trim() !== "") {
        markup = '<a href="'+source_url+'" title="'+source_title+'" class="wysiwyg_source" target="_blank">?</a>';
      }
      else {
        markup = '<a href="#" title="'+source_title+'" class="wysiwyg_source">?</a>';
      }
      editor.insertHtml(markup);
    }
  };
});
