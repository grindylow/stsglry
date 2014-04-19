// A MyFolderStore stores many Folders, eventually
// this store will be populated by the server.
// Right now, we're simply loading static data.

Ext.define('StsGlry.store.MyFolderStore', {
  extend: 'Ext.data.TreeStore',
  root: {
    text: 'Root',
    expanded: true,
    children: [
	       {
	       text: 'Child 1',
		   leaf: true
	       },
	       {
	       text: 'Child 2',
		   leaf: true
	       }
	      ]
  }
	    /*
  requires: 'StsGlry.model.Folder',
  model: 'StsGlry.model.Folder',

  // Overriding the model's default proxy
  proxy: {
    type: 'ajax',
    url: 'data/retrievefolders.json',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
	    */
});
