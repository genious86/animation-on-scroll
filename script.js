let sections = document.querySelectorAll('section')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let scrolldistance = window.scrollY
        let sectiondistance = sec.offsetTop
    })
}