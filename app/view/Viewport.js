var imageTpl = new Ext.XTemplate(
				 '<tpl for=".">',
				 '<div style="margin-bottom: 10px;" class="thumb-wrap">',
				 '<img src="{src}" />',
				 '<br/><span>{caption}</span>',
				 '</div>',
    '</tpl>'
				 );

Ext.define('StsGlry.view.MyThumbnails', {
	extend: 'Ext.view.View',
	    store: 'MyImageStore',
	    tpl: imageTpl,
	    itemSelector: 'div.thumb-wrap',
	    autoscroll: true,
	    cls: 'x-image-view',
      emptyText: 'No images available',
	    alias: 'widget.xmythumbnails'
	    });


Ext.define('StsGlry.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'border',
  items: [
	  {   region: 'center',
	      title: 'Hello Ext',
		  //html : 'Hello! Welcome to Ext JS.',
		  xtype: 'panel',
		  layout: 'fit',
		  region: 'center',
		  items: [
			  {   region: 'center',
			      xtype: 'xmythumbnails'
			  }
			 ]
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
