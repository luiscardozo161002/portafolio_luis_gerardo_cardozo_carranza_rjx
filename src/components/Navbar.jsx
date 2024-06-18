import { Routes, Route, NavLink } from "react-router-dom";
import Python from "../routes/Python";
import Javascript from "../routes/Javascript";
import Php from "../routes/Php";
import Shell from "../routes/Shell";
import Sass from "../routes/Sass";
import Java from "../routes/Java";
import Inicio from "../routes/Inicio";

function Navbar() {
  return (
    <div className="mx-auto">
      <nav
        className="navbar navbar-expand-lg"
        style={{ border: "0.2px solid #000000", backgroundColor: "#017F8D" }}
      >
        <div className="container-fluid">
          <NavLink className="nav-link active" aria-current="page" to="/inicio">
            <img
              src="https://cdn2.iconfinder.com/data/icons/business-round-icons/500/bag-1024.png"
              alt="Logo"
              width="30"
              height="auto"
              className="d-inline-block align-text-top me-2"
              style={{ width: "3rem", height: "auto", objectFit: "cover" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/python"
                  >
                    Python
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/javascript"
                  >
                    JavaScript
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/php"
                  >
                    Php
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/shell"
                  >
                    Shell
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/sass"
                  >
                    Sass
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/java"
                  >
                    Java
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/php" element={<Php />} />
        <Route path="/shell" element={<Shell />} />
        <Route path="/sass" element={<Sass />} />
        <Route path="/java" element={<Java />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default Navbar;
