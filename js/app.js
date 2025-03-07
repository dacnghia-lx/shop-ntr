document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    const images = [
        "img/sweets-1.jpeg",
        "img/cake-2.jpeg",
        "img/doughnut-3.jpeg"
    ];
    let currentIndex = 0;
    const aboutImg = document.getElementById('about-img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        aboutImg.src = images[currentIndex];
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        aboutImg.src = images[currentIndex];
    });
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      //Show toast
      showToast('Sản phẩm đã được thêm vào giỏ hàng!');
    });
  });
});
function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
  
    //toast
    setTimeout(function() {
      toast.classList.add('show');
    }, 100);
  
    // Ẩn toast sau 3 giây và xóa khỏi DOM
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        toastContainer.removeChild(toast);
      }, 500); // thời gian transition
    }, 3000);
  }
//show cart toggle
(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
})();
// show cart toggle when clicking on navbar "cart" link (mobile)
(function(){
    const cartToggle = document.getElementById('cart-toggle');
    const cart = document.getElementById('cart');
    if (cartToggle && cart) {
      cartToggle.addEventListener('click', function(e) {
        e.preventDefault();
        cart.classList.toggle('show-cart');
      });
    }
  })();

// How much items selected and what total price before selecting any items
(function(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    
    const totalMoney = total.reduce((total, item) => {
        total += item;
        return total;
    }, 0)
    const finalMoney = totalMoney.toFixed(2);
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length
    
})();

// add items to the cart
(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                item.price = parseFloat(price.replace('VNĐ', '').trim());

                const cartItem = document.createElement('div');
                cartItem.classList.add(
                    'cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                );
                cartItem.innerHTML = `
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                    <div class="cart-item-text">
                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>VNĐ</span>
                        <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
                `;
                // Add the new cart item to the cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                showToast('Sản phẩm đã được thêm vào giỏ hàng!');
                showTotals();
            }
        });
    });

    // show Totals after selecting any items
    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })
        
        const totalMoney = total.reduce((total, item) => {
            total += item;
            return total;
        }, 0)
        const finalMoney = totalMoney.toFixed(2);
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length
        
    }

    // Function to setup remove buttons
    function setupRemoveButtons() {
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                const cartItem = event.target.closest('.cart-item');
                cartItem.remove();
                showTotals();
            });
        });
    }

    function removeItem() {
        const cart = document.getElementById('cart');
        cart.addEventListener('click', function(event) {
            if (event.target.classList.contains('cart-item-remove') || event.target.parentElement.classList.contains('cart-item-remove')) {
                const cartItem = event.target.closest('.cart-item');
                cart.removeChild(cartItem);
                showTotals();
            }
        });
    }
    //Clear cart button
    function clearCart() {
        const clearCartBtn = document.getElementById('clear-cart');
        clearCartBtn.addEventListener('click', function() {
            const cartItems = document.querySelectorAll('.cart-item');
            cartItems.forEach(function(item) {
                item.remove();
            });
            showTotals();
        });
    }
    //Filter the product with the search bar in the store section
    function filterProducts() {
        const searchInput = document.getElementById('search-item');
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const products = document.querySelectorAll('.store-item');
            products.forEach(function(product) {
                const productName = product.querySelector('#store-item-name').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
    //Filter by button
    function filterByCategory() {
        const buttons = document.querySelectorAll('[data-filter]');
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                event.preventDefault();
                const category = button.getAttribute('data-filter');
                const products = document.querySelectorAll('.store-item');
                products.forEach(function(product) {
                    if (category === 'all') {
                        product.style.display = 'block';
                    } else {
                        if (product.classList.contains(category)) {
                            product.style.display = 'block';
                        } else {
                            product.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    clearCart();
    filterProducts();
    filterByCategory();
    removeItem();
})();
