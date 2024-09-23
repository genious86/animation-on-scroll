let sections = document.querySelectorAll('section')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let scrolldistance = window.scrollY
        let sectiondistance = sec.offsetTop

        if (scrolldistance >= sectiondistance - 150){
            sec.classList.add('show-animate')
        }

        else{
            sec.classList.remove('show-animate')
        }
    })
}