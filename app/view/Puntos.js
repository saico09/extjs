Ext.define('HolaMundo.view.Puntos',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.puntos',

    title: 'Mapan Puntos',

    html: '<div id="map_canvas" style="width:100%; height:100%"></div>',

    listeners:{
        'afterrender': function(view){
            var me = this;
            var mapOptions = {
                zoom:10,
                panControl:true,
                center: new google.maps.LatLng(-33.9, 151.2),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            me.map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);

            var branches = [
                ['Bondi Beach', -33.890542, 151.274856, 4],
                ['Coogee Beach', -33.923036, 151.259052, 5],
                ['Cronulla Beach', -35.028249, 151.157507, 3],
                ['Manly Beach', -34.80010128657071, 151.28747820854187, 2],
                ['Maroubra Beach', -33.950198, 151.259302, 1]
            ];

            me.setMarkers(me.map, branches);
        }
    },
    setMarkers: function(map,locations){
        var image = new google.maps.MarkerImage('img/chicken.png',
        new google.maps.Size(24, 24),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 24));

        var flightPlanCoordinates = [
            new google.maps.LatLng(-33.890542, 151.274856),
            new google.maps.LatLng(-33.923036, 151.259052),
            new google.maps.LatLng(-34.80010128657071, 151.28747820854187),
            new google.maps.LatLng(-35.028249, 151.157507)
        ];

        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map: map
        });

        for(var i=0; i<locations.length; i++){
            var beach = locations[i];
            var myLatLng = new google.maps.LatLng(beach[1], beach[2]);

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title: beach[0]
            });

        }
    },
    initComponent: function(){
        console.log('Puntos');
        this.callParent(arguments);
    }
});