const userBrowserInfo = navigator.userAgent.toString();

document.querySelector(".cart__checkout-button").addEventListener("click", function () {
  // setOrderMetafield()
  document.querySelector("#browser-name").value = userBrowserInfo
  console.log(2222222222)
})