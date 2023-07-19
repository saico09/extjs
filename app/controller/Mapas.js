Ext.define('HolaMundo.controller.Mapas',{
    extend: 'Ext.app.Controller',

    views: [
        'HolaMundo.view.Simple',
        'HolaMundo.view.PuntoSimple',
        'HolaMundo.view.Puntos',
        'HolaMundo.view.InfoWindow'
    ],

    init: function(app) {
        console.log('Initialized!');
		var me = this;
		me.control({
		    'viewport #simpleMapId': {
                click: this.onClickSimpleMap
			},
            'viewport #puntoSimpleId':{
                click: this.onClickSimpleId
            },
            'viewport #puntosId':{
                click: this.onClickPuntos
            },
            'viewport #infoWindowId':{
                click: this.OnClickInfoWindow
            }
		});
    },

    onClickSimpleMap: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        console.log('jeje');
        var panel = this.getView('Simple').create();
        main.add(panel);
    },
    onClickSimpleId: function(){
        var main =Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        console.log('vista simpleID');
        var panel = this.getView('PuntoSimple').create();
        main.add(panel);
    },
    onClickPuntos: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        console.log('vista puntosID');
        var panel = this.getView('Puntos').create();
        main.add(panel);
    },
    OnClickInfoWindow: function(){
        var main = Ext.ComponentQuery.query('#mainViewportId')[0];
        main.removeAll();
        console.log('vista Window Info');
        var panel = this.getView('InfoWindow').create();
        main.add(panel);
    }
    
});