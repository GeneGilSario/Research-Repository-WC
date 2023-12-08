// This function toggles the theme between 'light' and 'dark'
function toggleTheme() {
  // Retrieve the current theme from the HTML document's data-theme attribute
  const currentTheme = document.documentElement.getAttribute("data-theme");

  // Set the new theme to the opposite of the current theme ('light' -> 'dark', 'dark' -> 'light')
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Update the HTML document's data-theme attribute with the new theme
  document.documentElement.setAttribute("data-theme", newTheme);
}

// Call the toggleTheme function to change the theme
toggleTheme();
