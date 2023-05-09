// Initialize and add the map
function initMap() {
  // The location of Seattle
  console.log('imhere')
  const seattle = { lat: 47.6062, lng: -122.3321 };
  // The map, centered at Seattle
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: seattle,
    mapTypeId: "satellite",
  });
  console.log(map)
  // The marker, positioned at Seattle
  const marker = new google.maps.Marker({
    position: seattle,
    map: map,
    title: "My city",
  });
};

