// const navLinks = document.querySelectorAll('.nav-a')

// navLinks.forEach(item => {
//     item.addEventListener('click', () => {
//         alert('fui clickeado')
//     })
// })

const user = document.getElementById('user')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        user: user.value,
        password: password.value 
    }
    console.log(data)
}
)