import "./styles.css";
import html from "../../images/html.png";
import js from "../../images/js.png";
import css from "../../images/css.png";
import expressjs from "../../images/expressjs.png";
import node from "../../images/node.png";
import react from "../../images/reactjs.png";
import laravel from "../../images/laravel.png";
import java from "../../images/java.png";
import shell from "../../images/shell.png";
import { NavLink } from "react-router-dom";

function Inicio() {
  const handleLinkClick = (url) => (event) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  const handleLinkClickEmail = (email) => (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Hola%20soy...%20y%20necesito...%20&body=Hola%20soy%20...%20y%20me%20comunico%20contigo%20para...%20`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column mt-3">
      <div className="p-3 borde">
        <img
          src="https://mrd3veloper-portafolio.netlify.app/imagenes/foto_perfil.jpg"
          alt="Foto de Perfil"
          style={{ width: "8em", height: "8em" }}
          className="redondear"
        />
      </div>
      <div className="text-center ps-5 pe-5">
        <h1 style={{ color: "#3D5A80", fontFamily: "Rubik Dirt" }}>
          <span style={{ color: "#338B85" }}>Hola, soy</span> Luis Gerardo
          Cardozo Carranza
        </h1>
        <h2 style={{ color: "#06D6A0", textShadow: "1px 1px 1px #000000" }}>
          Desarrollador Web Junior
        </h2>
        <p>
          Desarrollo sitios web y aplicaciones usando tecnologías y lenguajes de
          programación creados para la web.
        </p>
      </div>
      <div className="mt-1" style={{ position: "relative" }}>
        <img src={html} alt="Logo de HTML" className="flotar-html" />
        <img src={js} alt="Logo de JS" className="flotar-js" />
        <img src={css} alt="Logo de CSS" className="flotar-css" />
        <img src={laravel} alt="Logo de Laravel" className="flotar-laravel" />
        <img src={java} alt="Logo de Java" className="flotar-java" />
        <img src={shell} alt="Logo de Shell" className="flotar-shell" />
        <img
          src="https://i.ibb.co/WpRrWqK/hero-inferior-removebg-preview.png"
          alt="Logo de Tecnologías"
          style={{ width: "19em" }}
        />
        <img src={expressjs} alt="Logo de ExpressJs" className="flotar-expjs" />
        <img src={node} alt="Logo de Nodejs" className="flotar-node" />
        <img src={react} alt="Logo de Reactjs" className="flotar-react" />
      </div>
      <div
        className="vercompleto text-center ps-3 pe-3"
        style={{ border: "0.1px solid #000000", borderBottom: "none" }}
      >
        <h3>
          ¿Quién es? <strong>Luis Gerardo Cardozo Carranza</strong>
        </h3>
        <div className="d-flex flex-column ps-5 pe-5 mt-2">
          <div className="ps-3 pe-3">
            <p className="text-center fs-6">
              Hola, soy estudiante de Ingeniería en Sistemas Computacionales en
              el Tecnológico de Estudios Superiores de Jilotepec. Mi pasión se
              centra en el desarrollo web frontend, donde desarrollo
              aplicaciones web con PHP (Laravel), Node.js (Express), Java
              (Spring Boot) y JavaScript (React.js). Tengo experiencia en el
              manejo de plataformas en la nube como Google Cloud, AWS y Azure,
              así como sólidos conocimientos en el uso y administración de bases
              de datos SQL, específicamente con MySQL y PostgreSQL. Mi nivel de
              inglés es B2.
            </p>
            <p>© copyright | 2024 | Luis Gerardo Cardozo Carranza</p>
            <div className="vercompleto d-flex align-items-center justify-content-center gap-3">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="#"
                onClick={handleLinkClick(
                  "https://github.com/luiscardozo161002"
                )}
              >
                <i className="bi bi-github fs-4"></i>
              </NavLink>

              <NavLink
                className="nav-link active"
                aria-current="page"
                to="#"
                onClick={handleLinkClick(
                  "https://wa.me/8128729451?text=Hola%2C%20necesito%20encontrarte%20."
                )}
              >
                <i className="bi bi-whatsapp fs-4"></i>
              </NavLink>

              <NavLink
                className="nav-link active"
                aria-current="page"
                to="#"
                onClick={handleLinkClickEmail("luiscardozo161002@gmail.com")}
              >
                <i className="bi bi-envelope-plus fs-4"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
