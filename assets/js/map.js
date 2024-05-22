function iniciarMap(){
  var coord = {lat:-33.51090313606982 ,lng: -70.75272551924783};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 16  ,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}