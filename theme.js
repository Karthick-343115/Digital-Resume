// theme.js

// Select all theme buttons
const themes = document.getElementsByClassName("theme");

// Loop through and add click listeners
Array.from(themes).forEach((theme) => {
  theme.addEventListener("click", (e) => {
    const selectedTheme = e.target.dataset.theme;

    // Apply to <html> (not body!)
    document.documentElement.setAttribute("data-theme", selectedTheme);

    // Save to localStorage
    localStorage.setItem("theme", selectedTheme);
  });
});

// Apply theme on page load
function getThemeOnLoad() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

getThemeOnLoad();
