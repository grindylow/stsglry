Ext.define('StsGlry.controller.Coordinator', {
  extend: 'Ext.app.Controller',
  init: function() {
    this.control({
      'treepanel': { 
	itemclick: this.onItemClick
      }
    });
  },
  onItemClick: function(view, record, item, index, e, eOpts) {
    alert("this.onItemClick()!"+record.data.id);
    console.log(view);
    console.log(record);
    // @todo Tell our File View about the changed folder
  }
});

