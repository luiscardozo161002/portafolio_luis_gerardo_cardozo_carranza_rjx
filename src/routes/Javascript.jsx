import { NavLink } from "react-router-dom";
import "./styles.css"

function Javascript() {

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
      JavaScript
      <span>
        <i className="bi bi-filetype-js"></i>
      </span>
    </h4>
    <div className="d-flex flex-wrap justify-content-start align-items-center gap-3 mb-3 mt-3">
      <NavLink
        className="nav-link active efecto-js"
        aria-current="page"
        to="#"
        onClick={handleLinkClick("https://github.com/luiscardozo161002/api-gestion-productos-sistema-ferreteria")}
      >
        <div className="card p-3">
          <p className="text-center">API | NodeJS | Express | MySQL</p>
          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
            <div>
              <p>Desarrollo de una API, como introducción al mundo del backend con NodeJS.</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/bogeta11040/todolist-app/master/screenshot.jpg" alt="Página de API ToDoList" style={{width:"210px", height: "auto"}}/>
            </div>
          </div>
        </div>
      </NavLink>

      <NavLink
        className="nav-link active efecto-js"
        aria-current="page"
        to="#"
        onClick={handleLinkClick("https://github.com/luiscardozo161002/modal-imagenes-react")}
      >
        <div className="card p-3">
          <p className="text-center">Modal | Imagenes</p>
          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
            <div>
            <p>Modal de imagenes, para mostrar la imagen y detalles de la misma, un proyecto básico.</p>
            </div>
            <div>
              <img src="https://i.ibb.co/ZfCJWk3/Captura-de-pantalla-2024-06-05-215303.png" alt="Imagen de Modal Imágenes" style={{width:"210px", height: "auto"}}/>
            </div>
          </div>
        </div>
      </NavLink>

      <NavLink
        className="nav-link active efecto-js"
        aria-current="page"
        to="#"
        onClick={handleLinkClick("https://github.com/luiscardozo161002/sistema-post-punto-venta-ferreteria-ferrexpress-php-bootstrap-y-mysql")}
      >
        <div className="card p-3">
          <p className="text-center">Posters Películas | ReactJs</p>
          <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
              <div>
              <p>Página web creada con ReactJs, consumiendo una api para posters de películas modernas.</p>
              </div>
              <div>
                <img src="https://acortar.link/iVStkq" alt="Logo de poster de películas" style={{width:"210px", height: "auto"}}/>
              </div>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
  )
}

export default Javascript