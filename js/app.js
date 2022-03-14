const images = [
    "players/player-1.png",
    "players/player-2.png",
    "players/player-3.png",
    "players/player-4.png",
    "players/player-5.png",
    "players/player-6.png",
    "players/player-7.png",
    "players/player-8.png",
    "players/player-9.png"
];
let imgIndex = 0;
const sliderImage = document.getElementById('slider-img')
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    sliderImage.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)