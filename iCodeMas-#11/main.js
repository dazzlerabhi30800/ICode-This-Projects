let price = 25;


$(".decrement").click(function () {
    price = price - 1 <= 0 ? 0 : price - 1;
    $('#price-input').val(`$${price}`)
})


$(".increment").click(function () {
    price += 1;
    $('#price-input').val(`$${price}`)
})


$('.price').on("click", function (e) {
    price = parseInt(e.target.textContent.replace("$", ""));
    $('.price').removeClass('active');
    $(this).addClass('active');
    $('#price-input').val(`$${price}`)
})


$('.cart-btn').click(function () {
    alert("Item add to cart of price: $" + price);
})