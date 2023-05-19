function changeScreen() {
    let btn = document.querySelector('.avia__btn')
    let firstScreen = document.querySelector('.avia__first-screen')
    let secondScreen = document.querySelector('.avia__second-screen')
    let secRays = document.querySelector('.avia__second-screen-bg')

    btn.addEventListener('click', () => {
        secondScreen.style.top = '-100%'
        secondScreen.classList.add('avia__second-screen-rays')

        const rays = setTimeout(() => {
            //secRays.style.display = 'block'
            secRays.style.opacity = '1'
        }, 1500)
    })

}

changeScreen()

export default {changeScreen}