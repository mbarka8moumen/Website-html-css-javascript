// Function to toggle size menu
function toggleSizeMenu() {
    document.getElementById("size-menu").classList.toggle("hidden");
  }

  // Function to toggle price menu
  function togglePriceMenu() {
    document.getElementById("price-menu").classList.toggle("hidden");
  }

  // Function to toggle promotion menu
  function togglePromotionMenu() {
    document.getElementById("promotion-menu").classList.toggle("hidden");
  }

  // Function to filter by size
  function filterBySize(size) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      const productSize = product.getAttribute('data-size');
      if (size === 'all' || productSize === size) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
    document.getElementById("size-menu").classList.add("hidden"); 
  }

  // Function to filter by price
  function filterByPrice(priceRange) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      const productPrice = parseInt(product.getAttribute('data-price'));
      let show = false;
      switch (priceRange) {
        case '100-200':
          show = productPrice >= 100 && productPrice <= 200;
          break;
        case '200-300':
          show = productPrice >= 200 && productPrice <= 300;
          break;
        case '300-400':
          show = productPrice >= 300 && productPrice <= 400;
          break;
        case '400+':
          show = productPrice >= 400;
          break;
        default:
          show = true;
      }
      if (show) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
    document.getElementById("price-menu").classList.add("hidden");
  }

  // Function to filter by promotion
  function filterByPromotion(isOnSale) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      const productOnSale = product.getAttribute('data-sale') === 'true';
      if (isOnSale === null || productOnSale === isOnSale) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  }

  // Dynamic search function
  function searchProducts() {
    const query = document.querySelector("input[placeholder='Search...']").value.toLowerCase();
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      const productName = product.querySelector('h2').textContent.toLowerCase();
      if (productName.includes(query)) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  }