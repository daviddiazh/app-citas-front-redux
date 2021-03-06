import { Link } from "react-router-dom";
const NavBar = () => {

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link className="navbar-brand pl-5 fs-3 p-3" to={`/`}>
        Citas Médicas
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              className="nav-link fs-5 text-decoration-underline"
              to={`/citasReactivas`}
            >
              Citas
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fs-5 text-decoration-underline"
              to={`/padecimientos`}
            >
              Padecimientos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    )

}

export default NavBar;