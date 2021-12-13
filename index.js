function mobileNavBar() {
  const mobileNavBar = document.getElementById("mobile-nav-bar");
  const mobileNavIcon = document.getElementById("mobile-nav-icon");

  // mobileNavIcon.textContent = "☰" ? "X" : "☰"; //  "\u2630" ? "X" : "\u2630";

  if (mobileNavBar.className === "nav-bar") {
    mobileNavBar.className += " responsive";
    mobileNavIcon.textContent = "X";
  } else {
    mobileNavBar.className = "nav-bar";
    mobileNavIcon.textContent = "☰";
  }
}
