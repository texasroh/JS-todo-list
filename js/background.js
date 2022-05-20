(() => {
    const imageCount = 6;
    const imageIdx = Math.floor(Math.random() * imageCount);
    document.querySelector('body').style.backgroundImage = `url(image/${imageIdx}.jpg)`;
})();