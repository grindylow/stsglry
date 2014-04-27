Ext.application({
    name: 'StsGlry',
    autoCreateViewport: true,
    stores: ['MyFolderStore','MyImageStore'],
    models: ['Folder','Image'],
    controllers: ['Coordinator'],
    launch: function() {
	// nothing much
    }
});

