// Event Listener for Login Forms
document.addEventListener('DOMContentLoaded', function() {
    const customerLoginForm = document.querySelector('.login-box:nth-child(1) form');
    const clientLoginForm = document.querySelector('.login-box:nth-child(2) form');

    customerLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin('customer');
    });

    clientLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin('client');
    });
});

function handleLogin(type) {
    const email = document.querySelector(`.${type}-login input[type="email"]`).value;
    const phone = document.querySelector(`.${type}-login input[type="tel"]`).value;
    const password = document.querySelector(`.${type}-login input[type="password"]`).value;

    // Simple validation (can be expanded)
    if (!email || !phone || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate successful login
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} logged in successfully!`);

    // Redirect to dashboard or other page (can be implemented)
}

// Event Listener for Service Selection (for future expansion)
document.querySelectorAll('.service-box').forEach(function(serviceBox) {
    serviceBox.addEventListener('click', function() {
        const serviceName = this.querySelector('h4').innerText;
        handleServiceSelection(serviceName);
    });
});

function handleServiceSelection(serviceName) {
    alert(`You selected the ${serviceName} service.`);
    // Redirect to the respective service page (can be implemented)
}
