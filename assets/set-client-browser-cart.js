const userBrowserInfo = navigator.userAgent.toString();

document.querySelector(".cart__checkout-button").addEventListener("click", function () {
  document.querySelector("#browser-name-cart").value = userBrowserInfo
})

window.onload = function () {
  fetch(window.Shopify.routes.root + 'cart.js', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};