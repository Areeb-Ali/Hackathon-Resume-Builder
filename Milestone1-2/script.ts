const toggelButton = document.getElementById('button') as HTMLButtonElement
const skills = document.getElementById('skill') as HTMLElement

toggelButton.addEventListener('click', ()=>{
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
})