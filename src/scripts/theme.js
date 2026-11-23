// Inlined in <head>: one controller for first paint and controls.
;(() => {
  const root = document.documentElement
  const read = (key) => {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  }
  const save = (key, value) => {
    try {
      localStorage.setItem(key, value)
    } catch {
      // Switching still works when storage is unavailable.
    }
  }
  const modes = ['light', 'dark']
  const palettes = ['ink', 'fresh']
  const storedTheme = read('ink-theme')
  const storedPalette = read('ink-palette')
  let theme = modes.includes(storedTheme) ? storedTheme : root.dataset.defaultTheme
  let palette = palettes.includes(storedPalette) ? storedPalette : root.dataset.defaultPalette
  if (!modes.includes(theme)) theme = 'light'
  if (!palettes.includes(palette)) palette = 'ink'

  const apply = () => {
    const dark = theme === 'dark'
    root.classList.toggle('dark', dark)
    root.classList.toggle('fresh', palette === 'fresh')
    root.dataset.theme = theme
    root.dataset.palette = palette
    const background = root.getAttribute(`data-bg-${palette}-${dark ? 'dark' : 'light'}`)
    if (background) {
      root.style.backgroundColor = background
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background)
    }
  }
  let transitionTimer
  const transition = () => {
    root.classList.add('theme-switching')
    clearTimeout(transitionTimer)
    transitionTimer = setTimeout(() => root.classList.remove('theme-switching'), 300)
    apply()
  }
  apply()

  // Delegation binds before the header exists, keeping the first click responsive.
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return
    if (event.target.closest('#theme-toggle')) {
      theme = theme === 'light' ? 'dark' : 'light'
      save('ink-theme', theme)
      transition()
    } else if (event.target.closest('#palette-toggle')) {
      palette = palette === 'ink' ? 'fresh' : 'ink'
      save('ink-palette', palette)
      transition()
    }
  })
})()
