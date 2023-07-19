Ext.define('HolaMundo.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
      'Ext.tab.Panel',
      'Ext.layout.container.Border',
      'Ext.container.Viewport'
    ],
  
    xtype: 'app-main',
  
    layout: {
      type: 'border'
    },
  
    listeners: {
      launch: 'onLaunch'
    },
  
    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
      },
      {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'tabla 1',
          },
          {
            title: 'tabla 2'
          }
        ]
      }
    ],
  
    onLaunch: function() {
      Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [{
          id: 'mainViewportId',
          collapsible: false,
          region: 'center',
          layout: 'fit',
          border: true,
          tbar: [{
            xtype: 'button',
            id: 'simpleMapId',
            text: 'Simple'
          }, '-']
        }]
      });
    }
  });
  