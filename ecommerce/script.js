$(document).ready(function () {
    var cart = [];

    // Function to update the cart modal content
    function updateCartModal() {
        var cartTableBody = $('#cartTableBody');
        var cartTotal = 0;

        // Clear previous cart items
        cartTableBody.empty();

        if (cart.length > 0) {
            cart.forEach(function (item) {
                cartTableBody.append('<tr><td>' + item.name + '</td><td>$' + item.price.toFixed(2) + '</td></tr>');
                cartTotal += item.price;
            });
        } else {
            cartTableBody.append('<tr><td colspan="2">Your cart is currently empty.</td></tr>');
        }

        $('#cartTotal').text(cartTotal.toFixed(2));
    }

    // Add to cart button click event
    $('.add-to-cart').on('click', function () {
        var productName = $(this).data('name');
        var productPrice = parseFloat($(this).data('price'));

        cart.push({ name: productName, price: productPrice });
        updateCartModal();
    });

    // Checkout button click event
    $('#checkoutBtn').on('click', function () {
        alert('This is a demo. No real checkout process is implemented.');
    });

    // Display cart modal when the cart button is clicked
    $('#cartButton').on('click', function () {
        updateCartModal();
        $('#cartModal').modal('show');
    });

    // Display account information modal when the account button is clicked
    $('#accountButton').on('click', function () {
        $('#accountModal').modal('show');
    });
});
