const userBrowserInfo = navigator.userAgent.toString();

document.querySelector(".cart__checkout-button").addEventListener("click", function () {
  document.querySelector("#browser-name-cart").value = userBrowserInfo
})