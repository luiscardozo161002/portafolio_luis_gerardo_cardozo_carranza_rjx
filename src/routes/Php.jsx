import { NavLink } from "react-router-dom"
import "./styles.css"

function Php() {

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
      PHP
      <span>
        <i className="bi bi-filetype-php"></i>
      </span>
    </h4>
    <div className="d-flex flex-wrap justify-content-start align-items-center gap-3 mb-3 mt-3">
      <NavLink
        className="nav-link active efecto-php"
        aria-current="page"
        to="#"
        onClick={handleLinkClick("https://github.com/luiscardozo161002/sistema-post-punto-venta-ferreteria-ferrexpress-php-bootstrap-y-mysql")}
      >
        <div className="card p-3">
          <p className="text-center">Sistema POS | MySQL | Bootstrap | Laravel</p>
          <div  className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
            <div>
            <p>Desarrollo de un sistema POS punto de venta, para la administración de la ferretería ferrepress, creada con el framework de Laravel. Además se hizo uso de la base de datos MySQL, y para los estilos se hizo uso de Bootstrap.</p>
            </div>
            <div>
              <img src="https://camo.githubusercontent.com/2230918f0b0ef0faf5cf0f0be2eac2c7b98f600cdb716c9696ddd251b36a8685/68747470733a2f2f692e6962622e636f2f5654394237436b2f496d6167656e2d64652d57686174732d4170702d323032342d30312d31382d612d6c61732d31382d30332d33372d39393162396365312e6a7067" alt="Página de inicio del sistema punto de venta" style={{width:"210px", height: "auto"}}/>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
  )
}

export default Php