const navLinks = document.querySelectorAll('.nav-a')

navLinks.forEach(item => {
    item.addEventListener('click', () => {
        alert('fui clickeado')
    })
})