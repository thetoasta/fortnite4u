// Initialize the map with Leaflet
const map = L.map('map').setView([0, 0], 2); // Center on default coordinates, adjust as needed

// Add base tile layer for the map

// Fetch map data from the Fortnite API
async function fetchFortniteMapData() {
  const url = 'https://fortnite-api.com/v1/map';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const pois = data.data.pois; // Points of interest from the map data

    // Center the map on Fortnite's map area if lat/lng values are available
    map.setView([data.data.lat, data.data.lng], 5);  // Example center, update as needed

    // Loop through the POIs and add markers to the map
    pois.forEach(poi => {
      L.marker([poi.location.lat, poi.location.lng])
        .addTo(map)
        .bindPopup(`
          <b>${poi.name}</b><br>${poi.description}
        `);
    });
  } catch (error) {
    console.error('Error fetching map data:', error);
  }
}

fetchFortniteMapData();
