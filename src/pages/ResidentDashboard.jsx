import { useState } from "react";
import MyFlat from "./MyFlat";
import Payments from "./Payments";
import Complaints from "./complaints";
import Amenities from "./Amenities";
import Notices from "./Notices";
import "./Dashboard.css";

function ResidentDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  // =========================
  // MAINTENANCE PAGE
  // =========================
  function Maintenance() {
    return (
      <div className="page-content">

        <div className="page-heading">
          <h1>Maintenance</h1>
          <p>View and manage your monthly maintenance bills.</p>
        </div>

        <div className="maintenance-summary">

          <div className="summary-icon">₹</div>

          <div className="summary-info">
            <span>Current Maintenance Bill</span>
            <h2>₹4,500</h2>
            <small>September 2026</small>
          </div>

          <div className="summary-status">
            <span>Pending</span>
          </div>

        </div>

        <div className="maintenance-card">

          <div className="card-title">
            <h2>Maintenance Details</h2>
            <p>Monthly maintenance information.</p>
          </div>

          <div className="details-list">

            <div className="detail-row">
              <span>Maintenance Charge</span>
              <strong>₹4,000</strong>
            </div>

            <div className="detail-row">
              <span>Water Charges</span>
              <strong>₹300</strong>
            </div>

            <div className="detail-row">
              <span>Common Area Charges</span>
              <strong>₹200</strong>
            </div>

            <div className="detail-row total">
              <span>Total Amount</span>
              <strong>₹4,500</strong>
            </div>

          </div>

        </div>

      </div>
    );
  }
// ---------------- VISITORS PAGE ----------------
function Visitors() {
  const [showForm, setShowForm] = useState(false);

  const [visitors, setVisitors] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      purpose: "Friend",
      flat: "A-204",
      date: "12 Sep 2026",
      time: "10:30 AM",
      status: "Checked In",
    },
    {
      id: 2,
      name: "Amazon Delivery",
      phone: "9876501234",
      purpose: "Delivery",
      flat: "A-204",
      date: "11 Sep 2026",
      time: "04:15 PM",
      status: "Checked Out",
    },
    {
      id: 3,
      name: "Plumber",
      phone: "9123456780",
      purpose: "Maintenance",
      flat: "A-204",
      date: "10 Sep 2026",
      time: "11:00 AM",
      status: "Checked Out",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    purpose: "",
    date: "",
    time: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function addVisitor(e) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.purpose || !form.date || !form.time) {
      alert("Please fill all visitor details.");
      return;
    }

    const newVisitor = {
      id: Date.now(),
      name: form.name,
      phone: form.phone,
      purpose: form.purpose,
      flat: "A-204",
      date: form.date,
      time: form.time,
      status: "Expected",
    };

    setVisitors([newVisitor, ...visitors]);

    setForm({
      name: "",
      phone: "",
      purpose: "",
      date: "",
      time: "",
    });

    setShowForm(false);
  }

  function updateStatus(id, newStatus) {
    setVisitors(
      visitors.map((visitor) =>
        visitor.id === id
          ? { ...visitor, status: newStatus }
          : visitor
      )
    );
  }

  const totalVisitors = visitors.length;

  const checkedIn = visitors.filter(
    (visitor) => visitor.status === "Checked In"
  ).length;

  const expected = visitors.filter(
    (visitor) => visitor.status === "Expected"
  ).length;

  const checkedOut = visitors.filter(
    (visitor) => visitor.status === "Checked Out"
  ).length;

  return (
    <div className="page-content">

      {/* PAGE HEADING */}
      <div className="page-heading">
        <div>
          <h1>Visitors</h1>
          <p>Manage your visitors and visitor records.</p>
        </div>

        <button
          className="new-visitor-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Visitor
        </button>
      </div>


      {/* ADD VISITOR FORM */}
      {showForm && (
        <div className="payment-card visitor-form-card">

          <div className="card-title">
            <div>
              <h2>Add New Visitor</h2>
              <p>Enter the details of your visitor.</p>
            </div>
          </div>

          <form onSubmit={addVisitor}>

            <div className="visitor-form-grid">

              <div className="form-group">
                <label>Visitor Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter visitor name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Purpose</label>

                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                >
                  <option value="">Select purpose</option>
                  <option value="Friend">Friend</option>
                  <option value="Family">Family</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>


              <div className="form-group">
                <label>Visit Date</label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Visit Time</label>

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </div>

            </div>


            <div className="visitor-form-actions">

              <button
                type="button"
                className="cancel-visitor-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-visitor-button"
              >
                Add Visitor
              </button>

            </div>

          </form>
        </div>
      )}


      {/* SUMMARY */}
      <div className="visitor-summary">

        <div className="visitor-box">
          <span>Total Visitors</span>
          <h2>{totalVisitors}</h2>
          <small>Visitor records</small>
        </div>

        <div className="visitor-box">
          <span>Expected</span>
          <h2>{expected}</h2>
          <small>Expected visitors</small>
        </div>

        <div className="visitor-box">
          <span>Checked In</span>
          <h2>{checkedIn}</h2>
          <small>Currently inside</small>
        </div>

        <div className="visitor-box">
          <span>Checked Out</span>
          <h2>{checkedOut}</h2>
          <small>Completed visits</small>
        </div>

      </div>


      {/* VISITOR LIST */}
      <div className="visitor-card">

        <div className="card-title">
          <div>
            <h2>Visitor History</h2>
            <p>Your recent visitor records.</p>
          </div>
        </div>


        <div className="visitor-list">

          {visitors.length === 0 ? (
            <div className="empty-visitors">
              <div>👥</div>
              <h3>No visitors yet</h3>
              <p>Add your first visitor using the button above.</p>
            </div>
          ) : (

            visitors.map((visitor) => (

              <div
                className="visitor-row"
                key={visitor.id}
              >

                <div className="visitor-icon">
                  👤
                </div>


                <div className="visitor-info">

                  <strong>{visitor.name}</strong>

                  <span>
                    {visitor.purpose} • {visitor.phone}
                  </span>

                  <small>
                    {visitor.date} at {visitor.time}
                  </small>

                </div>


                <div className="visitor-flat">
                  <span>Flat</span>
                  <strong>{visitor.flat}</strong>
                </div>


                <span
                  className={`visitor-status ${
                    visitor.status === "Checked In"
                      ? "checked-in"
                      : visitor.status === "Expected"
                      ? "expected"
                      : "checked-out"
                  }`}
                >
                  {visitor.status}
                </span>


                <div className="visitor-actions">

                  {visitor.status === "Expected" && (
                    <button
                      className="visitor-action-button checkin"
                      onClick={() =>
                        updateStatus(visitor.id, "Checked In")
                      }
                    >
                      Check In
                    </button>
                  )}


                  {visitor.status === "Checked In" && (
                    <button
                      className="visitor-action-button checkout"
                      onClick={() =>
                        updateStatus(visitor.id, "Checked Out")
                      }
                    >
                      Check Out
                    </button>
                  )}

                  {visitor.status === "Checked Out" && (
                    <button
                      className="visitor-action-button view"
                      onClick={() =>
                        alert(
                          `Visitor: ${visitor.name}\nPurpose: ${visitor.purpose}\nPhone: ${visitor.phone}`
                        )
                      }
                    >
                      View
                    </button>
                  )}

                </div>

              </div>

            ))
          )}

        </div>

      </div>

    </div>
  );
}
  // =========================
  // DASHBOARD HOME
  // =========================
  function DashboardHome() {
    return (
      <div>

        <div className="dashboard-header">

          <div>
            <h1>Welcome Back! 👋</h1>
            <p>Here's what's happening in your society.</p>
          </div>

        </div>

        {/* STATISTICS */}

        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon orange">₹</div>

            <div>
              <p>Maintenance</p>
              <h2>₹4,500</h2>
              <small>Due this month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>

            <div>
              <p>Last Payment</p>
              <h2>₹4,500</h2>
              <small>Paid on 08 Aug 2026</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">🎫</div>

            <div>
              <p>Complaints</p>
              <h2>2</h2>
              <small>Active complaints</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">👥</div>

            <div>
              <p>Visitors</p>
              <h2>3</h2>
              <small>Recent visitors</small>
            </div>
          </div>

        </div>

        {/* CONTENT */}

        <div className="dashboard-content">

          <div className="dashboard-card">

            <div className="card-header">
              <div>
                <h2>Recent Visitors</h2>
                <p>Latest visitor activity.</p>
              </div>

              <button
                onClick={() =>
                  alert("Visitors page coming soon.")
                }
              >
                View All
              </button>
            </div>

            <div className="visitor-row">

              <div className="visitor-avatar">👤</div>

              <div className="visitor-info">
                <strong>Rahul Kumar</strong>
                <span>Guest • Today</span>
              </div>

              <span className="status approved">
                Approved
              </span>

            </div>

            <div className="visitor-row">

              <div className="visitor-avatar">👤</div>

              <div className="visitor-info">
                <strong>Ananya Sharma</strong>
                <span>Guest • Yesterday</span>
              </div>

              <span className="status completed">
                Completed
              </span>

            </div>

            <div className="visitor-row">

              <div className="visitor-avatar">🚚</div>

              <div className="visitor-info">
                <strong>Delivery Person</strong>
                <span>Delivery • Yesterday</span>
              </div>

              <span className="status pending">
                Pending
              </span>

            </div>

          </div>

          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h2>Announcements</h2>
                <p>Latest society updates.</p>
              </div>

            </div>

            <div className="announcement">

              <div className="announcement-icon">
                📢
              </div>

              <div>
                <strong>Water Supply Maintenance</strong>

                <p>
                  Water supply will be temporarily
                  interrupted tomorrow morning.
                </p>

                <small>Today</small>
              </div>

            </div>

            <div className="announcement">

              <div className="announcement-icon">
                📢
              </div>

              <div>
                <strong>Society Meeting</strong>

                <p>
                  Monthly society meeting scheduled
                  for this weekend.
                </p>

                <small>Yesterday</small>
              </div>

            </div>

          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div className="quick-section">

          <h2>Quick Actions</h2>

          <div className="quick-grid">

            <button
              className="quick-card"
              onClick={() => setActivePage("myflat")}
            >
              <span>🏠</span>
              <strong>My Flat</strong>
              <small>View flat details</small>
            </button>

            <button
              className="quick-card"
              onClick={() => setActivePage("maintenance")}
            >
              <span>📄</span>
              <strong>Maintenance</strong>
              <small>View monthly bill</small>
            </button>

            <button
              className="quick-card"
              onClick={() => setActivePage("payments")}
            >
              <span>💳</span>
              <strong>Payments</strong>
              <small>View payment history</small>
            </button>

            <button
              className="quick-card"
              onClick={() => setActivePage("complaints")}
            >
              <span>📝</span>
              <strong>Complaints</strong>
              <small>Manage complaints</small>
            </button>

          </div>

        </div>

      </div>
    );
  }

  // =========================
  // PAGE SELECTION
  // =========================

  function renderPage() {

    if (activePage === "myflat") {
      return <MyFlat />;
    }

    if (activePage === "maintenance") {
      return <Maintenance />;
    }

    if (activePage === "payments") {
      return <Payments />;
    }

    if (activePage === "complaints") {
      return <Complaints />;
    }
    if (activePage === "visitors") {
  return <Visitors />;
}
if (activePage === "amenities") {
  return <Amenities />;
}
if (activePage === "notices") {
  return <Notices />;
}

    return <DashboardHome />;
  }

  // =========================
  // MAIN LAYOUT
  // =========================

  return (
    <div className="dashboard">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="sidebar">

        <div className="sidebar-logo">

          <div className="sidebar-logo-icon">
            🏠
          </div>

          <div>
            <h2>SocietyHub</h2>
            <p>Management Portal</p>
          </div>

        </div>

        <p className="menu-title">
          MAIN MENU
        </p>

        <div className="sidebar-menu">

          <button
            className={`menu-item ${
              activePage === "dashboard"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("dashboard")
            }
          >
            <span>📊</span>
            Dashboard
          </button>

          <button
            className={`menu-item ${
              activePage === "myflat"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("myflat")
            }
          >
            <span>🏠</span>
            My Flat
          </button>

          <button
            className={`menu-item ${
              activePage === "maintenance"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("maintenance")
            }
          >
            <span>📄</span>
            Maintenance
          </button>

          <button
            className={`menu-item ${
              activePage === "payments"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("payments")
            }
          >
            <span>💳</span>
            Payments
          </button>

          <button
            className={`menu-item ${
              activePage === "complaints"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage("complaints")
            }
          >
            <span>📝</span>
            Complaints
          </button>

          <button
            className={`menu-item ${
              activePage === "visitors" ? "active" : ""
            }`}
            onClick={() => setActivePage("visitors")}
          >
            <span>👥</span>
            Visitors
          </button>

                    <button
            className={`menu-item ${
              activePage === "amenities" ? "active" : ""
            }`}
            onClick={() => setActivePage("amenities")}
          >
            <span>🏊</span>
            Amenities
          </button>

          <button
  className={`menu-item ${
    activePage === "notices" ? "active" : ""
  }`}
  onClick={() => setActivePage("notices")}
>
  <span>📢</span>
  Notices
</button>

          <button
            className="menu-item"
            onClick={() =>
              alert("Polls page coming soon.")
            }
          >
            <span>📊</span>
            Polls
          </button>

        </div>

        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <button
            className="menu-item"
            onClick={() =>
              alert("Settings page coming soon.")
            }
          >
            <span>⚙️</span>
            Settings
          </button>

          <button
            className="menu-item logout"
            onClick={() => {
              localStorage.removeItem("loggedIn");
              window.location.href = "/";
            }}
          >
            <span>🚪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* =========================
          MAIN AREA
      ========================= */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>
            <h1>Resident Portal</h1>
          </div>

          <div className="header-right">

            <button
              className="notification"
              onClick={() =>
                alert("No new notifications.")
              }
            >
              🔔
            </button>

            <div className="user-profile">

              <div className="user-avatar">
                N
              </div>

              <div>
                <strong>Nakshatra</strong>
                <small>Resident</small>
              </div>

            </div>

          </div>

        </header>

        {/* CURRENT PAGE */}

        {renderPage()}

      </main>

    </div>
  );
}

export default ResidentDashboard;