// A MyFolderStore stores many Folders, eventually
// this store will be populated by the server.
// Right now, we're simply loading static data.

Ext.define('StsGlry.store.MyFolderStore', {
  extend: 'Ext.data.TreeStore',
	    title: 'GrillTitle',
	    /*
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
*/
  requires: 'StsGlry.model.Folder',
  model: 'StsGlry.model.Folder',
  root: {
	    //id: 'RootId',
	    //name: 'RootFolder',
	    text: 'RootTextFix2',
		id: '.'
		//expanded: true,
		/*
    children: [
	       {
		   id: 22,
	       text: 'Child 1' 
	       },
	       {
		   id: 23,
	       text: 'Child 2',
		   leaf: true
	       }
	      ]
		*/
  },
  // Overriding the model's default proxy
  proxy: {
    type: 'ajax',
    //url: 'data/retrievefolders.json',
    url: 'server/retrievefolders.php',
    reader: {
		type: 'json',
		    // success: 'success' // is default
		root: 'results'
    }
  }
});
