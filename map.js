// Initialize the map centered around Fortnite map coordinates
const map = L.map('map').setView([0, 0], 2); // Adjust the coordinates and zoom level

// Load the Fortnite map image as the base layer
L.tileLayer('https://example-fortnite-map-tiles/{z}/{x}/{y}.png', {
  attribution: '&copy; Fortnite Map',
  maxZoom: 10,
}).addTo(map);

// Fetch and display POIs on the map from the Fortnite API
async function loadMapData() {
  const url = 'https://fortnite-api.com/v1/map';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const pois = data.data.pois;

    pois.forEach(poi => {
      // Add a marker for each point of interest
      L.marker([poi.location.lat, poi.location.lng])
        .addTo(map)
        .bindPopup(`<b>${poi.name}</b><br>${poi.description}`);
    });
  } catch (error) {
    console.error('Error loading map data:', error);
  }
}

loadMapData();
