const navDiv = document.querySelector('.nav')
const navBtn = navDiv.querySelector('.nav_btn')

navBtn.addEventListener('click', () => {
    if(navDiv.classList.contains('collapsed')) {
        navDiv.classList.remove('collapsed')
    } else {
        navDiv.classList.add('collapsed')
    }
})