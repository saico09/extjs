Ext.define('HolaMundo.view.PuntoSimple',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.puntosimple',

    title: 'Mapa punto simple',

    html: '<div id="map_canvas" style="width:100%; height:100%"></div>',
    listeners:{
        'afterrender': function(view){
            Ext.Ajax.request({
                url: 'page.php',
                params:{
                    id: 1
                },
                success: function(response){
                    var text = response.responseText;
                    console.log(Ext.JSON.decode(res.responseText).propiedad)
                }
            });

            var me = this;
            var mapOptions = {
                zoom:10,
                panControl: true,
                center: new google.maps.LatLng(-33.444334,-70.655308),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            
            me.map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-33.444334,-70.665308),
                map: me.map
            });
            var marker2= new google.maps.Marker({
                position: new google.maps.LatLng(-33.444334,-70.765308),
                map: me.map
            });
            var marker3= new google.maps.Marker({
                position: new google.maps.LatLng(-33.444334,-70.865308),
                map: me.map
            });
        }
    },
    initComponent: function(){
        console.log('Inicio puntosimple');
        this.callParent(arguments);
    }
});