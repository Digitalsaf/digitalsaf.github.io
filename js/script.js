let spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated', 'rubberBand')
}))

let htmlBar = document.querySelector('.bar-html')
let cssBar = document.querySelector('.bar-css')
let jsBar = document.querySelector('.bar-javascript')
let reactBar = document.querySelector('.bar-react')

let t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})

    

let controller = new ScrollMagic.Controller()
let scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

let showRequiredCategory = event => {
    let getId = event.id
    let links = document.querySelectorAll('.work-category button')
    for (i=0; i<links.length; i++) {
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }


    event.classList.add('active')
    let getCategory = document.querySelector(`.category-${getId}`)
    let categories = document.querySelectorAll('div[class ^= "category-"]')
    for (i=0; i<categories.length; i++) {
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}