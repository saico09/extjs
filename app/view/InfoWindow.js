Ext.define('HolaMundo.view.InfoWindow',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.infowindow',

    title: 'Mapa Info Window',

    html: '<div id="map_canvas" style="width:100%; height:100%"></div>',

    listeners:{
        'afterrender': function(view){
            var me = this;
            var mapOptions = {
                zoom:10,
                panControl:true,
                center: new google.maps.LatLng(-33.444334,-70.655308),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            me.map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);

            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 300
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-33.444334,-70.655308),
                    map: me.map,
                    title: 'Uluru (Ayers Rock)'
                });

                google.maps.event.addListener(marker, 'click', function(){
                    infowindow.open(me.map,marker);
                });
        }
    },
    initComponent: function(){
        console.log('Inicio info window');
        this.callParent(arguments);
    }
});