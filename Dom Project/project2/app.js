const main = document.querySelector('main');
const icon = document.querySelector('main i');

main.addEventListener('dblclick', () => {
    gsap.to(icon, {
        transform : 'translate(-50%, -50%) scale(1)',
        opacity: 0.8,
        ease: 'elastic.out(1, 0.5)'
    })

    setTimeout(() => {
        gsap.to(icon, {
            opacity: 0
        })
    }, 2000);

    setTimeout(() => {
        gsap.to(icon, {
            transform : 'translate(-50%, -50%) scale(0)'
        })
    }, 3000);
})