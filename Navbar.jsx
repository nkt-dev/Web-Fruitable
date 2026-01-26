
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ totalQty = 0, currentUser, isAuthenticated }) {
  return (
    <nav className="navbar navbar-light bg-white navbar-expand-xl">
      {/* Brand */}
      <Link to="/" className="navbar-brand">
        <h1 className="text-primary display-6 m-0">Fruitables</h1>
      </Link>

      {/* Toggle (mobile) */}
      <button
        className="navbar-toggler py-2 px-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars text-primary"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          {/* Demo pages - bạn có thể tạo route sau, hiện để # không lỗi */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="nav-item nav-link"
          >
            Shop
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="nav-item nav-link"
          >
            Shop Detail
          </a>

          {/* Dropdown Pages */}
          <div className="nav-item dropdown">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>

            <div className="dropdown-menu m-0 bg-secondary rounded-0">
              <Link to="/cart" className="dropdown-item">
                Cart
              </Link>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="dropdown-item"
              >
                Checkout
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="dropdown-item"
              >
                Testimonial
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="dropdown-item"
              >
                404 Page
              </a>
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="nav-item nav-link"
          >
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="d-flex m-3 me-0 align-items-center">
          {/* Search */}
          <button
            className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
            type="button"
            title="Search"
            aria-label="Search"
          >
            <i className="fas fa-search text-primary"></i>
          </button>

          {/* Cart */}
          <Link to="/cart" className="position-relative me-4 my-auto" title="Cart">
            <i className="fa fa-shopping-bag fa-2x"></i>

            {Number(totalQty) > 0 && (
              <span
                className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style={{
                  top: "-5px",
                  left: "15px",
                  height: "20px",
                  minWidth: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {totalQty}
              </span>
            )}
          </Link>

          {/* User */}
          <div className="position-relative">
            {!isAuthenticated ? (
              <Link to="/signin" className="my-auto" title="Login" aria-label="Login">
                <i className="fas fa-user fa-2x"></i>
              </Link>
            ) : (
              <>
                <div className="mb-1">
                  <i className="fas fa-user fa-2x text-primary"></i>
                  <span className="position-absolute text-dark fw-bold">{currentUser.username}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
