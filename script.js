const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', (e) => {
  search.classList.toggle('active')
  input.focus()
})

document.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BODY') {
    search.classList.remove('active')
  }
})

search.addEventListener('submit', (e) => {
  e.preventDefault()
  input.value && console.log('submit', input.value)
})
