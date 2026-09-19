import "./MyFlat.css";

function MyFlat() {
  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <h1>My Flat</h1>
          <p>View your flat and resident information.</p>
        </div>
      </div>

      {/* Flat Information */}
      <div className="flat-card">

        <div className="flat-header">
          <div className="flat-icon">
            🏠
          </div>

          <div>
            <h2>Flat A-101</h2>
            <p>Block A • 1st Floor</p>
          </div>
        </div>

        <div className="flat-details">

          <div>
            <span>Flat Type</span>
            <strong>2 BHK</strong>
          </div>

          <div>
            <span>Area</span>
            <strong>1250 sq.ft</strong>
          </div>

          <div>
            <span>Floor</span>
            <strong>1st Floor</strong>
          </div>

          <div>
            <span>Parking</span>
            <strong>Yes</strong>
          </div>

        </div>

      </div>


      {/* Resident Information */}
      <div className="resident-card">

        <div className="card-title">
          <div>
            <h2>Family Members</h2>
            <p>Residents registered under this flat.</p>
          </div>

          <button>
            + Add Member
          </button>
        </div>


        <div className="member-list">

          <div className="member">
            <div className="member-avatar">
              👤
            </div>

            <div>
              <strong>Nakshatra</strong>
              <span>Owner</span>
            </div>
          </div>


          <div className="member">
            <div className="member-avatar">
              👤
            </div>

            <div>
              <strong>Akshaya</strong>
              <span>Resident</span>
            </div>
          </div>


          <div className="member">
            <div className="member-avatar">
              👤
            </div>

            <div>
              <strong>Rahul</strong>
              <span>Resident</span>
            </div>
          </div>


          <div className="member">
            <div className="member-avatar">
              👤
            </div>

            <div>
              <strong>Priya</strong>
              <span>Resident</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default MyFlat;