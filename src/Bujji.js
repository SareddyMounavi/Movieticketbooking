import React, { useState } from 'react';

// Movie data
const movies = [
  { id: 1, title: 'Adipurush', seats: 50 },
  { id: 2, title: 'VeeraSimhaReddy', seats: 60 },
  // Add more movie objects as needed
];

const Bujji = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTheater, setSelectedTheater] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleMovieSelect = (movieId) => {
    setSelectedMovie(movieId);
    setSelectedSeats([]);
  };

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and booking logic here
    const { name, email } = formData;
    const bookingDetails = {
      movie: movies.find((movie) => movie.id === selectedMovie),
      name,
      email,
      mobileNumber,
      selectedDate,
      selectedTheater,
      selectedTimeSlot,
      totalSelectedSeats: selectedSeats.length,
      totalPrice: selectedSeats.length * seatPrice,
    };
    setBookingStatus(bookingDetails);
  };

  const handleConfirm = () => {
    alert('Successfully booked your movie tickets on CineTick!');
  };

  const seatPrice = 200;
  const totalPrice = selectedSeats.length * seatPrice;

  if (bookingStatus) {
    return (
      <div>
        <h1>Booking Status</h1>
        <div>
          <h2>Movie Details:</h2>
          <p>Movie: {bookingStatus.movie.title}</p>
          <p>Theater: {bookingStatus.selectedTheater}</p>
          <p>Date: {bookingStatus.selectedDate}</p>
          <p>Time Slot: {bookingStatus.selectedTimeSlot}</p>
          <p>Total Selected Seats: {bookingStatus.totalSelectedSeats}</p>
          <p>Total Price: Rs. {bookingStatus.totalPrice}</p>
        </div>
        <div>
          <h2>Personal Details:</h2>
          <p>Name: {bookingStatus.name}</p>
          <p>Email: {bookingStatus.email}</p>
          <p>Mobile Number: {bookingStatus.mobileNumber}</p>
        </div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    );
  }
  const isFormComplete =
    selectedMovie &&
    selectedSeats.length > 0 &&
    selectedDate &&
    selectedTheater &&
    selectedTimeSlot;
  return (
    <div>
      <center>
        <h1>Cinema Ticket Booking</h1>
        <div>
          <h2>Select a movie:</h2>
          {movies.map((movie) => (
            <button key={movie.id} onClick={() => handleMovieSelect(movie.id)}>
              {movie.title}
            </button>
          ))}
        </div>
        {selectedMovie && (
          <div>
            <h2>Selected movie: {movies.find((movie) => movie.id === selectedMovie).title}</h2>
            <h2>Select seats:</h2>
            <div>
              Seats available: {movies.find((movie) => movie.id === selectedMovie).seats}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Array.from({ length: movies.find((movie) => movie.id === selectedMovie).seats }, (_, index) => (
                <label
                  key={index + 1}
                  style={{
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    margin: '5px',
                    backgroundColor: selectedSeats.includes(index + 1) ? 'red' : 'lightgreen',
                    borderRadius: '40%',
                    textAlign: 'center',
                    lineHeight: '30px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ display: 'none' }}
                    checked={selectedSeats.includes(index + 1)}
                    onChange={() => handleSeatSelect(index + 1)}
                  />
                  {index + 1}
                </label>
              ))}
            </div>
            <div>
              <h3>Selected seats:</h3>
              {selectedSeats.length > 0 ? (
                <div>
                  {selectedSeats.map((seat, index) => (
                    <span key={seat}>
                      {seat}
                      {index !== selectedSeats.length - 1 && ','}{' '}
                    </span>
                  ))}
                </div>
              ) : (
                <div>No seats selected</div>
              )}
                <h3 style={{paddingRight:'3cm'}}>Total selected seats: {selectedSeats.length}</h3>
            </div>
            <div>
              <h2>Select theater:
              <select
                value={selectedTheater}
                onChange={(e) => setSelectedTheater(e.target.value)}
                required
              >
                <option value="">Select a theater</option>
                <option value="Theater A">Theater A</option>
                <option value="Theater B">Theater B</option>
                {/* Add more theater options as needed */}
              </select>
              </h2>
            </div>
            <div>
              <h3>Select date:
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              >
                <option value="">Select a date</option>
                <option value="2023-06-19">June 19, 2023</option>
                <option value="2023-06-20">June 20, 2023</option>
                {/* Add more date options as needed */}
              </select>
              </h3>
            </div>
            <div>
              <h2>Select time slot:
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                required
              >
                <option value="">Select a time slot</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                {/* Add more time slot options as needed */}
              </select>
              </h2>
            </div>
            <form onSubmit={handleFormSubmit}>
              <h2>Enter your details:</h2>
              <label>
                Name:
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </label>
              <br/>
              <label>
                Email:
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </label>
              <br />
              <label>
                Mobile Number:
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </label>
              <br />
              <h3>Total Price: Rs. {totalPrice}</h3>
              <button type="submit" disabled={!isFormComplete}>
                Book
              </button>
            </form>
          </div>
        )}
      </center>
    </div>
  );
};
export default Bujji;
