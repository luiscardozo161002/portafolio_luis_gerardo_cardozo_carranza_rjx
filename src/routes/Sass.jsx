import { NavLink } from "react-router-dom"
import "./styles.css"

function Sass() {

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
      Sass | HTML y CSS
      <span>
        <i className="bi bi-filetype-sass"></i>
      </span>
    </h4>
    <div className="d-flex flex-wrap justify-content-start align-items-center  gap-3 mb-3 mt-3">
      <NavLink
        className="nav-link active efecto-html"
        aria-current="page"
        to="#"
        onClick={handleLinkClick("https://github.com/luiscardozo161002/LadingPageGreen")}
      >
        <div className="card p-3">
          <p className="text-center">Lading Page Green | Sass</p>
          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
            <div>
               <p>Código de una landing page, enfocada al rubro ecológico. Desarrollada usando HTML y el preprocesador css SASS.</p>
            </div>
            <div>
              <img src="https://i.ibb.co/xS59FvM/Captura-de-pantalla-2024-06-05-220945.png" alt="Captura de pantall de la landing page"  style={{width:"210px", height: "auto"}}/>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  </div> 
  )
}

export default Sass