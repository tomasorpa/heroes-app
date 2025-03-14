import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate=useNavigate()
  const onLogout = () => {
    navigate("/login", {
      replace:true
    })
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Heroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/hero"
          >
            Hero
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse-2 d-flex justify-content-end">
        <ul className="navbar-nav">
          <button className="nav-item nav-link btn" onClick={onLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};
