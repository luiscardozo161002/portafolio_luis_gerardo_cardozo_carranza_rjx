import { NavLink } from 'react-router-dom';
import './styles.css';

function Java() {
  
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
        Java
        <span>
          <i className="bi bi-filetype-java"></i>
        </span>
      </h4>
      <div className="d-flex flex-wrap justify-content-start align-items-center gap-3 mb-3 mt-3">
        <NavLink
          className="nav-link active efecto-java"
          aria-current="page"
          to="#"
          onClick={handleLinkClick('https://github.com/luiscardozo161002/Algoritmo_de_Operaciones_con-_Matrices')}
        >
          <div className="card p-3">
            <p className='text-center'>Aplicación de Operaciones con Matrices</p>
            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
              <div>
                 <p>Desarrollo de una aplicación de escritorio, para llevar a cabo operaciones de matrices.</p>
              </div>
              <div>
                  <img src="https://i.ibb.co/HTNWTGz/Captura-de-pantalla-2024-06-05-223135.png" alt="Código de matrices" style={{width:"210px", height: "auto"}}/>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink
          className="nav-link active efecto-java"
          aria-current="page"
          to="#"
          onClick={handleLinkClick('https://github.com/luiscardozo161002/Proyectos-de-Android-Studio-Kotlin')}
        >
          <div className="card p-3 efecto-java">
            <p className="text-center">Proyectos Mobile | Java y Kotlin</p>
            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
              <div>
              <p>Desarrollo de proyectos de Android Studio, aplicaciones móviles. Creadas con lenguajes de programación Java y Kotlin.</p>
              </div>
              <div>
                <img src="https://i.ibb.co/nRjjykZ/Captura-de-pantalla-2024-06-05-212137.png" alt="Logo de proyectos de kotlin y java" style={{width:"210px", height: "auto"}}/>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Java;
