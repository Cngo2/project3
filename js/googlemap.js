var canvas;
function initMap() {
  canvas = new google.maps.Map(document.getElementById('canvas'), {
  center: {lat: 41.83699898857421, lng: -87.62827682574186},
  zoom: 18
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.83698799755188, -87.62826743801091), 
    map: canvas,
    title: "Kaplan IIT",
    animation: google.maps.Animation.DROP,
    icon: './media/batman.png'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>Kaplan Institute/h1><p>New building constructed for the IIT Institute of Design<p>"
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(canvas, marker);
  });

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(41.835625166891816, -87.6286190237774),
    map: canvas,
    title: "Hermann Hall IIT",
    animation: google.maps.Animation.DROP,
    icon: './media/spiderman.png'
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "<h1>Hermann Hall</h1><p>Hermann Hall is the main venue for events held at IIT.<p>"
  });

  google.maps.event.addListener(marker2, 'mouseover', function() {
    infowindow2.open(canvas, marker2);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);