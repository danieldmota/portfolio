"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const isLightMode = root.classList.toggle("light-mode");

    try {
      localStorage.setItem("mode", isLightMode ? "light" : "dark");
    } catch {
      // The selected theme still applies for the current page when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="dark-light-btn bg-gradient"
      onClick={toggleTheme}
      aria-label="Alternar entre tema claro e escuro"
    >
      <i className="fa-solid fa-sun theme-icon theme-icon-sun" aria-hidden="true" />
      <i className="fa-solid fa-moon theme-icon theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
