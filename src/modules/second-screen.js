function changeScreen() {
    let btn = document.querySelector('.avia__btn')
    let firstScreen = document.querySelector('.avia__first-screen')
    let secondScreen = document.querySelector('.avia__second-screen')

    btn.addEventListener('click', () => {
        firstScreen.style.height = '0'
        secondScreen.style.top = '0'
        console.log('work')
    })
}

changeScreen()

export default changeScreen