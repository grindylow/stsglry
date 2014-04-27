Ext.define('StsGlry.store.MyImageStore', {
    extend: 'Ext.data.Store',
    requires: 'StsGlry.model.Image',
    model: 'StsGlry.model.Image',
    data: [],
    /*
      data: [
      { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
      { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
      { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
      { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' }
      ],
    */

    // Overriding the model's default proxy
    proxy: {
	type: 'ajax',
	//url: 'data/retrievethumbnails.json',
	url: 'server/retrievethumbnails.php',
	extraParams: { 'path':'./extjs'
		     },
	reader: {
	    type: 'json',
	    // success: 'success' // is default
	    root: 'results'
	}
    }
});
