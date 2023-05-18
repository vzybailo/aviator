function parallax() {
    let bg = document.querySelector('.avia')
    let parallaxUp = document.querySelectorAll('.parallax-up')
    let parallaxUpPlane = document.querySelectorAll('.parallax-up-plane')
    let parallaxDown = document.querySelectorAll('.parallax-down')

    bg.addEventListener('mouseover', (e) => {
        let y = e.clientY / window.innerHeight;
        for(let i = 0; i < parallaxUp.length; i++) {
            parallaxUp[i].style.transform = 'translate(0, -' + y * 5 + '%)';
        }
        for(let i = 0; i < parallaxDown.length; i++) {
            parallaxDown[i].style.transform = 'translate(0, ' + y * 5 + '%)';
        }
        parallaxUpPlane.forEach(elem => {
            elem.style.transform = 'translate(0, -' + y * 10 + '%)';
        })
    })
}

parallax()

export default parallax