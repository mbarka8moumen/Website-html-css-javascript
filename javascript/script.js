// Toggle between Sign-Up and Sign-In
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn && loginBtn && container) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

// Handle Sign-Up Form Submission
const signUpForm = document.querySelector('.sign-up form');
if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('signup-role')?.value;
        const name = signUpForm.querySelector('input[placeholder="Name"]')?.value.trim();
        const email = signUpForm.querySelector('input[placeholder="Email"]')?.value.trim();
        const password = signUpForm.querySelector('input[placeholder="Password"]')?.value.trim();

        if (!role) {
            alert("Please select a role for Sign-Up!");
            return;
        }

        alert(`Sign-Up Successful!\nRole: ${role}\nName: ${name}\nEmail: ${email}`);
        // Send this data to your backend for account creation
    });
}

// Handle Sign-In Form Submission
const signInForm = document.querySelector('.sign-in form');
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('signin-role')?.value;
        const email = signInForm.querySelector('input[placeholder="Email"]')?.value.trim();
        const password = signInForm.querySelector('input[placeholder="Password"]')?.value.trim();

        if (!role) {
            alert("Please select a role for Sign-In!");
            return;
        }

        // Validation : si rôle = admin et password = admin, rediriger
        if (password === "admin" && role === "admin") {
            window.location.href = "administration.html"; // Redirige vers la page administration.html
        } 
        if (password === "client" && role === "client"){  window.location.href = "home.html";
          }else {
            alert("Invalid credentials. Please try again.");
        }
    });
    
}

// Handle Account Menu Dropdown (Optional)
const accountMenuContainer = document.querySelector('.account-menu-container');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (accountMenuContainer && dropdownMenu) {
    accountMenuContainer.addEventListener('click', (e) => {
        e.preventDefault();
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!accountMenuContainer.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
}
function handleClick(page) {
    if (page === 'TRADITIONNAL') {
        window.location.href = 'traditionnel.html'; // Redirige vers la page traditionnel
    }
    // Ajoutez d'autres conditions pour d'autres pages si nécessaire
}
function handleClick(section) {
    // If you need any custom logic when the section is clicked, you can add it here
    console.log(section + " section clicked");
}


