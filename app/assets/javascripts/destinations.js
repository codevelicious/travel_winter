
$(document).ready(function (){

    function initialize() {

    	var myLatlng = new google.maps.LatLng(33.7570137, -84.4276311);
      var mapOptions = {
      center: myLatlng,
      zoom: 15, 
      scrollwheel: false
      };
        
      var map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions); 
      var image = "<%= asset_path 'peru-icon.png' %>"

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Machu Picchu',
        icon: image,
        animation: google.maps.Animation.DROP
      });

      var contentString = '<h2>Machu Picchu</h2>' + '<p>This is the coolest place on Earth!</p>';
      var infowindow = new google.maps.InfoWindow({content:contentString
      });

      google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker); 
      });
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);

});
