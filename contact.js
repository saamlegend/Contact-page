// Initialize and add the map
function initMap() {
    // The location of Lagos
    let lagos = {lat:  6.500000, lng: 3.350000};
    // The map, centered at Lagos
    let map = new google.maps.Map(
        document.getElementById("map"), {zoom: 17, center: lagos});
    // The marker, positioned at Lagos
    let marker = new google.maps.Marker({position: lagos, map: map});
  }