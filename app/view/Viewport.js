Ext.define('StsGlry.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'border',
  items: [
	  {   region: 'center',
	      title: 'Hello Ext',
	      html : 'Hello! Welcome to Ext JS.'
	  },
	  {   region: 'west',
	      title: 'Folders',
	      //html : 'Browse folders here.',
	      split: true,  /* grabable divider */
	      collapsible: true, /* can collapse (funny little arrow) */
	      xtype: 'treepanel',
	      width: 150,
		  height: 150,
		  store: 'MyFolderStore'
	  }
  ]
});
