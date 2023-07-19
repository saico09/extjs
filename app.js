Ext.application({
    extwn: ['Ext.container.Viewport'],
    name: 'HolaMundo',

    appFolder: 'app',

    controllers: [
        'Mapas'
    ],
 
    launch: function() {

            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [
                {
                    id: 'mainViewportId',
                    collapsible: false,
                    region: 'center',
                    layout: 'fit',
                    border: true,
                    tbar: [{
                        xtype: 'button',
                        id: 'simpleMapId',
                        text: 'Simple'

                    }]
                }

                ]
            });

    }
});
