/* ==========================================================================
   EcoSprout E-Commerce Engine (100+ Products & Fully Functional)
   ========================================================================== */

// Master Products Dataset (>100 Products across 5 Categories)
const categoriesData = [
    { name: "Kitchen", title: "Kitchen & Dining", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", count: "24 items" },
    { name: "Bathroom", title: "Bathroom & Body", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80", count: "22 items" },
    { name: "Home", title: "Zero-Waste Home", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80", count: "25 items" },
    { name: "Lifestyle", title: "Lifestyle & Travel", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80", count: "18 items" },
    { name: "Apparel", title: "Eco Apparel", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", count: "15 items" }
];

const rawItemTemplates = [
    { cat: "Kitchen", name: "Bamboo Cutlery Travel Set", price: 14.99, old: 19.99, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Best Seller" },
    { cat: "Kitchen", name: "Organic Beeswax Food Wraps (3-Pack)", price: 18.50, old: 22.00, img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "Popular" },
    { cat: "Kitchen", name: "Stainless Steel Bento Lunch Box", price: 26.00, old: 32.00, img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Sale" },
    { cat: "Kitchen", name: "Compostable Dish Brush Set", price: 12.00, old: 15.00, img: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80", rating: 4.7, badge: "" },
    { cat: "Kitchen", name: "Glass Straws with Cleaning Brush (8-Pack)", price: 15.99, old: 20.00, img: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=600&q=80", rating: 4.6, badge: "" },
    { cat: "Kitchen", name: "Refrigerated Silicone Storage Bags", price: 21.99, old: 28.00, img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Eco Pick" },
    { cat: "Kitchen", name: "Natural Coconut Fiber Scrub Sponges", price: 9.99, old: 13.00, img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "" },
    { cat: "Kitchen", name: "Foldable Silicone Water Pitcher", price: 24.50, old: 30.00, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80", rating: 4.5, badge: "" },

    { cat: "Bathroom", name: "Zero-Waste Bamboo Toothbrush (4-Pack)", price: 11.99, old: 16.00, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Best Seller" },
    { cat: "Bathroom", name: "Natural Lavender Shampoo Bar", price: 12.50, old: 15.00, img: "https://images.unsplash.com/photo-1608248597359-97300c3c8612?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "Organic" },
    { cat: "Bathroom", name: "Reusable Bamboo Makeup Remover Pads", price: 14.00, old: 18.00, img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "" },
    { cat: "Bathroom", name: "Stainless Steel Safety Razor + Blades", price: 28.99, old: 35.00, img: "https://images.unsplash.com/photo-1585232351913-738cb4689c52?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Sale" },
    { cat: "Bathroom", name: "Solid Conditioner Bar with Argan Oil", price: 13.50, old: 16.00, img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80", rating: 4.7, badge: "" },
    { cat: "Bathroom", name: "Natural Loofah Body Exfoliator", price: 8.99, old: 12.00, img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80", rating: 4.6, badge: "" },
    { cat: "Bathroom", name: "Charcoal Dental Floss in Glass Dispenser", price: 7.99, old: 10.00, img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "" },

    { cat: "Home", name: "Soy Wax Aromatherapy Candle (Lavender)", price: 22.00, old: 28.00, img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Handmade" },
    { cat: "Home", name: "Organic Cotton Produce Bags (5-Pack)", price: 16.50, old: 21.00, img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "Popular" },
    { cat: "Home", name: "Handwoven Jute Storage Basket", price: 34.00, old: 42.00, img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80", rating: 4.7, badge: "" },
    { cat: "Home", name: "Indoor Terrarium Succulent Planter", price: 38.00, old: 45.00, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "" },
    { cat: "Home", name: "Hemp Laundry Detergent Sheets (60 Loads)", price: 19.99, old: 25.00, img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Eco Pick" },
    { cat: "Home", name: "Cork Yoga Mat with Alignment Lines", price: 54.00, old: 68.00, img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Sale" },

    { cat: "Lifestyle", name: "Insulated Thermal Water Bottle (750ml)", price: 32.00, old: 40.00, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Best Seller" },
    { cat: "Lifestyle", name: "Recycled Canvas Tote Grocery Bag", price: 18.00, old: 23.00, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "" },
    { cat: "Lifestyle", name: "Solar-Powered Portable Power Bank", price: 45.00, old: 59.00, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80", rating: 4.7, badge: "New" },
    { cat: "Lifestyle", name: "Cork Passport Holder & Travel Wallet", price: 24.00, old: 30.00, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80", rating: 4.6, badge: "" },

    { cat: "Apparel", name: "100% Organic Cotton Everyday Tee", price: 29.00, old: 38.00, img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", rating: 4.8, badge: "Organic" },
    { cat: "Apparel", name: "Recycled Wool Blend Winter Beanie", price: 22.00, old: 28.00, img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Cozy" },
    { cat: "Apparel", name: "Hemp & Organic Cotton Hoodie", price: 62.00, old: 78.00, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80", rating: 4.9, badge: "Sale" },
    { cat: "Apparel", name: "Fair-Trade Bamboo Socks (3-Pack)", price: 16.00, old: 20.00, img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=600&q=80", rating: 4.7, badge: "" }
];

// Automatically generate up to 105 products by multiplying templates with variations
let products = [];
let idCounter = 1;
for (let i = 0; i < 4; i++) {
    rawItemTemplates.forEach((item, index) => {
        if (idCounter <= 105) {
            let priceVariation = (item.price + (i * 1.5)).toFixed(2);
            let titlePrefix = i === 0 ? "" : i === 1 ? "Premium " : i === 2 ? "Artisan " : "Classic ";
            products.push({
                id: idCounter,
                category: item.cat,
                name: titlePrefix + item.name + (i > 0 ? ` V${i+1}` : ""),
                price: parseFloat(priceVariation),
                oldPrice: item.old ? (item.old + (i * 1.5)).toFixed(2) : null,
                image: item.img,
                rating: item.rating,
                reviewsCount: Math.floor(Math.random() * 120) + 15,
                badge: i === 0 ? item.badge : (Math.random() > 0.7 ? "Eco Pick" : ""),
                description: `Crafted with 100% certified sustainable materials under ethical fair-trade standards. Designed to eliminate single-use plastics and lower carbon footprints.`
            });
            idCounter++;
        }
    });
}

// State Management
let cart = [];
let wishlist = [];
let activeCategory = 'all';
let currentSort = 'featured';
let displayedCount = 16;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const categoryGrid = document.getElementById('categoryGrid');
const categoryFilters = document.getElementById('categoryFilters');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const remainingCountSpan = document.getElementById('remainingCount');
const searchInput = document.getElementById('searchInput');

const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartCountTitle = document.getElementById('cartCountTitle');
const cartBadge = document.getElementById('cartBadge');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartShipping = document.getElementById('cartShipping');
const freeShippingText = document.getElementById('freeShippingText');
const shippingProgressBar = document.getElementById('shippingProgressBar');
const checkoutBtn = document.getElementById('checkoutBtn');

const wishlistBtn = document.getElementById('wishlistBtn');
const closeWishlistBtn = document.getElementById('closeWishlistBtn');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistCountTitle = document.getElementById('wishlistCountTitle');
const wishlistBadge = document.getElementById('wishlistBadge');
const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

const quickViewModal = document.getElementById('quickViewModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const quickViewGrid = document.getElementById('quickViewGrid');

// Promo Code State
let appliedDiscount = 0;
let appliedDiscountName = '';
const promoInput = document.getElementById('promoInput');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const discountRow = document.getElementById('discountRow');
const discountCodeName = document.getElementById('discountCodeName');
const cartDiscount = document.getElementById('cartDiscount');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    setupEventListeners();
    updateCartUI();
    updateWishlistUI();
});

// Render Category Cards
function renderCategories() {
    categoryGrid.innerHTML = categoriesData.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.name}')">
            <img src="${cat.image}" alt="${cat.title}">
            <div class="category-overlay">
                <h3>${cat.title}</h3>
                <span>${cat.count}</span>
            </div>
        </div>
    `).join('');
}

// Filter by category helper
window.filterByCategory = function(category) {
    activeCategory = category;
    displayedCount = 16;
    document.querySelectorAll('.filter-pill').forEach(pill => {
        if (pill.dataset.category === category) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
    renderProducts();
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
};

// Render Products Grid
function renderProducts() {
    let filtered = products.filter(p => {
        if (activeCategory === 'all') return true;
        return p.category === activeCategory;
    });

    // Search query filter
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    }

    // Sort
    if (sortSortVal() === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortSortVal() === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortSortVal() === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    const totalFiltered = filtered.length;
    const paginated = filtered.slice(0, displayedCount);

    if (paginated.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1 / -1;" class="empty-state">
                <i class="fa-solid fa-seedling"></i>
                <h3>No sustainable products found</h3>
                <p>Try searching for something else or clear your filters.</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }

    productGrid.innerHTML = paginated.map(p => {
        const isWishlisted = wishlist.some(item => item.id === p.id);
        return `
            <div class="product-card">
                ${p.badge ? `<span class="product-badge ${p.badge === 'Sale' ? 'badge-sale' : ''}">${p.badge}</span>` : ''}
                <button class="wishlist-icon-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <div class="product-img-wrapper" onclick="openQuickView(${p.id})">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    <button class="quick-view-trigger">Quick View</button>
                </div>
                <div class="product-info">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-title" title="${p.name}">${p.name}</h3>
                    <div class="product-rating">
                        ${renderStars(p.rating)}
                        <span>(${p.reviewsCount})</span>
                    </div>
                    <div class="product-footer">
                        <div class="product-prices">
                            <span class="current-price">$${p.price.toFixed(2)}</span>
                            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ''}
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${p.id})" title="Add to Cart">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const remaining = totalFiltered - displayedCount;
    if (remaining > 0) {
        loadMoreBtn.style.display = 'inline-flex';
        remainingCountSpan.textContent = remaining;
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function sortSortVal() {
    return sortSelect.value;
}

function renderStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else if (i - rating < 1 && i - rating > 0) {
            starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsHtml;
}

// Setup Event Listeners
function setupEventListeners() {
    // Category pills
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-pill')) {
            filterByCategory(e.target.dataset.category);
        }
    });

    // Sort select
    sortSelect.addEventListener('change', () => {
        renderProducts();
    });

    // Search input
    searchInput.addEventListener('input', () => {
        displayedCount = 16;
        renderProducts();
    });

    // Load More
    loadMoreBtn.addEventListener('click', () => {
        displayedCount += 16;
        renderProducts();
    });

    // Cart Drawer Toggles
    cartBtn.addEventListener('click', () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    });
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', () => {
        closeCart();
        closeWishlist();
    });

    // Wishlist Drawer Toggles
    wishlistBtn.addEventListener('click', () => {
        wishlistDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    });
    closeWishlistBtn.addEventListener('click', closeWishlist);

    // Modal close
    closeModalBtn.addEventListener('click', closeModal);
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) closeModal();
    });

    // Promo code apply
    applyPromoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        if (code === 'EARTH10') {
            appliedDiscount = 0.10;
            appliedDiscountName = 'EARTH10 (10% OFF)';
            alert('Promo code applied successfully!');
        } else if (code === 'SPORE20') {
            appliedDiscount = 0.20;
            appliedDiscountName = 'SPORE20 (20% OFF)';
            alert('Promo code applied successfully!');
        } else {
            alert('Invalid promo code. Try "EARTH10".');
            appliedDiscount = 0;
            appliedDiscountName = '';
        }
        updateCartUI();
    });

    // Checkout button simulation
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Thank you for your conscious order! A confirmation email and tree planting certificate will be sent shortly.');
        cart = [];
        updateCartUI();
        closeCart();
    });

    // Footprint Calculator live update
    const calcBottles = document.getElementById('calcBottles');
    const calcBags = document.getElementById('calcBags');
    const calcPlasticSaved = document.getElementById('calcPlasticSaved');
    const calcCo2Saved = document.getElementById('calcCo2Saved');

    function updateCalculator() {
        const bottles = parseInt(calcBottles.value) || 0;
        const bags = parseInt(calcBags.value) || 0;
        const totalPlastic = (bottles * 52 * 0.025) + (bags * 52 * 0.006); // rough kg calculation
        const totalCo2 = totalPlastic * 2.8;
        calcPlasticSaved.textContent = Math.round(totalPlastic) + ' kg';
        calcCo2Saved.textContent = Math.round(totalCo2) + ' kg';
    }

    if (calcBottles && calcBags) {
        calcBottles.addEventListener('input', updateCalculator);
        calcBags.addEventListener('input', updateCalculator);
        updateCalculator();
    }
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
}

function closeWishlist() {
    wishlistDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
}

function closeModal() {
    quickViewModal.classList.remove('open');
}

// Cart Management Functions
window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    
    // Open cart drawer to give immediate feedback
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
};

window.updateCartQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
};

window.removeFromCart = function(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
};

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;
    cartCountTitle.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty.</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item-row">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `).join('');
    }

    // Calculations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

    let discountAmount = subtotal * appliedDiscount;
    if (appliedDiscount > 0) {
        discountRow.style.display = 'flex';
        discountCodeName.textContent = appliedDiscountName;
        cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }

    const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5.00;
    cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;

    const finalTotal = Math.max(0, subtotal - discountAmount) + shipping;
    cartTotal.textContent = `$${finalTotal.toFixed(2)}`;

    // Free shipping progress bar
    const freeShippingTarget = 50;
    const progress = Math.min(100, (subtotal / freeShippingTarget) * 100);
    shippingProgressBar.style.width = `${progress}%`;

    if (subtotal >= freeShippingTarget) {
        freeShippingText.innerHTML = `<i class="fa-solid fa-check-circle" style="color:var(--success);"></i> You qualify for Free Carbon-Neutral Shipping!`;
    } else {
        const diff = (freeShippingTarget - subtotal).toFixed(2);
        freeShippingText.innerHTML = `Add <strong>$${diff}</strong> more for Free Carbon-Neutral Shipping!`;
    }
}

// Wishlist Management
window.toggleWishlist = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const index = wishlist.findIndex(item => item.id === id);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }
    updateWishlistUI();
    renderProducts();
};

window.removeFromWishlist = function(id) {
    wishlist = wishlist.filter(i => i.id !== id);
    updateWishlistUI();
    renderProducts();
};

function updateWishlistUI() {
    wishlistBadge.textContent = wishlist.length;
    wishlistCountTitle.textContent = wishlist.length;

    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-heart"></i>
                <p>No saved items yet.</p>
            </div>
        `;
    } else {
        wishlistItemsContainer.innerHTML = wishlist.map(item => `
            <div class="cart-item-row">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.75rem; margin-top: 6px;" onclick="addToCartFromWishlist(${item.id})">Add to Cart</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromWishlist(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `).join('');
    }
}

window.addToCartFromWishlist = function(id) {
    addToCart(id);
    removeFromWishlist(id);
};

// Quick View Modal
window.openQuickView = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    quickViewGrid.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="quick-view-img">
        <div class="quick-view-details">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="product-rating">
                ${renderStars(product.rating)}
                <span>(${product.reviewsCount} verified reviews)</span>
            </div>
            <div class="quick-view-price">$${product.price.toFixed(2)} ${product.oldPrice ? `<span class="old-price" style="font-size:1rem; margin-left:10px;">$${product.oldPrice}</span>` : ''}</div>
            <p class="quick-view-desc">${product.description}</p>
            <div class="quick-view-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">Add to Cart <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
        </div>
    `;
    quickViewModal.classList.add('open');
};