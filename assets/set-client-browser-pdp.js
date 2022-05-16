const userBrowserInfo = navigator.userAgent.toString();

document.querySelector(".button-checkout").addEventListener("click", function () {
  document.querySelector("#browser-name").value = userBrowserInfo
})