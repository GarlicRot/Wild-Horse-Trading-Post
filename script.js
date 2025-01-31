// Function to load featured items
async function loadFeaturedItems() {
    try {
        const response = await fetch('assets/data/items.json');
        const data = await response.json();
        const featuredItems = data.featured;

        const gallery = document.getElementById('featuredGallery');
        featuredItems.forEach(item => {
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
        console.error('Error loading featured items:', error);
    }
}

// Call the function to load featured items
document.addEventListener('DOMContentLoaded', loadFeaturedItems);
