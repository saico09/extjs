Ext.define('HolaMundo.controller.Mapas',{
    extend: 'Ext.app.Controller',

    views: [
        'AM.view.Simple'
    ],

    init: function(app) {
        console.log('Initialized!');
		var me = this;
		me.control({
		    'viewport #simpleMapId': {
                click: this.onClickSimpleMap
			}
		});
    },
    onClickSimpleMap: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        console.log('jeje');
        var panel = this.getView('Simple').create();
        main.add(panel);
    }
    
});