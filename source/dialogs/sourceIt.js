/**
 * @file
 * Plugin functions.
 */

CKEDITOR.dialog.add('sourceIt', function (editor) {
  'use strict';
  return {
    title: 'Add a source',
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
            validate: CKEDITOR.dialog.validate.notEmpty( "The source title cannot be empty." ),
          },
          {
            type: 'text',
            id: 'source_url',
            label: 'Source URL',
            validate: CKEDITOR.dialog.validate.notEmpty( "The source title cannot be empty." ),
          },
        ]
      }
    ],
    onOk: function () {
      var dialog = this;
      var source_title = dialog.getValueOf('tab-basic', 'source_title');
      var source_url = dialog.getValueOf('tab-basic', 'source_url');
      if (source_url.trim() !== "") {
        var markup = '<a href="'+source_url+'" title="'+source_title+'" class="wysiwyg_source"></a>';
      }
      else {
        var markup = '<span title="'+source_title+'" class="wysiwyg_source"></span>';
      }
      editor.insertHtml(markup);
    }
  };
});
