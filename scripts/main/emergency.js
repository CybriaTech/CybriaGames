document.addEventListener("keydown", function (event) {
  if (event.key === "`") {
    history.replaceState(null, "", "https://www.google.com");
    window.location.href = "https://www.google.com";
  }
});
