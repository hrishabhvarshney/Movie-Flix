const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

// Default ticket price
const ticketPrice = 300;

// Initialize selected seat count and total price
let selectedSeatsCount = 0;
let totalPrice = 0;

function populateUI() {
    // Retrieve selected seats from local storage if available
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
                selectedSeatsCount++;
            }
        });
    }
    updateSelectedCountAndTotal();
}

function updateSelectedCountAndTotal() {
    count.innerText = selectedSeatsCount;
    total.innerText = totalPrice;
}

function updateLocalStorage() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}

function calculateTotalPrice() {
    totalPrice = selectedSeatsCount * ticketPrice;
    // Apply 10% discount if two or more tickets are selected
    if (selectedSeatsCount >= 2) {
        totalPrice *= 0.9; // 10% discount
    }
}

function toggleSeatSelection(seat) {
    seat.classList.toggle("selected");
    selectedSeatsCount += seat.classList.contains("selected") ? 1 : -1;
}

container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        toggleSeatSelection(e.target);
        updateLocalStorage();
        calculateTotalPrice();
        updateSelectedCountAndTotal();
    }
});

// Initial setup
function populateUI() {
    // Retrieve selected seats from local storage if available
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        selectedSeatsCount = selectedSeats.length;
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }
    updateSelectedCountAndTotal();
}

calculateTotalPrice();
updateSelectedCountAndTotal();
const bookNowBtn = document.getElementById('bookNowBtn');
bookNowBtn.addEventListener('click', () => {
    location.reload();
    window.location.href = 'payment.html'; // Replace 'payment.html' with the actual URL of your payment page
});