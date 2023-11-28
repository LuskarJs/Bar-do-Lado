import React, { useState } from "react";

function Modal({ fecharModal }) {
    const [modalAberto, setModalAberto] = useState(true);

    const fecharModalLocal = () => {
        setModalAberto(false);
        fecharModal();
    };

    return (
        <section className="section-modal">
            <form className="form-modal">
                <div className="title-modal">
                    <h2>Fazer Pergunta</h2>
                </div>
                <div className="flex">
                    <div className="input-modal">
                        <label>Nome Completo</label>
                        <input type="text" />
                        <small>Preencha o Campo</small>
                    </div>
                    <div className="input-modal">
                        <label>Email</label>
                        <input type="email" />
                        <small>Preencha o Campo</small>
                    </div>
                </div>
                <div className="input-modal">
                    <label>Faça sua Pergunta</label>
                    <textarea></textarea>
                    <small>Preencha o Campo</small>
                </div>
                <div className="btn">
                    <button type="submit">Enviar Pergunta</button>
                    <button onClick={fecharModalLocal}>Fechar</button>
                </div>
            </form>
        </section>
    );
}

export default Modal;
