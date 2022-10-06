export function setTheme(theme) {
  return localStorage.setItem('theme', theme);
}

export function removeTheme() {
  localStorage.removeItem('theme');
}

export function getTheme() {
  if (localStorage.getItem('theme') === null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setTheme('dark');
    } else {
      setTheme('ligth');
    }
  }

  return localStorage.getItem('theme');
}
