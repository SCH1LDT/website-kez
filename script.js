// Function to update the time counter
function updateTimeCounter() {
    const startDate = new Date(Date.now() - 2424 * 24 * 60 * 60 * 1000);
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the counter every second
setInterval(updateTimeCounter, 1000);

// Initial update
updateTimeCounter();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple interactivity: Toggle visibility of memory sections on click
document.querySelectorAll('.memory').forEach(memory => {
    memory.addEventListener('click', function () {
        this.classList.toggle('expanded');
    });
});
