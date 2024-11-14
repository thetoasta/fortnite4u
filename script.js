// Fortnite API Integration
const fortniteApiUrl = 'https://fortnite-api.com/v1/stats/br/v2?name=USERNAME';
const infoContent = document.getElementById('info-content');

async function fetchFortniteInfo(username) {
  try {
    const response = await fetch(fortniteApiUrl.replace('USERNAME', username));
    const data = await response.json();

    // Display basic information
    infoContent.innerHTML = `
      <p>Player: ${data.data.account.name}</p>
      <p>Wins: ${data.data.stats.all.overall.wins}</p>
      <p>Kills: ${data.data.stats.all.overall.kills}</p>
    `;
  } catch (error) {
    infoContent.innerHTML = `<p>Could not retrieve data. Please try again later.</p>`;
  }
}

// Call function with a test username (can replace USERNAME with input)
fetchFortniteInfo('USERNAME');
