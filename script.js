const container = document.querySelector('.container')

document.querySelector('.open-navbar-icon').
        addEventListener('click', () => {
            container.classList.add('change')
        })
document.querySelector('.close-navbar-icon').
        addEventListener('click', () => {
            container.classList.remove('change')
        })

const colors = ['#031273', '#0504aa', '#2337c6', '#4169e1', '#4cc9f0']

document.querySelectorAll('.nav-link').forEach((item, idx)=>{
    item.style.cssText = `background-color: ${colors[idx]}`
})

document.querySelectorAll(".nav-button").forEach((item)=>{
        item.addEventListener("click", () => {
            item.parentElement.parentElement.classList.toggle("change")
        })
     });

