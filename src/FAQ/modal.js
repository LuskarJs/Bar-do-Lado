import React, { useState } from "react";

function Modal({ fecharModal }) {
    const [modalAberto, setModalAberto] = useState(true);

    const fecharModalLocal = () => {
        setModalAberto(false);
        fecharModal(); // Chama a função para fechar o modal do componente pai
    };

    return (
        <section className={`section-modal ${modalAberto ? "aberto" : ""}`}>
            <form className="form-modal">
                <div className="title-modal">
                    <h2>Fazer Pergunta</h2>
                </div>
                <div className="flex">
                    <div className="input-modal">
                        <label>Nome Completo</label>
                        <input type="text" />
                    </div>
                    <div className="input-modal">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                </div>

                <div className="input-modal">
                    <label>Faça sua Pergunta</label>
                    <textarea></textarea>
                </div>
                <div className="btn">
                    <button type="submit">Enviar Pergunta</button>
                    <p onClick={fecharModalLocal}>Fechar</p>
                </div>
            </form>
        </section>
    );
}

export default Modal;
