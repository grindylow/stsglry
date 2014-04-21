// A folder in our "Browse Directories" tree panel

Ext.define('StsGlry.model.Folder', {
  extend: 'Ext.data.Model',
  fields: [
           { name:'id', type: 'string' },
           { name:'text', type: 'string' }
          ]
});
