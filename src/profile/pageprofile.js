import React, { useState } from "react";
import "./profile.css";
import img from "../Assests/marcelo-leal-6UeBe2HqziA-unsplash 1.jpg";
import ConfigNotification from "./configNotification";
import Dash from "./dash";
import Seguranca from "./seguranca";
import CentraldeAjuda from "./Suporte";
import EditarProfile from "./EditeProfile";

function Profile() {
  const [activeOption, setActiveOption] = useState("Dashboard");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const renderActiveComponent = () => {
    switch (activeOption) {
      case "ConfigNotification":
        return <ConfigNotification />;
      case "Seguranca":
        return <Seguranca />;
      case "CentraldeAjuda":
        return <CentraldeAjuda />;
      case "Dashboard":
        return <Dash/>;
        case "editarPerfil":
        return <EditarProfile/>;
        default:
        return <Dash/>
    }
  };

  return (
    <section className="section-profile">
      <div className="proffile-settings">
        <div className="profile-img">
          <figure>
            <img src={img} alt="" />
          </figure>
        </div>
        <ul className="setting-options">
            <li
            className={activeOption === "Dashboard" ? "mark" : ""}
            onClick={() => handleOptionClick("Dashboard")}
          >
            Historico de Pedidos
          </li>
          <li
            className={activeOption === "editarPerfil" ? "mark" : ""}
            onClick={() => handleOptionClick("editarPerfil")}
          >
            Configurações de Perfil
          </li>
          <li
            className={activeOption === "ConfigNotification" ? "mark" : ""}
            onClick={() => handleOptionClick("ConfigNotification")}
          >
            Configurações de Notificação
          </li>
          <li
            className={activeOption === "Seguranca" ? "mark" : ""}
            onClick={() => handleOptionClick("Seguranca")}
          >
            Privacidade e Segurança
          </li>
          <li
            className={activeOption === "CentraldeAjuda" ? "mark" : ""}
            onClick={() => handleOptionClick("CentraldeAjuda")}
          >
            Suporte ao Cliente
          </li>
        </ul>
      </div>
      <div className="profile-dash">
        <div className="profile-info">
          <h3>Lucas de Oliveira</h3>
          <h4>
            Status: <span className="classFidelidade">Primeira Visita</span>
          </h4>
          <p>
            Idade: <span className="idade-profile">25</span> anos
          </p>
        </div>
        {renderActiveComponent()}
      </div>
    </section>
  );
}

export default Profile;
