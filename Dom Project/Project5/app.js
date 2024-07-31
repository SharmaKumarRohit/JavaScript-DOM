const arr = [
    {dp: 'https://images.unsplash.com/photo-1654944989990-9da8fa364ca1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1654944990404-7cc4ff0fb2d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {dp: 'https://images.unsplash.com/photo-1645231881968-9c98338ee28d?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1645231912287-2634da4d7fb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {dp: 'https://images.unsplash.com/photo-1717488703065-6968d2d143b9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1668650348865-1cce32eed2a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {dp: 'https://images.unsplash.com/photo-1707119269306-f4ee0564ba29?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1688607938256-0cc499e58343?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {dp: 'https://images.unsplash.com/photo-1657567685910-8668461c1381?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1657567685816-e35a1dd7df74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
];

let clutter = "";

arr.forEach((img, idx) => {
    clutter += `<div class="story">
                    <img id="${idx}" src="${img.dp}" alt="img${idx}">
                </div>`
})

const stories = document.querySelector('.stories');
const fullScreen = document.querySelector('#full-screen');

stories.innerHTML = clutter;

let tl = gsap.timeline();

tl.to('.inner-line', {
    width: '100%',
    duration: 5
})

tl.pause();

stories.addEventListener('click', (dets) => {
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    fullScreen.style.display = "block";
    tl.play();
    setTimeout(() => {
        fullScreen.style.display = "none";
        tl.reverse({duration: 0});
    }, 5000)
})