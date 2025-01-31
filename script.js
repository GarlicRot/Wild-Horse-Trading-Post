// Function to load items dynamically
async function loadItems(sectionId, itemsType) {
    try {
        const response = await fetch('assets/data/items.json');
        const data = await response.json();
        const items = data[itemsType]; // Get the correct item type (e.g., "featured", "forSale")

        const gallery = document.getElementById(sectionId);

        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            `;
            gallery.appendChild(itemDiv);
        });
    } catch (error) {
        console.error(`Error loading items for ${itemsType}:`, error);
    }
}

// Load featured items for the index page
if (document.getElementById('featuredGallery')) {
    loadItems('featuredGallery', 'featured');
}

// Load "For Sale" items for the for-sale page
if (document.getElementById('forSaleGallery')) {
    loadItems('forSaleGallery', 'forSale');
}
