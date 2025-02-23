let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');
let isAnimating = false; // Prevents spam clicks

next.addEventListener("click", function() {
    if (isAnimating) return; // Prevent spam clicking
    isAnimating = true;

    let items = document.querySelectorAll(".item");
    slider.style.transition = "transform 0.5s ease-in-out"; // Smooth movement
    slider.style.transform = "translateX(-100px)"; // Move left slightly

    setTimeout(() => {
        slider.appendChild(items[0]); // Move first item to end
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)"; // Reset position
        isAnimating = false;
    }, 500);
});

prev.addEventListener("click", function() {
    if (isAnimating) return;
    isAnimating = true;

    let items = document.querySelectorAll(".item");
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = "translateX(100px)"; // Move right slightly

    setTimeout(() => {
        slider.prepend(items[items.length - 1]); // Move last item to front
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
        isAnimating = false;
    }, 500);
});
