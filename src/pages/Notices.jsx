import { useState } from "react";
import "./Notices.css";

function Notices() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      title: "Water Supply Maintenance",
      category: "Maintenance",
      date: "20 Sep 2026",
      description:
        "Water supply will be temporarily unavailable from 10:00 AM to 1:00 PM due to maintenance work.",
    },
    {
      id: 2,
      title: "Society General Body Meeting",
      category: "Meeting",
      date: "25 Sep 2026",
      description:
        "The Society General Body Meeting will be held in the community hall at 6:00 PM. All residents are requested to attend.",
    },
    {
      id: 3,
      title: "Ganesh Chaturthi Celebration",
      category: "Event",
      date: "27 Sep 2026",
      description:
        "Residents are invited to participate in the Ganesh Chaturthi celebration. Cultural activities and refreshments will be arranged.",
    },
    {
      id: 4,
      title: "Parking Area Cleaning",
      category: "Maintenance",
      date: "30 Sep 2026",
      description:
        "The parking area will be cleaned between 7:00 AM and 11:00 AM. Residents are requested to move their vehicles temporarily.",
    },
    {
      id: 5,
      title: "Security Guidelines Update",
      category: "Security",
      date: "02 Oct 2026",
      description:
        "Residents are requested to follow the updated visitor and security guidelines while entering and exiting the society.",
    },
    {
      id: 6,
      title: "Monthly Maintenance Payment Reminder",
      category: "Finance",
      date: "05 Oct 2026",
      description:
        "Residents are reminded to complete their monthly maintenance payment before the due date.",
    },
  ];

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Notices</h1>
          <p>Stay updated with society announcements and important information.</p>
        </div>
      </div>

      <div className="notices-list">
        {notices.map((notice) => (
          <div className="notice-card" key={notice.id}>
            <div className="notice-icon">
              📢
            </div>

            <div className="notice-content">
              <div className="notice-top">
                <span className="notice-category">
                  {notice.category}
                </span>

                <span className="notice-date">
                  📅 {notice.date}
                </span>
              </div>

              <h2>{notice.title}</h2>

              <p>{notice.description}</p>

              <button
                className="notice-details-button"
                onClick={() => setSelectedNotice(notice)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedNotice && (
        <div className="notice-modal-overlay">
          <div className="notice-modal">
            <button
              className="notice-close-button"
              onClick={() => setSelectedNotice(null)}
            >
              ×
            </button>

            <div className="notice-modal-icon">
              📢
            </div>

            <span className="notice-category">
              {selectedNotice.category}
            </span>

            <h2>{selectedNotice.title}</h2>

            <p className="notice-modal-date">
              📅 {selectedNotice.date}
            </p>

            <p className="notice-modal-description">
              {selectedNotice.description}
            </p>

            <button
              className="notice-modal-button"
              onClick={() => setSelectedNotice(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notices;