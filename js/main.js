// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Customization functionality
const productSelect = document.getElementById('productType');
const colorOptions = document.querySelectorAll('.color-option');
const previewCanvas = document.querySelector('.preview-canvas');
const textInput = document.getElementById('customText');

// Handle product selection
if (productSelect) {
    productSelect.addEventListener('change', (e) => {
        updatePreview();
    });
}

// Handle color selection
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        updatePreview();
    });
});

// Handle text input
if (textInput) {
    textInput.addEventListener('input', updatePreview);
}

// Update preview function
function updatePreview() {
    const selectedProduct = productSelect ? productSelect.value : 'tshirt';
    const selectedColor = document.querySelector('.color-option.active');
    const customText = textInput ? textInput.value : '';
    
    if (previewCanvas) {
        const productEmojis = {
            'tshirt': '👕',
            'mug': '☕',
            'phonecase': '📱',
            'totebag': '🎒',
            'hoodie': '🧥',
            'cap': '🧢'
        };
        
        previewCanvas.innerHTML = productEmojis[selectedProduct] || '👕';
        
        if (selectedColor) {
            previewCanvas.style.background = selectedColor.style.background;
        }
        
        if (customText) {
            previewCanvas.innerHTML += `<div style="font-size: 1rem; margin-top: 1rem; color: #333;">${customText}</div>`;
        }
    }
}

// Initialize preview on page load
if (previewCanvas) {
    updatePreview();
}

// Form validation
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        
        if (!name || !email || !address) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Show success message
        alert('Order submitted successfully! We will contact you soon.');
        orderForm.reset();
    });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
