const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const currentRotation = +getComputedStyle(sunMoonContainer).getPropertyValue('--rotation')
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})