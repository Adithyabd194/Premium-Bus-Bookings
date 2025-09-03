// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Booking Form Handling
    const bookingForm = document.getElementById('bookingForm');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close');
    const bookNowBtn = document.getElementById('bookNowBtn');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const vehicleType = document.getElementById('vehicleType').value;
            const date = document.getElementById('date').value;
            
            if (!name || !email || !phone || !vehicleType || !date) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            console.log('Booking submitted:', { name, email, phone, vehicleType, date });
            
            // Show success modal
            bookingModal.style.display = 'block';
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    // Book Now button click handler
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', function() {
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Close modal when clicking on X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            bookingModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });
    
    // Form date validation - cannot select past dates
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});