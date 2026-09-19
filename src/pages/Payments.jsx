function Payments() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Payments</h1>
          <p>View your maintenance payments and payment history.</p>
        </div>
      </div>

      <div className="payment-summary">
        <div className="payment-box">
          <span>Total Paid</span>
          <h2>₹13,500</h2>
          <small>Last 3 months</small>
        </div>

        <div className="payment-box pending-box">
          <span>Pending Amount</span>
          <h2>₹4,500</h2>
          <small>September 2026</small>
        </div>
      </div>

      <div className="payment-card">
        <div className="card-title">
          <div>
            <h2>Payment History</h2>
            <p>Your maintenance payment records.</p>
          </div>
        </div>

        <div className="payment-list">

          <div className="payment-row">
            <div className="payment-icon">₹</div>

            <div className="payment-info">
              <strong>September 2026</strong>
              <span>Maintenance</span>
            </div>

            <div className="payment-amount">
              ₹4,500
            </div>

            <span className="payment-status pending">
              Pending
            </span>

            <button
  className="payment-button"
  onClick={async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/payments/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 4500,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          `Payment request sent successfully!\nAmount: ₹${data.amount}`
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to payment server.");
    }
  }}
>
  Pay Now
</button>
          </div>

          <div className="payment-row">
            <div className="payment-icon">₹</div>

            <div className="payment-info">
              <strong>August 2026</strong>
              <span>Paid on: 08 Aug 2026</span>
            </div>

            <div className="payment-amount">
              ₹4,500
            </div>

            <span className="payment-status paid">
              Paid
            </span>

            <button className="payment-button view">
              Receipt
            </button>
          </div>

          <div className="payment-row">
            <div className="payment-icon">₹</div>

            <div className="payment-info">
              <strong>July 2026</strong>
              <span>Paid on: 07 Jul 2026</span>
            </div>

            <div className="payment-amount">
              ₹4,500
            </div>

            <span className="payment-status paid">
              Paid
            </span>

            <button className="payment-button view">
              Receipt
            </button>
          </div>

          <div className="payment-row">
            <div className="payment-icon">₹</div>

            <div className="payment-info">
              <strong>June 2026</strong>
              <span>Paid on: 09 Jun 2026</span>
            </div>

            <div className="payment-amount">
              ₹4,500
            </div>

            <span className="payment-status paid">
              Paid
            </span>

            <button className="payment-button view">
              Receipt
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Payments;