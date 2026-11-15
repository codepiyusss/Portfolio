// The theme lives on <html class="dark">. layout.tsx sets it before first paint.
export function toggleTheme() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {
    // Storage can be blocked. The theme still switches for this visit.
  }
}