function mobileNavBar() {
  const mobileNavBar = document.getElementById("mobile-nav-bar");
  const mobileNavIcon = document.getElementById("mobile-nav-icon");

  mobileNavIcon.textContent = "\u2630" ? "X" : "\u2630";

  if (mobileNavBar.className === "nav-bar") {
    mobileNavBar.className += " responsive";
  } else {
    mobileNavBar.className = "nav-bar";
  }
}
