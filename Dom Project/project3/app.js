const main = document.querySelector('main');
const cursor = document.querySelector('.cursor');

main.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        top: dets.y + "px",
        left: dets.x + "px"
    })
})