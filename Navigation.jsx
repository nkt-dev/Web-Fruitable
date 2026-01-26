import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(); 
    navigate("/signin");
  };

  const activeLink = {
    backgroundColor: "#8bc34a", // Màu xanh lá như trong PDF
    color: "white",
    borderRadius: "10px",
    margin: "0 10px"
  };

  const normalLink = {
    color: "#a0a0a0",
    padding: "10px 20px",
    textDecoration: "none"
  };

  return (
    <div className="pt-3">
      <h3 className="text-white px-3 mb-4 h4">Company name</h3>
      <nav className="nav flex-column mt-3">
        <NavLink
          to="/dashboard"
          end
          className="nav-link mb-2"
          style={({ isActive }) => isActive ? activeLink : normalLink}
        >
          Dashboard
        </NavLink>

        <NavLink to="/" className="nav-link mb-2" style={normalLink}>
          Home
        </NavLink>

        <div className="px-3 mb-1 mt-2">
          <div className="p-2 d-block w-100 text-white rounded" style={{ backgroundColor: "#8bc34a" }}>
            All Products
          </div>
          <ul className="list-unstyled ms-3 mt-2">
            <li>
              <NavLink
                to="/dashboard/product"
                className="nav-link py-2 rounded mb-1 text-white"
                style={({ isActive }) => ({ backgroundColor: isActive ? "#7cb342" : "transparent" })}
              >
                ● Product
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink
          to="/dashboard/user"
          className="nav-link mb-2"
          style={({ isActive }) => isActive ? activeLink : normalLink}
        >
          Users
        </NavLink>

        <button
          onClick={handleLogoutClick}
          className="nav-link mt-4 text-white p-2 rounded mx-3 text-center border-0"
          style={{ backgroundColor: "#8bc34a" }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}