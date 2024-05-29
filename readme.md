# Movie Booking Web App

This web application allows users to browse and book movie tickets online. It utilizes the TMDb API to fetch movie data and provides a user-friendly interface for selecting seats and making payments.

## Features

- Browse trending movies fetched from TMDb API.
- Search for specific movies.
- Book movie tickets by selecting seats.
- Simulate payment processing for booking tickets.
- Responsive design for seamless user experience across devices.

## File Structure

- **index.html**: Main page displaying trending movies and search functionality.
- **script.js**: JavaScript file for fetching movie data, handling search, and displaying movie information.
- **style.css**: Stylesheet for the main page.
- **booking.html**: Page for selecting movie seats and booking tickets.
- **script1.js**: JavaScript file for selecting seats, calculating total price, and handling booking process.
- **style1.css**: Stylesheet for the booking page.
- **payment.html**: Payment page for entering billing details and making payments.
- **script2.js**: JavaScript file for simulating payment processing and redirecting to the main page.
- **styles2.css**: Stylesheet for the payment page.

## How to Run

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to start browsing movies and booking tickets.

## Dependencies

- TMDb API: The application uses the TMDb API to fetch movie data. You need to obtain an API key from [TMDb](https://www.themoviedb.org/documentation/api) and replace the `KEY` variable in `script.js` with your API key.

## How to Use

1. Browse movies on the main page.
2. Click on a movie to view details and book tickets.
3. On the booking page, select available seats and click "Book Now."
4. Enter billing details and proceed to checkout on the payment page.
5. After successful payment, the user is redirected to the main page.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
