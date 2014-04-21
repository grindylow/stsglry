Ext.application({
    name: 'StsGlry',
    autoCreateViewport: true,
    stores: ['MyFolderStore'],
    models: ['Folder'],
    controllers: ['Coordinator'],
    launch: function() {
	    // nothing much
    }
});

