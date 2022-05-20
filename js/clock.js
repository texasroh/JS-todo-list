(() => {
    const clock = document.querySelector('#clock');
    function updateClock() {
        const current = new Date();
        clock.innerText = current.toLocaleTimeString();
    }
    updateClock();
    setInterval(updateClock, 1000);
})();