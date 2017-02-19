<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      html, body { height: 100%; margin: 0; padding: 0; }
      #map { height: 100%; }
    </style>
  </head>
  <body>
    <div id="map"></div>
     <script>

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 29.86654, lng: 121.60594}
  });

  var ctaLayer = new google.maps.KmlLayer({
    url: 'https://raw.githubusercontent.com/LaylaDoom/forosextosello/master/Ubicacionesmapaforo.kml',
    map: map
  });
}

    </script>
 </script>
  </head>
  <body>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Ez2jtoBVEndjz6zguofaTtVuq8sJntg&libraries=places&callback=initMap" async defer></script>
  </body>
</html>
