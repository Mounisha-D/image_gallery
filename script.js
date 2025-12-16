// Enhanced image database with 40+ unique images
const images = [
    // Nature (10 images)
    { id: 1, title: "Mountain Majesty", category: "Nature", views: 1420, likes: 89, 
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", 
      description: "Majestic mountain peaks covered in snow at sunrise." },
    
    { id: 2, title: "Forest Pathway", category: "Nature", views: 890, likes: 45, 
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w-800&q=80", 
      description: "Sunlit pathway through a dense green forest." },
    
    { id: 3, title: "Waterfall Serenity", category: "Nature", views: 1250, likes: 67, 
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", 
      description: "Powerful waterfall cascading into a crystal clear pool." },
    
    { id: 4, title: "Desert Dunes", category: "Nature", views: 780, likes: 32, 
      imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80", 
      description: "Golden sand dunes stretching to the horizon." },
    
    { id: 5, title: "Northern Lights", category: "Nature", views: 2100, likes: 150, 
      imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80", 
      description: "Aurora borealis dancing across the night sky." },
    
    { id: 6, title: "Ocean Waves", category: "Nature", views: 1560, likes: 78, 
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", 
      description: "Powerful ocean waves crashing against rocky shore." },
    
    { id: 7, title: "Misty Lake", category: "Nature", views: 940, likes: 41, 
      imageUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80", 
      description: "Calm lake with morning mist rising from the surface." },
    
    { id: 8, title: "Cherry Blossoms", category: "Nature", views: 1780, likes: 92, 
      imageUrl: "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?w=800&q=80", 
      description: "Beautiful pink cherry blossoms in full bloom." },
    
    { id: 9, title: "Wildflower Field", category: "Nature", views: 680, likes: 28, 
      imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80", 
      description: "Colorful wildflowers covering a rolling hillside." },
    
    { id: 10, title: "Volcano Landscape", category: "Nature", views: 1120, likes: 56, 
      imageUrl: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=800&q=80", 
      description: "Dramatic volcanic landscape with steam vents." },
    
    // Travel (8 images)
    { id: 11, title: "Paris Street", category: "Travel", views: 1950, likes: 120, 
      imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", 
      description: "Charming Parisian street with historic architecture." },
    
    { id: 12, title: "Tokyo Night", category: "Travel", views: 1820, likes: 98, 
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", 
      description: "Vibrant Tokyo cityscape at night with neon lights." },
    
    { id: 13, title: "Venice Canals", category: "Travel", views: 1640, likes: 85, 
      imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80", 
      description: "Gondolas navigating through Venice's iconic canals." },
    
    { id: 14, title: "Santorini Sunset", category: "Travel", views: 2230, likes: 145, 
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", 
      description: "Breathtaking sunset over Santorini's white buildings." },
    
    { id: 15, title: "New York Skyline", category: "Travel", views: 1890, likes: 102, 
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80", 
      description: "Iconic New York City skyline at dusk." },
    
    { id: 16, title: "Bali Temple", category: "Travel", views: 1340, likes: 71, 
      imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", 
      description: "Ancient Balinese temple surrounded by nature." },
    
    { id: 17, title: "Dubai Modern", category: "Travel", views: 1560, likes: 82, 
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", 
      description: "Ultra-modern architecture in Dubai's city center." },
    
    { id: 18, title: "African Safari", category: "Travel", views: 980, likes: 49, 
      imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", 
      description: "Wild animals roaming free on an African safari." },
    
    // Food (7 images)
    { id: 19, title: "Artisan Pizza", category: "Food", views: 1250, likes: 65, 
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", 
      description: "Wood-fired pizza with fresh ingredients." },
    
    { id: 20, title: "Sushi Masterpiece", category: "Food", views: 1420, likes: 78, 
      imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80", 
      description: "Exquisitely prepared sushi platter." },
    
    { id: 21, title: "Fresh Pastries", category: "Food", views: 960, likes: 42, 
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=800&q=80", 
      description: "Freshly baked pastries and croissants." },
    
    { id: 22, title: "Coffee Art", category: "Food", views: 1780, likes: 95, 
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", 
      description: "Beautiful latte art in a ceramic cup." },
    
    { id: 23, title: "Fresh Salad", category: "Food", views: 720, likes: 31, 
      imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80", 
      description: "Colorful and healthy vegetable salad." },
    
    { id: 24, title: "BBQ Delight", category: "Food", views: 890, likes: 46, 
      imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80", 
      description: "Smoky barbecue with grilled vegetables." },
    
    { id: 25, title: "Dessert Heaven", category: "Food", views: 1640, likes: 88, 
      imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80", 
      description: "Decadent chocolate dessert with berries." },
    
    // Urban (6 images)
    { id: 26, title: "City Skyscrapers", category: "Urban", views: 1320, likes: 68, 
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80", 
      description: "Modern skyscrapers reaching for the clouds." },
    
    { id: 27, title: "Street Art", category: "Urban", views: 1120, likes: 58, 
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80", 
      description: "Vibrant street art on urban walls." },
    
    { id: 28, title: "Night Market", category: "Urban", views: 980, likes: 44, 
      imageUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&q=80", 
      description: "Busy night market with food stalls." },
    
    { id: 29, title: "Urban Bridge", category: "Urban", views: 760, likes: 33, 
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", 
      description: "Modern bridge connecting urban districts." },
    
    { id: 30, title: "City Park", category: "Urban", views: 680, likes: 27, 
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", 
      description: "Green oasis in the middle of the city." },
    
    { id: 31, title: "Urban Transportation", category: "Urban", views: 540, likes: 22, 
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", 
      description: "Efficient public transportation in the city." },
    
    // People (5 images)
    { id: 32, title: "Portrait Studio", category: "People", views: 890, likes: 47, 
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", 
      description: "Professional portrait photography session." },
    
    { id: 33, title: "Street Photography", category: "People", views: 1120, likes: 62, 
      imageUrl: "https://images.unsplash.com/photo-1551830412-4e100dd812d2?w=800&q=80", 
      description: "Candid street photography capturing daily life." },
    
    { id: 34, title: "Cultural Festival", category: "People", views: 780, likes: 36, 
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", 
      description: "People celebrating at a cultural festival." },
    
    { id: 35, title: "Family Moments", category: "People", views: 640, likes: 29, 
      imageUrl: "https://images.unsplash.com/photo-1529254479751-fbacb4c7a587?w=800&q=80", 
      description: "Heartwarming family portrait." },
    
    { id: 36, title: "Urban Lifestyle", category: "People", views: 920, likes: 51, 
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", 
      description: "Modern urban lifestyle photography." },
    
    // Abstract (5 images)
    { id: 37, title: "Color Patterns", category: "Abstract", views: 1450, likes: 81, 
      imageUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80", 
      description: "Vibrant abstract color patterns and textures." },
    
    { id: 38, title: "Geometric Shapes", category: "Abstract", views: 1020, likes: 54, 
      imageUrl: "https://images.unsplash.com/photo-1558618666-36c38c1e7f3f?w=800&q=80", 
      description: "Clean geometric shapes and modern design." },
    
    { id: 39, title: "Liquid Art", category: "Abstract", views: 1340, likes: 72, 
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80", 
      description: "Abstract liquid art with vibrant colors." },
    
    { id: 40, title: "Texture Study", category: "Abstract", views: 880, likes: 43, 
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80", 
      description: "Close-up study of interesting textures." },
    
    { id: 41, title: "Light Play", category: "Abstract", views: 1560, likes: 86, 
      imageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a569e388?w=800&q=80", 
      description: "Abstract photography playing with light and shadow." },
    
    // Wildlife (3 images)
    { id: 42, title: "Lion King", category: "Wildlife", views: 2100, likes: 125, 
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80", 
      description: "Majestic lion in its natural habitat." },
    
    { id: 43, title: "Bird in Flight", category: "Wildlife", views: 1240, likes: 67, 
      imageUrl: "https://images.unsplash.com/photo-1552727451-6f5671e14d83?w=800&q=80", 
      description: "Eagle soaring through the sky." },
    
    { id: 44, title: "Underwater World", category: "Wildlife", views: 980, likes: 52, 
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", 
      description: "Colorful coral reef with tropical fish." }
];

// DOM Elements
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const filterChips = document.getElementById('filter-chips');
const viewOptions = document.querySelectorAll('.view-option');
const imageCount = document.getElementById('image-count');
const noResults = document.getElementById('no-results');
const resetAllBtn = document.getElementById('reset-all');
const loadMoreBtn = document.getElementById('load-more-btn');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxViews = document.getElementById('lightbox-views');
const lightboxDescription = document.getElementById('lightbox-description');
const themeToggle = document.getElementById('theme-toggle');
const searchTags = document.querySelectorAll('.tag');

// State variables
let currentFilter = 'all';
let currentSearch = '';
let currentView = 'grid';
let displayedImages = 12;
let currentLightboxIndex = 0;

// Extract unique categories
const categories = ['all', ...new Set(images.map(img => img.category))];

// Initialize
function init() {
    createFilterChips();
    renderGallery();
    setupEventListeners();
    
    // Set initial count
    updateImageCount();
}

// Create filter chips
function createFilterChips() {
    filterChips.innerHTML = '';
    
    categories.forEach(category => {
        const count = category === 'all' 
            ? images.length 
            : images.filter(img => img.category === category).length;
        
        const chip = document.createElement('div');
        chip.className = 'filter-chip';
        if (category === 'all') chip.classList.add('active');
        chip.dataset.category = category;
        
        const displayName = category === 'all' ? 'All' : category;
        chip.innerHTML = `
            ${displayName}
            <span class="count">${count}</span>
        `;
        
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => {
                c.classList.remove('active');
            });
            chip.classList.add('active');
            currentFilter = category;
            displayedImages = 12;
            renderGallery();
        });
        
        filterChips.appendChild(chip);
    });
}

// Render gallery
function renderGallery() {
    gallery.innerHTML = '';
    
    // Filter images
    let filtered = images.filter(img => {
        const matchesCategory = currentFilter === 'all' || img.category === currentFilter;
        const matchesSearch = !currentSearch || 
            img.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            img.category.toLowerCase().includes(currentSearch.toLowerCase()) ||
            img.description.toLowerCase().includes(currentSearch.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
    
    // Update UI based on results
    if (filtered.length === 0) {
        gallery.style.display = 'none';
        noResults.style.display = 'block';
        document.getElementById('load-more').style.display = 'none';
    } else {
        gallery.style.display = 'grid';
        noResults.style.display = 'none';
        
        // Set view mode
        gallery.dataset.view = currentView;
        
        // Display limited images
        const imagesToShow = filtered.slice(0, displayedImages);
        
        imagesToShow.forEach((img, index) => {
            const item = createGalleryItem(img, index);
            gallery.appendChild(item);
        });
        
        // Show/hide load more button
        document.getElementById('load-more').style.display = 
            displayedImages < filtered.length ? 'block' : 'none';
    }
    
    updateImageCount();
}

// Create gallery item
function createGalleryItem(img, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;
    
    // Format numbers
    const formatNumber = num => num >= 1000 ? `${(num/1000).toFixed(1)}k` : num;
    
    item.innerHTML = `
        <div class="image-container">
            <img src="${img.imageUrl}" alt="${img.title}" class="gallery-image" loading="lazy">
            <span class="image-badge">${img.category}</span>
            <div class="image-overlay">
                <h4>${img.title}</h4>
                <p>${img.description.substring(0, 60)}...</p>
            </div>
        </div>
        <div class="image-info">
            <h3 class="image-title">${img.title}</h3>
            <div class="image-meta">
                <div class="image-stats">
                    <span><i class="fas fa-eye"></i> ${formatNumber(img.views)}</span>
                    <span><i class="fas fa-heart"></i> ${formatNumber(img.likes)}</span>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    `;
    
    item.addEventListener('click', () => openLightbox(img, index));
    
    return item;
}

// Open lightbox
function openLightbox(img, index) {
    currentLightboxIndex = index;
    
    lightboxImg.src = img.imageUrl;
    lightboxImg.alt = img.title;
    lightboxTitle.textContent = img.title;
    lightboxCategory.textContent = img.category;
    lightboxViews.innerHTML = `<i class="fas fa-eye"></i> ${img.views.toLocaleString()}`;
    lightboxDescription.textContent = img.description;
    
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Update image count
function updateImageCount() {
    const filtered = images.filter(img => {
        const matchesCategory = currentFilter === 'all' || img.category === currentFilter;
        const matchesSearch = !currentSearch || 
            img.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            img.category.toLowerCase().includes(currentSearch.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
    
    const total = filtered.length;
    const showing = Math.min(displayedImages, total);
    
    imageCount.textContent = `${showing} of ${total} images`;
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        displayedImages = 12;
        renderGallery();
    });
    
    // Search clear
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        displayedImages = 12;
        renderGallery();
    });
    
    // Quick search tags
    searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            searchInput.value = tag.dataset.search;
            currentSearch = tag.dataset.search;
            displayedImages = 12;
            renderGallery();
        });
    });
    
    // View options
    viewOptions.forEach(option => {
        option.addEventListener('click', () => {
            viewOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            currentView = option.dataset.view;
            gallery.dataset.view = currentView;
        });
    });
    
    // Reset all
    resetAllBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        currentFilter = 'all';
        displayedImages = 12;
        
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.dataset.category === 'all') {
                chip.classList.add('active');
            }
        });
        
        renderGallery();
    });
    
    // Load more
    loadMoreBtn.addEventListener('click', () => {
        displayedImages += 12;
        renderGallery();
    });
    
    // Lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close lightbox on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
    
    // Like button
    document.getElementById('like-btn')?.addEventListener('click', () => {
        const btn = document.getElementById('like-btn');
        const icon = btn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        
        // Update image likes
        const currentImage = images.find((_, i) => i === currentLightboxIndex);
        if (currentImage) {
            if (icon.classList.contains('fas')) {
                currentImage.likes += 1;
            } else {
                currentImage.likes -= 1;
            }
            renderGallery();
        }
    });
}

// Navigate lightbox
function navigateLightbox(direction) {
    if (!lightbox.style.display || lightbox.style.display === 'none') return;
    
    const filtered = images.filter(img => {
        const matchesCategory = currentFilter === 'all' || img.category === currentFilter;
        const matchesSearch = !currentSearch || 
            img.title.toLowerCase().includes(currentSearch.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
    
    currentLightboxIndex = (currentLightboxIndex + direction + filtered.length) % filtered.length;
    openLightbox(filtered[currentLightboxIndex], currentLightboxIndex);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);