import { useState } from "react";

function Complaints() {
  const [showForm, setShowForm] = useState(false);

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: "Water leakage in bathroom",
      date: "10 Sep 2026",
      icon: "🔧",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Corridor light not working",
      date: "05 Sep 2026",
      icon: "💡",
      status: "Resolved",
    },
    {
      id: 3,
      title: "Lift maintenance issue",
      date: "01 Sep 2026",
      icon: "🛗",
      status: "Resolved",
    },
  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Maintenance");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const newComplaint = {
      id: Date.now(),
      title: title,
      date: "12 Sep 2026",
      icon: category === "Plumbing" ? "🔧" : category === "Electrical" ? "💡" : "📝",
      status: "In Progress",
    };

    setComplaints([newComplaint, ...complaints]);

    setTitle("");
    setCategory("Maintenance");
    setDescription("");
    setShowForm(false);

    alert("Complaint submitted successfully!");
  }

  const totalComplaints = complaints.length;
  const inProgress = complaints.filter(
    (complaint) => complaint.status === "In Progress"
  ).length;
  const resolved = complaints.filter(
    (complaint) => complaint.status === "Resolved"
  ).length;

  return (
    <div className="page-content">

      {/* PAGE HEADER */}
      <div className="page-heading">
        <div>
          <h1>Complaints</h1>
          <p>Raise and track your society complaints.</p>
        </div>

        <button
          className="new-complaint-button"
          onClick={() => setShowForm(true)}
        >
          + New Complaint
        </button>
      </div>

      {/* SUMMARY */}
      <div className="complaint-summary">

        <div className="complaint-box">
          <span>Total Complaints</span>
          <h2>{totalComplaints}</h2>
          <small>All complaints</small>
        </div>

        <div className="complaint-box">
          <span>In Progress</span>
          <h2>{inProgress}</h2>
          <small>Being resolved</small>
        </div>

        <div className="complaint-box">
          <span>Resolved</span>
          <h2>{resolved}</h2>
          <small>Successfully resolved</small>
        </div>

      </div>

      {/* NEW COMPLAINT FORM */}
      {showForm && (
        <div className="complaint-card complaint-form-card">

          <div className="card-title">
            <div>
              <h2>New Complaint</h2>
              <p>Submit a complaint to the society management.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Complaint Title *</label>

              <input
                type="text"
                placeholder="Example: Water leakage in bathroom"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Category *</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Maintenance</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Lift</option>
                <option>Security</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Description *</label>

              <textarea
                rows="5"
                placeholder="Describe your complaint..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="complaint-form-actions">

              <button
                type="button"
                className="cancel-complaint-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-complaint-button"
              >
                Submit Complaint
              </button>

            </div>

          </form>

        </div>
      )}

      {/* COMPLAINT LIST */}
      <div className="complaint-card">

        <div className="card-title">
          <div>
            <h2>My Complaints</h2>
            <p>Track your submitted complaints.</p>
          </div>
        </div>

        <div className="complaint-list">

          {complaints.map((complaint) => (
            <div className="complaint-row" key={complaint.id}>

              <div className="complaint-icon">
                {complaint.icon}
              </div>

              <div className="complaint-info">
                <strong>{complaint.title}</strong>
                <span>Submitted: {complaint.date}</span>
              </div>

              <span
                className={`complaint-status ${
                  complaint.status === "Resolved"
                    ? "resolved"
                    : "progress"
                }`}
              >
                {complaint.status}
              </span>

              <button
                className="complaint-button"
                onClick={() =>
                  alert(
                    `Complaint: ${complaint.title}\nStatus: ${complaint.status}`
                  )
                }
              >
                View
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Complaints;