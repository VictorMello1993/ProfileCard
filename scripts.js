window.onload = () => {
    const checkbox = document.getElementById('checkbox')
    const html = document.querySelector('html')
    const card = document.querySelector('.card')
    
    if(localStorage.getItem('background') === 'true'){
        html.classList.toggle('dark-mode')
        card.classList.toggle('dark-mode')
        checkbox.checked = true
    }

    checkbox.addEventListener('change', () => {
        html.classList.toggle('dark-mode')
        card.classList.toggle('dark-mode')

        localStorage.setItem('background', checkbox.checked)
    })
}


