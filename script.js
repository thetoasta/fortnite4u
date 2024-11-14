const shopContent = document.getElementById('shop-content');
const fortniteShopUrl = 'https://fortnite-api.com/v2/shop/br';

async function fetchShopData() {
  try {
    const response = await fetch(fortniteShopUrl);
    const data = await response.json();
    const items = data.data.daily.entries;

    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('shop-item');
      itemDiv.innerHTML = `
        <img src="${item.images.icon}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>Price: ${item.price} V-Bucks</p>
      `;
      shopContent.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching shop data:', error);
  }
}

fetchShopData();
