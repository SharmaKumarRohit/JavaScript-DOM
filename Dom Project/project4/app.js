const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        gsap.to(box.childNodes[3], {
            opacity: 1
        })
    })

    box.addEventListener('mouseleave', () => {
        gsap.to(box.childNodes[3], {
            opacity: 0
        })
    })

    box.addEventListener('mousemove', (dets) => {
        gsap.to(box.childNodes[3], {
            left: (dets.x - 100) + "px"
        })
    })
})