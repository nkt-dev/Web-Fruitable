import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

export default function Dashboard({onLogout}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-dark min-vh-100 p-0">
          <Navigation onLogout={onLogout} />
        </div>

        <div className="col-lg-10 p-4 bg-light">
          <h1 className="mb-4">Dashboard</h1>
          <div className="bg-white p-3 rounded shadow-sm border">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}