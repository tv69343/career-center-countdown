// SAC Career Center Countdown Events
// Edit your events here

const events = [
    {
        name: "Career Expo",
        date: "2026-10-07T10:00:00"
    },
    {
        name: "OC Job Fair @ SAC",
        date: "2026-09-12T09:00:00"
    }
];

const container = document.getElementById("events-container");


// Create event cards

events.forEach((event, index) => {

    container.innerHTML += `
        <section class="event-card">

            <div class="event-title">
                ${event.name}
            </div>

            <div class="event-date">
                ${new Date(event.date).toLocaleString()}
            </div>


            <div class="countdown">

                <div class="time-box">
                    <div class="number" id="days-${index}">0</div>
                    <div class="label">DAYS</div>
                </div>

                <div class="time-box">
                    <div class="number" id="hours-${index}">0</div>
                    <div class="label">HOURS</div>
                </div>

                <div class="time-box">
                    <div class="number" id="minutes-${index}">0</div>
                    <div class="label">MINUTES</div>
                </div>

                <div class="time-box">
                    <div class="number" id="seconds-${index}">0</div>
                    <div class="label">SECONDS</div>
                </div>

            </div>


            <div class="progress-container">
                <div 
                    class="progress-bar" 
                    id="progress-${index}">
                </div>
            </div>


        </section>
    `;

});


// Update countdown every second

function updateCountdown() {

    events.forEach((event, index) => {

        const target = new Date(event.date).getTime();
        const now = new Date().getTime();

        const difference = target - now;


        if (difference <= 0) {

            document.getElementById(`days-${index}`).textContent = "0";
            document.getElementById(`hours-${index}`).textContent = "0";
            document.getElementById(`minutes-${index}`).textContent = "0";
            document.getElementById(`seconds-${index}`).textContent = "0";

            return;

        }


        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );


        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        document.getElementById(`days-${index}`).textContent = days;
        document.getElementById(`hours-${index}`).textContent = hours;
        document.getElementById(`minutes-${index}`).textContent = minutes;
        document.getElementById(`seconds-${index}`).textContent = seconds;


        // Progress bar

        const totalTime = target - new Date().setFullYear(
            new Date().getFullYear() - 1
        );

        const elapsed = totalTime - difference;

        const progress = Math.min(
            100,
            Math.max(0, (elapsed / totalTime) * 100)
        );


        document.getElementById(`progress-${index}`)
            .style.width = progress + "%";

    });

}


updateCountdown();

setInterval(updateCountdown, 1000);
