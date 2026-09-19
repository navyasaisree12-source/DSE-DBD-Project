import { useState } from "react";
import "./Amenities.css";

function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingMessage, setBookingMessage] = useState("");

  const amenities = [
    {
      id: 1,
      name: "Swimming Pool",
      icon: "🏊",
      description: "Relax and enjoy the society swimming pool.",
      timing: "6:00 AM - 9:00 PM",
    },
    {
      id: 2,
      name: "Gym",
      icon: "🏋️",
      description: "Well-equipped gym for residents.",
      timing: "5:00 AM - 10:00 PM",
    },
    {
      id: 3,
      name: "Club House",
      icon: "🏢",
      description: "Space for meetings, parties and events.",
      timing: "9:00 AM - 10:00 PM",
    },
    {
      id: 4,
      name: "Children's Play Area",
      icon: "🛝",
      description: "Safe and fun play area for children.",
      timing: "6:00 AM - 9:00 PM",
    },
    {
      id: 5,
      name: "Indoor Games",
      icon: "🎮",
      description: "Enjoy indoor games with family and friends.",
      timing: "8:00 AM - 10:00 PM",
    },
    {
      id: 6,
      name: "Community Hall",
      icon: "🎉",
      description: "Book the hall for society and personal events.",
      timing: "9:00 AM - 10:00 PM",
    },
  ];

  const timeSlots = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];

  function handleBook(amenity) {
    setSelectedAmenity(amenity);
    setSelectedDate("");
    setSelectedSlot(null);
    setBookingMessage("");
  }

  function handleConfirmBooking() {
    if (!selectedDate) {
      setBookingMessage("Please select a date.");
      return;
    }

    if (!selectedSlot) {
      setBookingMessage("Please select a time slot.");
      return;
    }

    setBookingMessage(
      `${selectedAmenity.name} booked for ${selectedDate} at ${selectedSlot}.`
    );
  }

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Amenities</h1>
          <p>Explore and book society amenities.</p>
        </div>
      </div>

      <div className="amenities-grid">
        {amenities.map((amenity) => (
          <div className="amenity-card" key={amenity.id}>
            <div className="amenity-icon">
              {amenity.icon}
            </div>

            <div className="amenity-info">
              <h2>{amenity.name}</h2>

              <p>{amenity.description}</p>

              <div className="amenity-timing">
                🕐 {amenity.timing}
              </div>

              <span className="amenity-status">
                Available
              </span>
            </div>

            <button
              className="amenity-book-button"
              onClick={() => handleBook(amenity)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedAmenity && (
        <div className="amenity-booking-panel">
          <h2>
            {selectedAmenity.icon} Book {selectedAmenity.name}
          </h2>

          <label>
            Select Date
          </label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedSlot(null);
              setBookingMessage("");
            }}
          />

          {selectedDate && (
            <>
              <h3>Available Time Slots</h3>

              <div className="time-slots">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    className={`time-slot ${
                      selectedSlot === slot ? "selected" : ""
                    }`}
                    onClick={() => {
                      setSelectedSlot(slot);
                      setBookingMessage("");
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedSlot && (
            <div className="selected-slot">
              Selected: <strong>{selectedSlot}</strong>
            </div>
          )}

          <button
            className="confirm-booking-button"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>

          {bookingMessage && (
            <div className="booking-message">
              {bookingMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Amenities;