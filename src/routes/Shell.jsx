import { NavLink } from "react-router-dom"
import "./styles.css"

function Shell() {
  
  const handleLinkClick = (url) => (event) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div
          className="card p-3 mt-3 mb-2 me-5 ms-5"
          style={{
            border: "1px solid #000000",
            boxShadow: "4px 4px 8px  #000000",
          }}
        >
          <h4 className="mt-3 mb-2">
            Shell
            <span>
              <i className="bi bi-filetype-sh"></i>
            </span>
          </h4>
          <div className="d-flex flex-wrap justify-content-start align-items-center gap-3 mb-3 mt-3">
            <NavLink
              className="nav-link active efecto-shell"
              aria-current="page"
              to="#"
              onClick={handleLinkClick("https://github.com/luiscardozo161002/Scripts-de-Shell-Linux---Admon-BD-MySQL")}
            >
              <div className="card p-3">
                <p className="text-center">Admin. BD. SQL | MySQL</p>
                <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
                  <div>
                    <p className="text-center">Desarrollo de un script para Linux, para la administración de bases de datos SQL, usando Shell para administrar la base de datos SQL con el gestor de bases de datos MySQL.</p>
                  </div>
                  <div>
                    <img src="https://camo.githubusercontent.com/4583ee8fdf21b6b0102b947f73e5d1c94f233270712fb385775665c894afa0f0/68747470733a2f2f692e6962622e636f2f4c307a7a3343622f436170747572612d64652d70616e74616c6c612d323032342d30322d30392d3231313131332e706e67" alt="Logo de programa para administración de base de datos mysql" style={{width:"210px", height: "auto"}}/>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
  )
}

export default Shell