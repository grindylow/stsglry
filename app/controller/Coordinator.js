Ext.define('StsGlry.controller.Coordinator', {
    extend: 'Ext.app.Controller',

    stores: ['MyImageStore'],

    refs: [{
	// A component query
	selector: 'xmythumbnails',
	ref: 'thumbnailView'
    }],

    init: function() {
	this.control({
	    'treepanel': { 
		itemclick: this.onItemClick
	    }
	});
    },

    onLaunch: function() {
	this.getThumbnailView().refresh();
    },

    onItemClick: function(view, record, item, index, e, eOpts) {
	//alert("this.onItemClick()!"+record.data.id);
	console.log(view);
	console.log(record);
	// Tell our File View about the changed folder
	// we do this by telling the proxy responsibel
	// for loading our model's data:
	this.getMyImageStoreStore().getProxy().setExtraParam('path',record.data.id);
	this.getMyImageStoreStore().load({
	    scope: this,
	    callback: function(records, operation, success) {
		// the operation object
		// contains all of the details of the load operation
		console.log(records);
		console.log(operation);
	    }
	});
	this.getThumbnailView().refresh();
    }
});

