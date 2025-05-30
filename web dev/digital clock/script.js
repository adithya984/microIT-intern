document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date-display');

    function updateClock() {
        const now = new Date(); // Get the current date and time

        // --- Get Time Components ---
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'

        // Add leading zeros if needed
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        // Format the time string
        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        clockElement.textContent = timeString; // Update the HTML element

        // --- Get Date Components ---
        const options = {
            weekday: 'long', // e.g., "Monday"
            year: 'numeric',   // e.g., "2025"
            month: 'long',     // e.g., "May"
            day: 'numeric'     // e.g., "30"
        };
        const dateString = now.toLocaleDateString('en-US', options); // Format date based on locale
        dateElement.textContent = dateString;
    }

    // Call updateClock once immediately to display time without delay
    updateClock();

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);
});