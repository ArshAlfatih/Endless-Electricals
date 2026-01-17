/**
 * ENDLESS ELECTRICALS - JavaScript
 * SEO Optimized | Performance Optimized | Production Ready
 * Features: Search, Filter, Cart, Analytics Tracking
 */

// ========================================
// GLOBAL STATE MANAGEMENT
// ========================================

// Track current filter state to prevent conflicts
let currentFilterState = 'all';
let currentSearchQuery = '';

// ========================================
// PRODUCT DATA - SEO KEYWORDS OPTIMIZED
// ========================================

let products = [
    // WIRES CATEGORY - Polycab, Finolex, RR Kabel
    { 
        id: 1, 
        name: "Polycab 1.5mm Copper Wire", 
        brand: "Polycab", 
        category: "wires", 
        price: 4500, 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 124,
        seoKeywords: "Polycab 1.5mm wire price Anand, copper wire Gujarat"
    },
    { 
        id: 2, 
        name: "Polycab 2.5mm House Wire", 
        brand: "Polycab", 
        category: "wires", 
        price: 7200, 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", 
        rating: 4.9, 
        reviews: 89,
        seoKeywords: "Polycab 2.5mm wire Anand, house wiring Anand"
    },
    { 
        id: 3, 
        name: "Finolex 4mm FR PVC Wire", 
        brand: "Finolex", 
        category: "wires", 
        price: 12500, 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", 
        rating: 4.7, 
        reviews: 67,
        seoKeywords: "Finolex 4mm wire Anand, PVC wire Gujarat"
    },
    { 
        id: 4, 
        name: "RR Kabel 1.5mm Twin Wire", 
        brand: "RR Kabel", 
        category: "wires", 
        price: 5800, 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", 
        rating: 4.6, 
        reviews: 56,
        seoKeywords: "RR Kabel wire price Anand"
    },
    { 
        id: 5, 
        name: "Polycab 6mm Heavy Duty Wire", 
        brand: "Polycab", 
        category: "wires", 
        price: 18500, 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", 
        rating: 4.9, 
        reviews: 78,
        seoKeywords: "Polycab 6mm heavy duty wire Anand"
    },

    // LIGHTS CATEGORY - Havells, Syska, Anchor
    { 
        id: 6, 
        name: "Havells LED Ceiling Light 12W", 
        brand: "Havells", 
        category: "lights", 
        price: 1890, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", 
        rating: 4.6, 
        reviews: 203,
        seoKeywords: "Havells LED light Anand, LED ceiling light price"
    },
    { 
        id: 7, 
        name: "Syska 20W Tube Light", 
        brand: "Syska", 
        category: "lights", 
        price: 850, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", 
        rating: 4.5, 
        reviews: 156,
        seoKeywords: "Syska tube light Anand, LED tube light price"
    },
    { 
        id: 8, 
        name: "Havells 18W LED Panel Light", 
        brand: "Havells", 
        category: "lights", 
        price: 2450, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 145,
        seoKeywords: "Havells LED panel light, panel light price Anand"
    },
    { 
        id: 9, 
        name: "Anchor Roma 40W Bulb", 
        brand: "Anchor", 
        category: "lights", 
        price: 350, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", 
        rating: 4.4, 
        reviews: 98,
        seoKeywords: "Anchor Roma bulb price, LED bulb Anand"
    },
    { 
        id: 10, 
        name: "Syska 9W LED Bulb Pack", 
        brand: "Syska", 
        category: "lights", 
        price: 1250, 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", 
        rating: 4.7, 
        reviews: 187,
        seoKeywords: "Syska LED bulb pack, bulb price Anand"
    },

    // SWITCHES CATEGORY - Anchor, Legrand, Havells
    { 
        id: 11, 
        name: "Anchor Roma Switch 6A", 
        brand: "Anchor", 
        category: "switches", 
        price: 250, 
        image: "https://images.unsplash.com/photo-1600147613280-f24e0f8ceae6?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 89,
        seoKeywords: "Anchor Roma switch price Anand, switch 6A"
    },
    { 
        id: 12, 
        name: "Legrand Myrius Switch 10A", 
        brand: "Legrand", 
        category: "switches", 
        price: 450, 
        image: "https://images.unsplash.com/photo-1600147613280-f24e0f8ceae6?w=400&h=400&fit=crop", 
        rating: 4.9, 
        reviews: 112,
        seoKeywords: "Legrand Myrius switch Anand, modular switch price"
    },
    { 
        id: 13, 
        name: "Havells Crabtree Switch Plate", 
        brand: "Havells", 
        category: "switches", 
        price: 550, 
        image: "https://images.unsplash.com/photo-1600147613280-f24e0f8ceae6?w=400&h=400&fit=crop", 
        rating: 4.7, 
        reviews: 67,
        seoKeywords: "Havells switch plate, electrical switch Anand"
    },
    { 
        id: 14, 
        name: "Anchor Roma 2 Way Switch", 
        brand: "Anchor", 
        category: "switches", 
        price: 320, 
        image: "https://images.unsplash.com/photo-1600147613280-f24e0f8ceae6?w=400&h=400&fit=crop", 
        rating: 4.6, 
        reviews: 78,
        seoKeywords: "2 way switch price, Anchor Roma switch Anand"
    },
    { 
        id: 15, 
        name: "Legrand Modular Dimmer Switch", 
        brand: "Legrand", 
        category: "switches", 
        price: 850, 
        image: "https://images.unsplash.com/photo-1600147613280-f24e0f8ceae6?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 95,
        seoKeywords: "dimmer switch price, modular switch Legrand"
    },

    // CABLES CATEGORY - Polycab, RR Kabel, Finolex
    { 
        id: 16, 
        name: "Polycab 4 Core Cable 2.5mm", 
        brand: "Polycab", 
        category: "cables", 
        price: 24500, 
        image: "https://images.unsplash.com/photo-1558618047-3c8c76fdd7e4?w=400&h=400&fit=crop", 
        rating: 4.7, 
        reviews: 45,
        seoKeywords: "Polycab 4 core cable Anand, cable price"
    },
    { 
        id: 17, 
        name: "RR Kabel 2.5mm Armoured Cable", 
        brand: "RR Kabel", 
        category: "cables", 
        price: 28000, 
        image: "https://images.unsplash.com/photo-1558618047-3c8c76fdd7e4?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 52,
        seoKeywords: "armoured cable price, RR Kabel Anand"
    },
    { 
        id: 18, 
        name: "Finolex 6 Core Cable", 
        brand: "Finolex", 
        category: "cables", 
        price: 35000, 
        image: "https://images.unsplash.com/photo-1558618047-3c8c76fdd7e4?w=400&h=400&fit=crop", 
        rating: 4.6, 
        reviews: 38,
        seoKeywords: "Finolex cable, multi core cable Anand"
    },
    { 
        id: 19, 
        name: "Polycab 3 Core 4mm Cable", 
        brand: "Polycab", 
        category: "cables", 
        price: 18500, 
        image: "https://images.unsplash.com/photo-1558618047-3c8c76fdd7e4?w=400&h=400&fit=crop", 
        rating: 4.9, 
        reviews: 61,
        seoKeywords: "3 core cable price, power cable Anand"
    },
    { 
        id: 20, 
        name: "RR Kabel 1.5mm Single Core Cable", 
        brand: "RR Kabel", 
        category: "cables", 
        price: 8500, 
        image: "https://images.unsplash.com/photo-1558618047-3c8c76fdd7e4?w=400&h=400&fit=crop", 
        rating: 4.5, 
        reviews: 42,
        seoKeywords: "single core cable, RR Kabel cable Anand"
    },

    // FANS CATEGORY - Havells, Usha, Crompton
    { 
        id: 21, 
        name: "Havells Pacer 1200mm Ceiling Fan", 
        brand: "Havells", 
        category: "fans", 
        price: 2850, 
        image: "https://images.unsplash.com/photo-1605046459558-615cce38bd4e?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 178,
        seoKeywords: "Havells ceiling fan 1200mm, fan price Anand"
    },
    { 
        id: 22, 
        name: "Usha Striker Plus 1200mm Fan", 
        brand: "Usha", 
        category: "fans", 
        price: 3200, 
        image: "https://images.unsplash.com/photo-1605046459558-615cce38bd4e?w=400&h=400&fit=crop", 
        rating: 4.6, 
        reviews: 94,
        seoKeywords: "Usha ceiling fan, high speed fan Anand"
    },
    { 
        id: 23, 
        name: "Havells Fusion 1200mm Fan", 
        brand: "Havells", 
        category: "fans", 
        price: 3100, 
        image: "https://images.unsplash.com/photo-1605046459558-615cce38bd4e?w=400&h=400&fit=crop", 
        rating: 4.7, 
        reviews: 145,
        seoKeywords: "Havells Fusion fan, fan online Anand"
    },
    { 
        id: 24, 
        name: "Crompton Energa 1200mm Fan", 
        brand: "Crompton", 
        category: "fans", 
        price: 2950, 
        image: "https://images.unsplash.com/photo-1605046459558-615cce38bd4e?w=400&h=400&fit=crop", 
        rating: 4.5, 
        reviews: 112,
        seoKeywords: "Crompton fan price, energy efficient fan Anand"
    },
    { 
        id: 25, 
        name: "Usha Mist Air 1400mm Fan", 
        brand: "Usha", 
        category: "fans", 
        price: 4200, 
        image: "https://images.unsplash.com/photo-1605046459558-615cce38bd4e?w=400&h=400&fit=crop", 
        rating: 4.8, 
        reviews: 167,
        seoKeywords: "Usha 1400mm fan, oscillating fan Anand"
    }
];

// ========================================
// INITIALIZATION - DOM Ready
// ========================================

document.addEventListener('DOMContentLoaded', async function() {
    console.log('Endless Electricals - Website Initialized');
    try {
        const loaded = await loadProductsData();
        products = loaded;
        console.log(`✅ Loaded ${products.length} products`);
    } catch (e) {
        console.warn('Using static products due to load error:', e);
        console.log(`✅ Using ${products.length} static products`);
    }

    // Ensure products array is populated before rendering
    if (!products || products.length === 0) {
        console.error('❌ No products available!');
        return;
    }

    renderProducts(products);
    initSearch();
    initFilters();
    initMobileMenu();
    initScrollAnimations();
    initParallax();
    applyInitialFilterFromUrl();
    initHeaderScroll();
    initBackToTop();
    renderProductDetail();
    initPageTransitions();
    trackPageView();
});

// ========================================
// DYNAMIC DATA LOADING (JSON File - Primary | Firestore as Backup)
// ========================================

let __firebaseScriptsLoaded = false;
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.onload = resolve;
        s.onerror = () => reject(new Error('Failed to load ' + url));
        document.head.appendChild(s);
    });
}

async function ensureFirebaseFirestore() {
    const cfg = window.FIREBASE_CONFIG;
    if (!cfg || !cfg.enabled) return false;

    if (!window.firebase) {
        await loadScript('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
        await loadScript('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js');
        __firebaseScriptsLoaded = true;
    }

    if (window.firebase && (!firebase.apps || firebase.apps.length === 0)) {
        firebase.initializeApp(cfg.options);
        window.firebaseProjectEnabled = true;
    }

    return !!(window.firebase && firebase.firestore);
}

async function loadProductsData() {
    // Try Google Sheet first if enabled
    const sheetConfig = window.GOOGLE_SHEET_CONFIG;
    if (sheetConfig && sheetConfig.enabled) {
        try {
            console.log('📊 Loading products from Google Sheet...');
            const items = await loadFromGoogleSheet();
            if (items && items.length > 0) {
                console.log(`✅ Loaded ${items.length} products from Google Sheet`);
                return items;
            }
        } catch (sheetError) {
            console.warn('⚠️ Google Sheet load failed:', sheetError.message);
            console.log('💾 Falling back to products.json...');
        }
    }

    try {
        // Try to load from products.json (fallback method)
        console.log('📥 Loading products from products.json...');
        const response = await fetch('products.json');
        
        if (!response.ok) {
            throw new Error(`Failed to load products.json: ${response.status}`);
        }
        
        const data = await response.json();
        const items = data.products || [];
        
        if (items.length > 0) {
            console.log(`✅ Successfully loaded ${items.length} products from products.json`);
            // Validate and normalize product data
            return items.map(p => ({
                id: p.id || 0,
                name: p.name || 'Unnamed Product',
                brand: p.brand || 'Brand',
                category: p.category || 'other',
                price: Number(p.price) || 0,
                image: p.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
                rating: Number(p.rating) || 0,
                reviews: Number(p.reviews) || 0,
                seoKeywords: p.seoKeywords || ''
            }));
        }
    } catch (jsonError) {
        console.warn('⚠️ Could not load from products.json:', jsonError.message);
        console.log('💾 Falling back to Firestore or static products...');
    }

    // Fallback: Try Firebase if enabled
    const cfg = window.FIREBASE_CONFIG;
    if (cfg && cfg.enabled) {
        try {
            const ok = await ensureFirebaseFirestore();
            if (ok) {
                const db = firebase.firestore();
                const snap = await db.collection('products').get();
                const items = snap.docs.map(d => {
                    const data = d.data() || {};
                    return {
                        id: d.id,
                        name: data.name || 'Unnamed Product',
                        brand: data.brand || 'Brand',
                        category: data.category || 'other',
                        price: Number(data.price) || 0,
                        image: data.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
                        rating: Number(data.rating) || 0,
                        reviews: Number(data.reviews) || 0,
                        seoKeywords: data.seoKeywords || ''
                    };
                });
                if (items.length > 0) {
                    console.log(`✅ Loaded ${items.length} products from Firestore`);
                    return items;
                }
            }
        } catch (fbError) {
            console.warn('⚠️ Firestore load failed:', fbError.message);
        }
    }

    // Final fallback: Use static products
    console.log(`✅ Using ${products.length} static products`);
    return products;
}

// ========================================
// GOOGLE SHEETS CSV PARSING
// ========================================

async function loadFromGoogleSheet() {
    const sheetConfig = window.GOOGLE_SHEET_CONFIG;
    if (!sheetConfig || !sheetConfig.url || sheetConfig.url.includes('YOUR_SHEET_ID')) {
        throw new Error('Google Sheet URL not configured. See sheet-config.js');
    }

    try {
        const response = await fetch(sheetConfig.url);
        if (!response.ok) {
            throw new Error(`Failed to load sheet: ${response.status}`);
        }

        const csvText = await response.text();
        const items = parseCSVtoProducts(csvText);
        
        if (items.length === 0) {
            throw new Error('No products found in sheet');
        }

        return items;
    } catch (error) {
        throw new Error(`Google Sheet Error: ${error.message}`);
    }
}

function parseCSVtoProducts(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) {
        console.warn('⚠️ CSV has no data rows');
        return [];
    }

    // Parse header
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const indices = {
        id: headers.indexOf('id'),
        name: headers.indexOf('name'),
        brand: headers.indexOf('brand'),
        category: headers.indexOf('category'),
        price: headers.indexOf('price'),
        image: headers.indexOf('image'),
        rating: headers.indexOf('rating'),
        reviews: headers.indexOf('reviews'),
        seoKeywords: headers.indexOf('seokeywords')
    };

    // Validate headers
    if (Object.values(indices).some(i => i === -1)) {
        console.warn('⚠️ Missing required columns in CSV');
        console.log('Found columns:', headers);
        return [];
    }

    // Parse rows
    const products = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue; // Skip empty lines

        const cells = parseCSVLine(line);
        if (cells.length < 3) continue; // Skip incomplete rows

        try {
            const product = {
                id: parseInt(cells[indices.id]) || i,
                name: (cells[indices.name] || 'Product').trim(),
                brand: (cells[indices.brand] || 'Brand').trim(),
                category: (cells[indices.category] || 'other').trim().toLowerCase(),
                price: parseInt(cells[indices.price]) || 0,
                image: (cells[indices.image] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop').trim(),
                rating: parseFloat(cells[indices.rating]) || 0,
                reviews: parseInt(cells[indices.reviews]) || 0,
                seoKeywords: (cells[indices.seoKeywords] || '').trim()
            };

            // Validate required fields
            if (product.name && product.category) {
                products.push(product);
            }
        } catch (e) {
            console.warn(`⚠️ Error parsing row ${i}:`, e.message);
        }
    }

    console.log(`✅ Parsed ${products.length} products from CSV`);
    return products;
}

function parseCSVLine(line) {
    // Handle CSV with quoted fields
    const cells = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                current += '"';
                i++; // Skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            cells.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    cells.push(current);
    return cells;
}

// ========================================
// PRODUCT RENDERING - Optimized
// ========================================

function renderProducts(productList) {
    const grid = document.getElementById('productsGrid');
    
    // Remove fade-out if it was applied
    document.body.classList.remove('fade-out');
    
    // Debug logging
    console.log(`renderProducts called with ${productList?.length || 0} products`);
    console.log('Grid element found:', !!grid);
    console.log('Products array:', products?.length || 0);
    
    if (!grid) {
        console.error('❌ productsGrid element not found in DOM');
        return;
    }

    if (!productList || productList.length === 0) {
        console.warn('⚠️ No products to display');
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-2xl opacity-75">No products found. Try a different search or filter.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = productList.map(product => {
        // Escape special characters to prevent template issues
        const name = (product.name || '').replace(/'/g, "\\'").replace(/"/g, "&quot;");
        const brand = (product.brand || '').replace(/'/g, "\\'").replace(/"/g, "&quot;");
        
        return `
        <div class="glass rounded-2xl p-6 hover-glow hover:scale-105 transition-all duration-300 group overflow-hidden product-card hover-tilt" 
             data-category="${product.category}" 
             data-product-id="${product.id}"
             style="opacity: 1; transform: translateY(0);">
            
            <!-- Product Image -->
            <div class="relative overflow-hidden rounded-xl mb-4 h-48 bg-gradient-to-br from-white/10 to-transparent">
                <img src="${product.image}" 
                     alt="${name} ${brand} price Anand" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 product-image" 
                     loading="lazy"
                     decoding="async"
                     onload="this.parentElement.classList.remove('skeleton')">
                <div class="absolute top-3 right-3 bg-secondary/90 text-primary text-xs px-3 py-1 rounded-full font-semibold product-rating">
                    ${product.rating}⭐ (${product.reviews})
                </div>
            </div>

            <!-- Product Details -->
            <div class="space-y-2">
                <h3 class="font-semibold text-lg line-clamp-2 hover:text-secondary transition-colors">
                    ${name}
                </h3>
                <p class="text-secondary font-medium text-sm">${brand}</p>
                
                <!-- Price & Reviews -->
                <div class="flex items-center justify-between">
                    <div class="text-2xl font-bold text-secondary product-price">₹${product.price.toLocaleString()}</div>
                    <span class="text-sm opacity-75">${product.reviews} reviews</span>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-2 pt-2">
                    <a href="https://wa.me/919825338373?text=Hi%20Endless%20Electricals%2C%20I%20want%20${encodeURIComponent(product.name)}%20by%20${product.brand}%20-%20₹${product.price}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="flex-1 bg-green-500 hover:bg-green-600 text-center py-2 px-4 rounded-xl text-sm font-semibold transition-colors product-button"
                       onclick="trackEvent('WhatsApp Click', '${product.name}')">
                        WhatsApp
                    </a>
                    <a href="product.html?id=${product.id}" class="px-4 py-2 bg-primary/20 hover:bg-primary/40 text-white rounded-xl text-sm font-semibold transition-colors product-button">
                        Details
                    </a>
                    <button class="w-12 h-12 bg-secondary/20 hover:bg-secondary text-primary rounded-xl flex items-center justify-center hover-glow transition-all product-button"
                            onclick="addToCart(${product.id}, '${product.name}')">
                        🛒
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    console.log(`✅ Rendered ${productList.length} products`);

    // Apply skeleton to image containers initially
    grid.querySelectorAll('.product-card .relative').forEach(el => {
        el.classList.add('skeleton');
    });

    // Apply staggered reveal delays
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduce) {
        grid.querySelectorAll('.product-card').forEach((card, i) => {
            card.style.transitionDelay = `${Math.min(i * 60, 600)}ms`;
        });
    }

    // Initialize hover tilt interactions
    initHoverTilt(grid.querySelectorAll('.product-card'));
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchHeader = document.getElementById('searchInput');
    
    function filterProducts() {
        // Get search query from either search box
        const globalQuery = (searchInput?.value || '').toLowerCase().trim();
        const headerQuery = (searchHeader?.value || '').toLowerCase().trim();
        const query = globalQuery || headerQuery;
        
        // Update global state
        currentSearchQuery = query;
        
        // If no search query, reset to show current filter or all products
        if (!query) {
            let toRender = products;
            if (currentFilterState !== 'all') {
                toRender = products.filter(p => p.category === currentFilterState);
            }
            renderProducts(toRender);
            
            // Ensure filter buttons reflect current state
            document.querySelectorAll('[data-filter]').forEach(b => {
                b.classList.remove('bg-primary/40', 'bg-accent/40');
                b.classList.add(b.dataset.filter === 'all' ? 'bg-primary/20' : 'bg-accent/20');
            });
            const currentBtn = document.querySelector(`[data-filter="${currentFilterState}"]`);
            if (currentBtn) {
                currentBtn.classList.remove('bg-primary/20', 'bg-accent/20');
                currentBtn.classList.add(currentFilterState === 'all' ? 'bg-primary/40' : 'bg-accent/40');
            }
            return;
        }
        
        // Perform search across all products
        const filtered = products.filter(p => {
            const name = (p.name || '').toLowerCase();
            const brand = (p.brand || '').toLowerCase();
            const category = (p.category || '').toLowerCase();
            const keywords = (p.seoKeywords || '').toLowerCase();
            
            return name.includes(query) || 
                   brand.includes(query) ||
                   category.includes(query) ||
                   keywords.includes(query);
        });
        
        // Render filtered results
        renderProducts(filtered.length > 0 ? filtered : []);
        
        // Track search event
        trackEvent('Search', query);
        
        console.log(`🔍 Search: "${query}" - Found ${filtered.length} results`);
    }
    
    // Add event listeners
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    if (searchHeader) {
        searchHeader.addEventListener('input', filterProducts);
    }
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================

function initFilters() {
    document.querySelectorAll('[data-filter]').forEach(btn => {
        // Prevent page transitions for filter buttons
        btn.style.pointerEvents = 'auto';
        btn.removeAttribute('href');
        
        btn.addEventListener('click', function(e) {
            // Stop any propagation to prevent page transitions
            e.preventDefault();
            e.stopPropagation();
            
            const filter = this.dataset.filter;
            
            console.log(`🔘 Filter button clicked: ${filter}`);
            console.log(`📦 Total products available: ${products?.length || 0}`);
            
            // Update global state
            currentFilterState = filter;
            currentSearchQuery = '';
            
            // Clear search inputs when using filter buttons
            const searchInput = document.getElementById('globalSearch');
            const searchHeader = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            if (searchHeader) searchHeader.value = '';
            
            // Update active button styles
            document.querySelectorAll('[data-filter]').forEach(b => {
                b.classList.remove('bg-accent/40', 'bg-primary/40');
                b.classList.add(b.dataset.filter === 'all' ? 'bg-primary/20' : 'bg-accent/20');
            });
            
            this.classList.remove('bg-primary/20', 'bg-accent/20');
            this.classList.add(filter === 'all' ? 'bg-primary/40' : 'bg-accent/40');
            
            // Filter products and render immediately
            let filtered;
            if (filter === 'all') {
                filtered = products;
                console.log(`✅ Showing all ${products.length} products`);
            } else {
                filtered = products.filter(p => p.category === filter);
                console.log(`✅ Filtered to ${filtered.length} ${filter} products`);
            }
            
            console.log('Filtered products:', filtered);
            
            // Render products
            renderProducts(filtered);
            
            trackEvent('Filter', filter);
        });
    });
}

// ========================================
// Apply initial filter from URL (?category=)
// ========================================

function applyInitialFilterFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    
    // Only apply filter if explicitly set in URL
    if (!cat) {
        currentFilterState = 'all';
        return;
    }

    // Update state
    currentFilterState = cat;
    
    const btn = document.querySelector(`[data-filter="${cat}"]`);
    if (btn) {
        // Directly apply the filter without clicking (which would trigger event listeners)
        document.querySelectorAll('[data-filter]').forEach(b => {
            b.classList.remove('bg-primary/40', 'bg-accent/40');
            b.classList.add(b.dataset.filter === 'all' ? 'bg-primary/20' : 'bg-accent/20');
        });
        
        btn.classList.remove('bg-primary/20', 'bg-accent/20');
        btn.classList.add(cat === 'all' ? 'bg-primary/40' : 'bg-accent/40');
        
        // Filter products
        let filtered;
        if (cat === 'all') {
            filtered = products;
        } else {
            filtered = products.filter(p => p.category === cat);
        }
        renderProducts(filtered);
        
        console.log(`📍 URL Filter applied: ${cat}`);
    } else {
        // If no button (e.g., not on products page), render directly
        const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
        renderProducts(filtered);
        console.log(`📍 URL Filter applied (no button): ${cat}`);
    }
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    
    if (!btn || !menu) return;
    
    btn.addEventListener('click', () => {
        const isHidden = menu.classList.contains('hidden');
        
        if (isHidden) {
            menu.classList.remove('hidden');
            btn.setAttribute('aria-expanded', 'true');
        } else {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close menu when link is clicked
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========================================
// PARALLAX EFFECT - Hero floating elements
// ========================================

let PARALLAX_STATE = { mx: 0, my: 0 };

function initParallax() {
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    if (parallaxEls.length === 0) return;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;

    let rafId = null;
    const update = () => {
        rafId = null;
        const y = window.scrollY;
        parallaxEls.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
            const tx = PARALLAX_STATE.mx * speed * 12; // subtle X parallax
            const ty = (y * speed) + (PARALLAX_STATE.my * speed * 8);
            el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
    };

    const requestUpdate = () => {
        if (!rafId) rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    requestUpdate();

    const hero = document.querySelector('section.hero-animated');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            PARALLAX_STATE.mx = (e.clientX - cx) / rect.width; // -0.5..0.5
            PARALLAX_STATE.my = (e.clientY - cy) / rect.height;
            requestUpdate();
        });
        hero.addEventListener('mouseleave', () => {
            PARALLAX_STATE.mx = 0;
            PARALLAX_STATE.my = 0;
            requestUpdate();
        });
    }
}

// ========================================
// HEADER SCROLL STATE
// ========================================

function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    const onScroll = () => {
        if (window.scrollY > 10) header.classList.add('header--scrolled');
        else header.classList.remove('header--scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ========================================
// BACK TO TOP BUTTON
// ========================================

function initBackToTop() {
    if (document.querySelector('.back-to-top')) return; // avoid duplicates
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    const toggle = () => {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// HOVER TILT INTERACTIONS
// ========================================

function initHoverTilt(cards) {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;
    if (!cards || cards.length === 0) return;

    cards.forEach(card => {
        const rect = () => card.getBoundingClientRect();
        const onMove = (e) => {
            const r = rect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            const rotateY = ((x / r.width) - 0.5) * 6; // max 6deg
            const rotateX = -((y / r.height) - 0.5) * 6;
            card.style.transform = `translateY(-8px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        const onLeave = () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        };
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
    });
}

// ========================================
// CART FUNCTIONALITY
// ========================================

let cart = JSON.parse(localStorage.getItem('endless-cart')) || [];

function addToCart(productId, productName) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('endless-cart', JSON.stringify(cart));
        
        // Show notification
        showNotification(`${productName} added to cart!`);
        trackEvent('Add to Cart', productName);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl z-50 animate-fadeInUp';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeInUp 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// ANALYTICS & TRACKING
// ========================================

function trackPageView() {
    // Send page view to Google Analytics (if configured)
    if (window.gtag) {
        window.gtag('pageview');
    }
    console.log('Page view tracked');
}

function trackEvent(eventCategory, eventLabel) {
    // Send event to Google Analytics
    if (window.gtag) {
        window.gtag('event', eventCategory, {
            'event_category': eventCategory,
            'event_label': eventLabel
        });
    }
    console.log(`Event tracked: ${eventCategory} - ${eventLabel}`);
}

// Track link clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="tel:"]')) {
        trackEvent('Call Button', e.target.href);
    }
    if (e.target.matches('a[href^="https://wa.me"]')) {
        trackEvent('WhatsApp Click', e.target.href);
    }
    if (e.target.matches('a[href^="mailto:"]')) {
        trackEvent('Email Click', e.target.href);
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Preload critical images
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});

// Service Worker Registration (Optional)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}

// ========================================
// PRODUCT DETAIL RENDERING
// ========================================

function renderProductDetail() {
    const container = document.getElementById('productDetail');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    if (!idParam) {
        container.innerHTML = `
            <div class="glass p-8 rounded-2xl text-center">
                <p class="text-xl mb-4">Product not specified.</p>
                <a href="products.html" class="inline-block px-6 py-3 bg-secondary text-primary rounded-xl">Back to Products</a>
            </div>
        `;
        return;
    }
    const isNumberId = !isNaN(parseInt(idParam, 10));
    const idResolved = isNumberId ? parseInt(idParam, 10) : idParam;
    const product = products.find(p => String(p.id) === String(idResolved));

    if (!product) {
        container.innerHTML = `
            <div class="glass p-8 rounded-2xl text-center">
                <p class="text-xl mb-4">Product not found.</p>
                <a href="products.html" class="inline-block px-6 py-3 bg-secondary text-primary rounded-xl">Back to Products</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <section class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start reveal">
            <div class="glass rounded-2xl overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-[360px] object-cover" loading="lazy" decoding="async">
            </div>
            <div class="glass p-6 rounded-2xl">
                <h1 class="text-3xl md:text-4xl font-bold mb-2">${product.name}</h1>
                <p class="text-secondary font-semibold mb-4">${product.brand}</p>
                <div class="flex items-center gap-3 mb-4">
                    <span class="product-rating">${product.rating}⭐</span>
                    <span class="opacity-75 text-sm">${product.reviews} reviews</span>
                </div>
                <div class="product-price mb-6">₹${product.price.toLocaleString()}</div>
                <p class="opacity-90 mb-6">${product.seoKeywords || ''}</p>
                <div class="flex gap-3">
                    <a href="https://wa.me/919825338373?text=Hi%20Endless%20Electricals%2C%20I%20want%20${encodeURIComponent(product.name)}%20by%20${product.brand}%20-%20₹${product.price}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl product-button">WhatsApp</a>
                    <button onclick="addToCart(${product.id}, '${product.name}')" class="px-6 py-3 bg-secondary/20 hover:bg-secondary text-primary rounded-xl product-button">Add to Cart</button>
                    <a href="products.html?category=${product.category}" class="px-6 py-3 bg-primary/20 hover:bg-primary/40 text-white rounded-xl product-button">Back to ${product.category}</a>
                </div>
                <script type="application/ld+json">
                {
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "${product.name}",
                  "image": "${product.image}",
                  "brand": { "@type": "Brand", "name": "${product.brand}" },
                  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "${product.rating}", "reviewCount": "${product.reviews}" },
                  "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "${product.price}" }
                }
                </script>
            </div>
        </section>
    `;
}

// ========================================
// PAGE TRANSITIONS
// ========================================
function initPageTransitions() {
    // Page transitions disabled - causes issues with search/filter
    // Smooth navigation will be handled by CSS animations instead
    return;
}

// ========================================
// EXPORT FOR TESTING
// ========================================

window.EndlessElectricals = {
    products,
    renderProducts,
    trackEvent,
    addToCart,
    getCart: () => cart,
    renderProductDetail
};

console.log('✅ Endless Electricals JavaScript loaded - All features active');
