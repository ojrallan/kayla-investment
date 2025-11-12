let toggleBtn = document.getElementById('nav-toggle')
let toggleIcon = document.getElementById('toggle-icon')

console.log(toggleIcon.getAttribute('src'))



console.log(toggleBtn.classList)

toggleBtn.addEventListener('click', ()=>{
    if(toggleIcon.getAttribute('src') === '/images/hamb-menu2.png'){
        toggleIcon.setAttribute('src', '/images/cross.png')
    }else{
        toggleIcon.setAttribute('src', '/images/hamb-menu2.png')
    }
})