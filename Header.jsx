import Navbar from "./Navbar.jsx";

export default function Header({ cart = [], currentUser, isAuthenticated }) {
  const totalQty = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <div className="header-fixed">
        <div className="container-fluid p-0">
          <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
              <div className="top-info ps-2">
                <small className="me-3">
                  <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-white">
                    123 Street, New York
                  </a>
                </small>
                <small className="me-3">
                  <i className="fas fa-envelope me-2 text-secondary"></i>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-white">
                    Email@Example.com
                  </a>
                </small>
              </div>

              <div className="top-link pe-2">
                <a href="#" onClick={(e) => e.preventDefault()} className="text-white">
                  <small className="text-white mx-2">Privacy Policy</small>/
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-white">
                  <small className="text-white mx-2">Terms of Use</small>/
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-white">
                  <small className="text-white ms-2">Sales and Refunds</small>
                </a>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="container px-0">
            <Navbar totalQty={totalQty} currentUser={currentUser} isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </>
  );
}