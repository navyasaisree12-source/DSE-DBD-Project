import "./Maintenance.css";

function Maintenance() {
  return (
    <div className="page-content">

      {/* PAGE HEADING */}
      <div className="page-heading">
        <div>
          <h1>Maintenance</h1>
          <p>View and manage your monthly maintenance bills.</p>
        </div>
      </div>


      {/* CURRENT BILL */}
      <div className="maintenance-summary">

        <div className="summary-icon">
          🧾
        </div>

        <div className="summary-info">
          <span>Current Maintenance Bill</span>
          <h2>₹4,500</h2>
          <small>September 2026</small>
        </div>

        <div className="summary-status">
          <span>Pending</span>
          <button>Pay Now</button>
        </div>

      </div>


      {/* BILL HISTORY */}
      <div className="maintenance-card">

        <div className="card-title">
          <div>
            <h2>Bill History</h2>
            <p>Your previous maintenance bills.</p>
          </div>
        </div>


        <div className="bill-list">

          {/* BILL 1 */}
          <div className="bill-row">

            <div className="bill-icon">
              🧾
            </div>

            <div className="bill-info">
              <strong>September 2026</strong>
              <span>Due Date: 10 Sep 2026</span>
            </div>

            <div className="bill-amount">
              ₹4,500
            </div>

            <span className="bill-status pending">
              Pending
            </span>

            <button className="bill-button">
              Pay
            </button>

          </div>


          {/* BILL 2 */}
          <div className="bill-row">

            <div className="bill-icon">
              🧾
            </div>

            <div className="bill-info">
              <strong>August 2026</strong>
              <span>Paid on: 08 Aug 2026</span>
            </div>

            <div className="bill-amount">
              ₹4,500
            </div>

            <span className="bill-status paid">
              Paid
            </span>

            <button className="bill-button view">
              View
            </button>

          </div>


          {/* BILL 3 */}
          <div className="bill-row">

            <div className="bill-icon">
              🧾
            </div>

            <div className="bill-info">
              <strong>July 2026</strong>
              <span>Paid on: 07 Jul 2026</span>
            </div>

            <div className="bill-amount">
              ₹4,500
            </div>

            <span className="bill-status paid">
              Paid
            </span>

            <button className="bill-button view">
              View
            </button>

          </div>


          {/* BILL 4 */}
          <div className="bill-row">

            <div className="bill-icon">
              🧾
            </div>

            <div className="bill-info">
              <strong>June 2026</strong>
              <span>Paid on: 09 Jun 2026</span>
            </div>

            <div className="bill-amount">
              ₹4,500
            </div>

            <span className="bill-status paid">
              Paid
            </span>

            <button className="bill-button view">
              View
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Maintenance;