function animateCounter(counterElement) {
    let startValue = 0;
    let endValue = parseInt(counterElement.getAttribute("data-val")); 
    let duration = 2000; 
    let stepTime = Math.abs(Math.floor(duration / endValue));

    let counter = setInterval(() => {
        startValue++;
        counterElement.textContent = startValue;

        if (startValue === endValue) {
            clearInterval(counter); 
        }
    }, stepTime);
}


let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let counterElement = entry.target.querySelector(".number");
            counterElement.textContent = "0"; 
            animateCounter(counterElement); 
        }
    });
}, {
    threshold: 0.5 
});


document.querySelectorAll(".counter").forEach(counter => observer.observe(counter));