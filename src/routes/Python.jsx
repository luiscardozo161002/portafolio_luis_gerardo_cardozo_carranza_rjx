import { NavLink } from "react-router-dom";
import "./styles.css";

function Python() {

  const handleLinkClick = (url) => (event) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className="card p-3 mt-3 mb-2 me-5 ms-5" style={{border:"0.2px solid #000000", boxShadow:"4px 4px 8px  #000000"}}>
          <h4 className="mt-3 mb-2">Python <span><i className="bi bi-filetype-py"></i></span></h4>
          <div className="d-flex flex-wrap justify-content-start align-items-center gap-3 mb-3 mt-3">
            <NavLink
              className="nav-link active efecto-python-azul"
              aria-current="page"
              to="#"
              onClick={handleLinkClick("https://github.com/luiscardozo161002/Balanceador-Arboles-AVL-Python")}
            >
              <div className="card p-3">
              <p className="text-center">Balanceador de Arboles | AVL</p>
              <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
                <div>
                  <p>Código de python para la creación y balanceo de arboles AVL usando algoritmos de Python.</p>
                </div>
                <div>
                    <img src="https://camo.githubusercontent.com/2e9229c9726952fbf4a531270c61cfa29d648f468ee59df9dd25de216324e0bd/68747470733a2f2f692e6962622e636f2f66595744724d742f436170747572612d64652d70616e74616c6c612d323032342d30322d30352d3135303431372e706e67" alt="Logo de arboles de decision" style={{width:"150px", height: "auto"}}/>
                </div>
              </div>   
              </div>
            </NavLink>

            <NavLink
              className="nav-link active efecto-python-amarillo"
              aria-current="page"
              to="#"
              onClick={handleLinkClick("https://github.com/luiscardozo161002/CursoIntroPython_Katas_LuisGerardoCardozoCarranza")}
            >
              <div className="card p-3">
                <p className="text-center">Curso Intro Python | LaunchX </p>
                <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
                <div>
                  <p>Kata de conjunto de códigos usando el entorno de python Jupyter Notebook.</p>
                </div>
                <div>
                  <img src="https://i.ibb.co/hKG3TtK/99037757.png" alt="Logo de LaunchX" style={{width:"105px", height: "auto"}} />
                </div>
              </div>
              </div>  
            </NavLink>      

            <NavLink
              className="nav-link active efecto-python-azul"
              aria-current="page"
              to="#"
              onClick={handleLinkClick("https://github.com/luiscardozo161002/Chat_Bot_Telegram")}
            >
              <div className="card p-3">
                <p className="text-center">ChatBot | Telegram</p>
                <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center text-center">
                  <div>
                    <p>Chatbot de Telegram, usando python.</p>
                  </div>
                  <div>
                    <img src="https://i.ibb.co/G9PJ0Z5/Captura-de-pantalla-2024-06-05-204559-removebg-preview.png" alt="Logo de Chatbot" style={{width:"210px", height: "auto"}}/>
                  </div>
                </div>
              </div>
            </NavLink>  
          </div>
        </div>
  )
}

export default Python
