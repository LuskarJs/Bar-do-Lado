import React, { useState } from "react";

function Dash() {
  const [activeTab, setActiveTab] = useState("pedidosFeitos");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dash-section">
      <ul className="scroll-options">
        <li
          className={activeTab === "pedidosFeitos" ? "active" : ""}
          onClick={() => handleTabClick("pedidosFeitos")}
        >
          Pedidos feitos
        </li>
        <li
          className={activeTab === "emAndamento" ? "active" : ""}
          onClick={() => handleTabClick("emAndamento")}
        >
          Em andamento
        </li>
        <li
          className={activeTab === "pedidosFinalizados" ? "active" : ""}
          onClick={() => handleTabClick("pedidosFinalizados")}
        >
          Pedidos finalizados
        </li>
        <li
          className={activeTab === "pedidosCancelados" ? "active" : ""}
          onClick={() => handleTabClick("pedidosCancelados")}
        >
          Pedidos cancelados
        </li>
      </ul>
      <div className="flex-profile">
        <ul className="scroll-options-dash">
          <li>Ordenar por:</li>
          <li className={activeTab === "maisRecente" ? "show" : ""} onClick={() => handleTabClick("maisRecente")}>
            Mais recente
          </li>
          <li className={activeTab === "ultimoPedidos" ? "show" : ""} onClick={() => handleTabClick("ultimoPedidos")}>
            Último pedidos
          </li>
          <li className={activeTab === "favoritos" ? "show" : ""} onClick={() => handleTabClick("favoritos")}>
            Favoritos
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dash;
