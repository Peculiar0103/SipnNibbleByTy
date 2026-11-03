// --- SipNNibbleByTy Application Logic ---

// 1. Product Database
const products = [
    {
        id: "ready-to-fry-chops",
        name: "Ready-to-Fry Small Chops",
        basePrice: 4500,
        description: "Freshly prepped samosas, spring rolls, and puff-puff ready to fry and enjoy hot at home.",
        category: "pastries",
        image: "assets/images/small-chops.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "meat-pie",
        name: "Gourmet Meat Pie",
        basePrice: 1200,
        description: "Buttery, flaky golden crust stuffed with a rich, perfectly seasoned beef and potato filling.",
        category: "pastries",
        image: "assets/images/meat-pie.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "doughnuts",
        name: "Fluffy Doughnuts",
        basePrice: 800,
        description: "Soft, pillowy doughnuts glazed with sugar or custom fillings. Melt-in-your-mouth goodness.",
        category: "pastries",
        image: "assets/images/doughnuts.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "chinchin",
        name: "Crunchy Chinchin",
        basePrice: 1000,
        description: "Sweet, crunchy, and milky bite-sized pastry snacks. Highly addictive and perfect for munching.",
        category: "pastries",
        image: "assets/images/chinchin.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "peanuts",
        name: "Honey Roasted Peanuts",
        basePrice: 1000,
        description: "Sweet and crunchy honey-coated peanuts, roasted to perfection for a delicious snack.",
        category: "pastries",
        image: "assets/images/peanuts.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "cookies",
        name: "Chocolate Chip Cookies",
        basePrice: 1000,
        description: "Rich cookies baked with gourmet chocolate chips. Crispy edges, soft chewy centers.",
        category: "pastries",
        image: "assets/images/cookies.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "banana-bread",
        name: "Flavorful Banana Bread",
        basePrice: 3000,
        description: "Moist, fragrant banana bread. Select your favorite flavor addition.",
        category: "pastries",
        image: "assets/images/banana-bread.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=600",
        options: {
            label: "Select Flavor",
            choices: [
                { name: "Classic Banana", price: 3000 },
                { name: "Chocolate Chip", price: 3500 },
                { name: "Crunchy Walnut", price: 3800 },
                { name: "Mixed Fruit & Coconut", price: 3800 }
            ]
        }
    },
    {
        id: "cake-tubs",
        name: "Indulgent Cake Tubs",
        basePrice: 2500,
        description: "Creamy, moist layered cake in tubs with delicious frosting. Choose your tub size.",
        category: "pastries",
        image: "assets/images/cake-tubs.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600",
        options: {
            label: "Select Size",
            choices: [
                { name: "Small Tub (250ml)", price: 2500 },
                { name: "Medium Tub (500ml)", price: 4500 },
                { name: "Large Tub (1000ml)", price: 7500 }
            ]
        }
    },
    {
        id: "fruity-zobo",
        name: "Refreshing Fruity Zobo",
        basePrice: 1000,
        description: "Chilled hibiscus drink infused with cloves, ginger, and sweet fresh fruit juices.",
        category: "drinks",
        image: "assets/images/fruity-zobo.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        options: {
            label: "Select Packaging",
            choices: [
                { name: "Single Bottle (50cl)", price: 1000 },
                { name: "6-Bottle Pack", price: 5500 },
                { name: "12-Bottle Family Pack", price: 10000 }
            ]
        }
    },
    {
        id: "small-chops-platter",
        name: "Custom Small Chops Platter",
        basePrice: 15000,
        description: "Golden samosas, spring rolls, puff puff, and chicken arranged for events. Customizable size.",
        category: "platters",
        image: "assets/images/platters.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600",
        options: {
            label: "Platter Size",
            choices: [
                { name: "Mini Platter (Serves 2-3)", price: 15000 },
                { name: "Standard Platter (Serves 5-8)", price: 25000 },
                { name: "Party Platter (Serves 10-15)", price: 45000 }
            ]
        }
    },
    {
        id: "weekend-treat",
        name: "I Deserve It Weekend Treat",
        basePrice: 7500,
        description: "A loaded weekend combination platter featuring Samosas, Spring Rolls, Puff-Puff, Chicken, and cold Fruity Zobo.",
        category: "specials",
        image: "assets/images/weekend-treat.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600"
    }
];

// 2. State Variables
let cart = [];
const businessWhatsApp = "2348160882474";

// 3. Select DOM Elements
const productsGrid = document.getElementById("products-grid");
const categoryTabs = document.querySelectorAll(".filter-tab");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const cartBody = document.getElementById("cart-body");
const cartFooter = document.getElementById("cart-footer");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartBadge = document.querySelector(".cart-badge");
const checkoutTriggerBtn = document.getElementById("checkout-trigger-btn");
const checkoutModalOverlay = document.getElementById("checkout-modal-overlay");
const closeCheckoutBtn = document.getElementById("close-checkout-btn");
const checkoutForm = document.getElementById("checkout-form");
const deliveryMethod = document.getElementById("order-method");
const deliveryAddressGroup = document.getElementById("delivery-address-group");
const deliveryAddressInput = document.getElementById("order-address");
const modalSummaryItems = document.getElementById("modal-summary-items");
const modalSummaryTotal = document.getElementById("modal-summary-total");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");
const header = document.querySelector(".main-header");
const testimonialTrack = document.getElementById("testimonial-track");
const dotContainer = document.getElementById("slider-dots");
const generalInquiryForm = document.getElementById("general-inquiry-form");

// 4. Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    // Load Cart from localStorage
    loadCartFromStorage();
    
    // Render initial products catalog
    renderProducts("all");
    
    // Setup Navigation Handlers
    setupNavigation();
    
    // Setup FAQ Accordion Handlers
    setupFAQAccordion();
    
    // Setup Testimonial Slider
    setupTestimonials();
    
    // Setup Cart Drawer Events
    setupCartDrawerEvents();
    
    // Setup Checkout Dialog Events
    setupCheckoutEvents();

    // Setup Inquiry Form
    setupInquiryForm();
});

// 5. Product Rendering & Filter Functions
function renderProducts(filter) {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";
    
    const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);
    
    filteredProducts.forEach(product => {
        const hasOptions = !!product.options;
        let optionsHTML = "";
        
        if (hasOptions) {
            optionsHTML = `
                <div class="product-options-selector">
                    <label for="select-${product.id}">${product.options.label}</label>
                    <select id="select-${product.id}" class="product-select" data-id="${product.id}">
                        ${product.options.choices.map((c, i) => `<option value="${i}">${c.name} (+₦${c.price - product.basePrice > 0 ? c.price - product.basePrice : 0})</option>`).join("")}
                    </select>
                </div>
            `;
        }
        
        const cardHTML = `
            <div class="product-card" data-category="${product.category}">
                <div class="product-card-img">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='${product.fallbackImage}'">
                    ${product.category === 'specials' ? `<span class="product-badge">Promo</span>` : ""}
                </div>
                <div class="product-card-details">
                    <h3>${product.name}</h3>
                    <p class="desc">${product.description}</p>
                    ${optionsHTML}
                    <div class="product-card-footer">
                        <span class="price" id="price-${product.id}">₦${product.basePrice.toLocaleString()}</span>
                        <button class="add-to-cart-btn add-product-btn" data-id="${product.id}" aria-label="Add ${product.name} to cart">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += cardHTML;
    });

    // Attach event listeners for option changes
    document.querySelectorAll(".product-select").forEach(select => {
        select.addEventListener("change", handleOptionChange);
    });

    // Attach event listeners for Add to Cart buttons
    document.querySelectorAll(".add-product-btn").forEach(btn => {
        btn.addEventListener("click", handleAddToCart);
    });
}

function handleOptionChange(e) {
    const productId = e.target.getAttribute("data-id");
    const optionIndex = parseInt(e.target.value);
    const product = products.find(p => p.id === productId);
    if (!product || !product.options) return;
    
    const selectedChoice = product.options.choices[optionIndex];
    const priceText = document.getElementById(`price-${productId}`);
    if (priceText) {
        priceText.textContent = `₦${selectedChoice.price.toLocaleString()}`;
    }
}

// 6. Shopping Cart Operations
function handleAddToCart(e) {
    const btn = e.currentTarget;
    const productId = btn.getAttribute("data-id");
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let selectedOption = "";
    let finalPrice = product.basePrice;
    
    // Check if product has active selectors
    const selectEl = document.getElementById(`select-${productId}`);
    if (selectEl && product.options) {
        const choice = product.options.choices[parseInt(selectEl.value)];
        selectedOption = choice.name;
        finalPrice = choice.price;
    }
    
    addToCart(product.id, product.name, finalPrice, selectedOption, product.image, product.fallbackImage);
    
    // Micro-animation: Button feedback
    btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    btn.style.backgroundColor = "var(--success)";
    btn.style.color = "var(--white)";
    
    setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        btn.style.backgroundColor = "var(--primary-light)";
        btn.style.color = "var(--primary)";
    }, 1200);

    // Open cart drawer immediately so they see the item added
    openCart();
}

function addToCart(id, name, price, option, image, fallback) {
    // Check if item with exact same configuration (id + option) exists
    const existingItem = cart.find(item => item.id === id && item.option === option);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            option,
            image,
            fallback,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
}

function updateCartUI() {
    if (!cartBody) return;
    
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = cartCount;
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty. Let's add some delicious treats!</p>
                <a href="#menu-section" class="btn btn-primary start-nibbling-btn">Browse Menu</a>
            </div>
        `;
        cartFooter.style.display = "none";
        
        // Setup direct scroll on browse menu link
        const startBtn = cartBody.querySelector(".start-nibbling-btn");
        if (startBtn) {
            startBtn.addEventListener("click", () => {
                closeCart();
            });
        }
        return;
    }
    
    cartFooter.style.display = "block";
    cartBody.innerHTML = "";
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemHTML = `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallback}'">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    ${item.option ? `<div class="cart-item-option"><i class="fa-solid fa-sliders"></i> ${item.option}</div>` : ""}
                    <div class="cart-item-qty-row">
                        <div class="qty-selector">
                            <button class="qty-btn dec-qty" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn inc-qty" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <span class="cart-item-price">₦${itemTotal.toLocaleString()}</span>
                        <button class="remove-item-btn" data-index="${index}" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        `;
        cartBody.innerHTML += itemHTML;
    });
    
    cartSubtotal.textContent = `₦${subtotal.toLocaleString()}`;
    
    // Attach listeners
    cartBody.querySelectorAll(".inc-qty").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.currentTarget.getAttribute("data-index"));
            cart[idx].quantity += 1;
            saveCartToStorage();
            updateCartUI();
        });
    });
    
    cartBody.querySelectorAll(".dec-qty").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.currentTarget.getAttribute("data-index"));
            if (cart[idx].quantity > 1) {
                cart[idx].quantity -= 1;
            } else {
                cart.splice(idx, 1);
            }
            saveCartToStorage();
            updateCartUI();
        });
    });
    
    cartBody.querySelectorAll(".remove-item-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.currentTarget.getAttribute("data-index"));
            cart.splice(idx, 1);
            saveCartToStorage();
            updateCartUI();
        });
    });
}

function saveCartToStorage() {
    localStorage.setItem("sipnnibble_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const stored = localStorage.getItem("sipnnibble_cart");
    if (stored) {
        try {
            cart = JSON.parse(stored);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

// 7. Cart & Checkout Drawer Interface
function setupCartDrawerEvents() {
    cartToggleBtn.addEventListener("click", openCart);
    closeCartBtn.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);
    
    // Add Event listener to Special Treat combo card
    const addComboBtn = document.querySelector(".add-combo-to-cart-btn");
    if (addComboBtn) {
        addComboBtn.addEventListener("click", () => {
            const id = addComboBtn.getAttribute("data-id");
            const price = parseInt(addComboBtn.getAttribute("data-price"));
            const name = addComboBtn.getAttribute("data-name");
            const customNotes = document.getElementById("weekend-treat-note").value.trim();
            const optionString = customNotes ? `Treat (Custom: ${customNotes})` : "Standard Combo Platter";
            
            addToCart(id, name, price, optionString, "assets/images/weekend-treat.jpg", "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600");
            
            // Open cart drawer immediately
            openCart();
        });
    }
}

function openCart() {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeCart() {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Enable scrolling
}

// 8. Checkout Modal Functionality
function setupCheckoutEvents() {
    checkoutTriggerBtn.addEventListener("click", () => {
        closeCart();
        openCheckout();
    });
    
    closeCheckoutBtn.addEventListener("click", closeCheckout);
    checkoutModalOverlay.addEventListener("click", (e) => {
        if (e.target === checkoutModalOverlay) closeCheckout();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && checkoutModalOverlay.classList.contains("active")) {
            closeCheckout();
        }
        if (event.key === "Escape" && cartDrawer.classList.contains("active")) {
            closeCart();
        }
    });
    
    // Method dropdown toggles address field
    deliveryMethod.addEventListener("change", () => {
        if (deliveryMethod.value === "delivery") {
            deliveryAddressGroup.style.display = "block";
            deliveryAddressInput.setAttribute("required", "required");
        } else {
            deliveryAddressGroup.style.display = "none";
            deliveryAddressInput.removeAttribute("required");
        }
    });
    
    // Handle Form Submit (WhatsApp Compiler)
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
}

function openCheckout() {
    if (cart.length === 0) return;
    
    checkoutModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Populate Order Review details in the modal
    modalSummaryItems.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        const itemCost = item.price * item.quantity;
        total += itemCost;
        
        const row = `
            <div class="summary-item-row">
                <span>${item.quantity}x ${item.name} ${item.option ? `(${item.option})` : ""}</span>
                <span>₦${itemCost.toLocaleString()}</span>
            </div>
        `;
        modalSummaryItems.innerHTML += row;
    });
    
    modalSummaryTotal.textContent = `₦${total.toLocaleString()}`;
    
    // Pre-fill delivery date with today's date or tomorrow
    const today = new Date();
    const todayString = `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = ("0" + tomorrow.getDate()).slice(-2);
    const month = ("0" + (tomorrow.getMonth() + 1)).slice(-2);
    const dateString = `${tomorrow.getFullYear()}-${month}-${day}`;
    const orderDateInput = document.getElementById("order-date");
    orderDateInput.min = todayString;
    orderDateInput.value = dateString;
    document.getElementById("order-time").value = "12:00";
}

function closeCheckout() {
    checkoutModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const method = deliveryMethod.value;
    const address = method === "delivery" ? deliveryAddressInput.value.trim() : "Self-Pickup";
    const orderDate = document.getElementById("order-date").value;
    const orderTime = document.getElementById("order-time").value;
    const remarks = document.getElementById("order-remarks").value.trim();
    
    // Build WhatsApp Message
    let message = `Hello SipNNibbleByTy! 🌟 I'd like to place an order:\n\n`;
    
    let subtotal = 0;
    cart.forEach(item => {
        const itemCost = item.price * item.quantity;
        subtotal += itemCost;
        message += `• *${item.quantity}x ${item.name}*\n`;
        if (item.option) {
            message += `  _Option: ${item.option}_\n`;
        }
        message += `  Price: ₦${itemCost.toLocaleString()}\n\n`;
    });
    
    message += `*Subtotal:* ₦${subtotal.toLocaleString()}\n`;
    message += `-------------------------------\n`;
    message += `*Customer Details:*\n`;
    message += `👤 *Name:* ${name}\n`;
    message += `📞 *Phone:* ${phone}\n`;
    message += `📦 *Method:* ${method === 'delivery' ? 'Delivery 🚚' : 'Self-Pickup 🏪'}\n`;
    
    if (method === "delivery") {
        message += `📍 *Delivery Address:* ${address}\n`;
    }
    
    message += `📅 *Preferred Date:* ${orderDate}\n`;
    message += `⏰ *Preferred Time:* ${orderTime}\n`;
    
    if (remarks) {
        message += `✍️ *Custom Notes:* ${remarks}\n`;
    }
    
    message += `\nThank you! Looking forward to my yummy treats. 😋`;
    
    // Encode text and open link
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodedText}`;
    
    // Clear cart upon successful forward
    cart = [];
    saveCartToStorage();
    updateCartUI();
    
    closeCheckout();
    
    // Open in new tab redirecting to WhatsApp
    window.open(whatsappUrl, "_blank");
}

// 9. Sticky Nav, Scrollspy & Mobile Drawer Menu
function setupNavigation() {
    // 1. Sticky Header scroll listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Scroll spy active tab highlight
        const sections = document.querySelectorAll("section[id]");
        const scrollPos = window.scrollY + 120;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");
            
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
    
    // 2. Mobile Menu Toggle
    mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active");
        mobileDrawer.classList.toggle("active");
        mobileMenuToggle.setAttribute(
            "aria-expanded",
            String(mobileDrawer.classList.contains("active"))
        );
    });
    
    // Close mobile drawer when link is clicked
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            
            mobileMenuToggle.classList.remove("active");
            mobileDrawer.classList.remove("active");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
            
            if (targetId === "#home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileDrawer.classList.contains("active")) {
            mobileMenuToggle.classList.remove("active");
            mobileDrawer.classList.remove("active");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
            mobileMenuToggle.focus();
        }
    });
    
    // Category tabs filter switching
    categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            categoryTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const filterValue = tab.getAttribute("data-filter");
            renderProducts(filterValue);
        });
    });
}

// 10. FAQ Collapsible Accordions
function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const currentItem = question.parentElement;
            const isActive = currentItem.classList.contains("active");
            
            // Close other FAQ items
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
            });
            
            if (!isActive) {
                currentItem.classList.add("active");
                question.setAttribute("aria-expanded", "true");
            }
        });
    });
}

// 11. Testimonials Slide Mechanics
let currentSlide = 0;
let slideInterval;

function setupTestimonials() {
    const slides = document.querySelectorAll(".testimonial-card");
    if (slides.length === 0) return;
    
    // Generate dots
    slides.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        if (idx === 0) dot.classList.add("active");
        dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
        dot.addEventListener("click", () => {
            goToSlide(idx);
            resetAutoplay();
        });
        dotContainer.appendChild(dot);
    });
    
    startAutoplay();
    
    function goToSlide(idx) {
        currentSlide = idx;
        const offset = -currentSlide * 100;
        testimonialTrack.style.transform = `translateX(${offset}%)`;
        
        // Update active dot
        const dots = document.querySelectorAll(".dot");
        dots.forEach((d, i) => {
            if (i === idx) d.classList.add("active");
            else d.classList.remove("active");
        });
    }
    
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        goToSlide(next);
    }
    
    function startAutoplay() {
        slideInterval = setInterval(nextSlide, 5000); // Shift every 5s
    }
    
    function resetAutoplay() {
        clearInterval(slideInterval);
        startAutoplay();
    }
}

// 12. Direct Contact Form WhatsApp Redirection
function setupInquiryForm() {
    if (!generalInquiryForm) return;
    
    generalInquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value.trim();
        const contact = document.getElementById("contact-email").value.trim();
        const details = document.getElementById("contact-msg").value.trim();
        
        let message = `Hello SipNNibbleByTy! 🌟 I have a general inquiry:\n\n`;
        message += `👤 *Name:* ${name}\n`;
        message += `📧 *Contact info:* ${contact}\n`;
        message += `📝 *Message:* ${details}`;
        
        const encodedText = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodedText}`;
        
        // Reset form
        generalInquiryForm.reset();
        
        // Redirect
        window.open(whatsappUrl, "_blank");
    });
}
