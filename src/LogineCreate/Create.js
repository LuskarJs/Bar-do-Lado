import "./create.css"
import {Link} from "react-router-dom";
import { useState } from "react";

function Create() {

    const [setfinal, setSetFinal] = useState(false);
    const [setfinaltext, setSetFinaltext] = useState("Confirmar Cadastro");

    const ClickFunction = () => {
        setSetFinal(true);
        updateStep();
    };

  const updateStep = () => {
    if (setfinal === true) {
      const setp1 = document.querySelector(".setp1");
      let stepfinal = document.querySelector(".setpfinal");
      let option = document.querySelector(".options");
      let button = document.querySelector(".continuaetapa");
      let buttonSubmit = document.querySelector('.content-Create form .btns button');

      if(setfinal === true ){
        stepfinal.classList.add("show");
        option.classList.add("hidden");
        button.classList.add("hidden");
        buttonSubmit.classList.add("finalstep");
        buttonSubmit.textContent = setfinaltext;
    }
      setp1.classList.add("conclude");
    }
  };
        
    return (
        <section>
            <div className="content-Create">
                <form>
                    <div className="text-title">
                        <h3>Seja Bem-vindo</h3>
                    </div>
                    <div className="setp1">
                        <div className="input-content">
                            <label htmlFor="Nome">Nome</label>
                            <input type="text" placeholder="Nome" name="Nome"/>
                            <small>Preencha o campo</small>
                        </div>
                        <div className="input-content">
                            <label htmlFor="Sobrenome">Sobrenome</label>
                            <input type="text" placeholder="Sobrenome" name="Sobrenome"/>
                            <small>Preencha o campo</small>
                        </div>
                    </div>
                    <div className="setpfinal">
                        <div className="input-content">
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder="email" name="Email"/>
                            <small>Preencha o campo</small>
                        </div>
                        <div className="input-content">
                            <label htmlFor="password">Senha</label>
                            <input type="password" placeholder="senha" name="password"/>
                            <small>Preencha o campo</small>
                        </div>
                        <div className="input-content">
                            <label htmlFor="passwordConfirm">Confirma Senha</label>
                            <input type="password" placeholder="senha" name="passwordConfirm"/>
                            <small>Preencha o campo</small>
                        </div>
                    </div>
                    <div className="options">
                        <p>ou</p>
                        <Link to="/Login">
                            <button>Fazer Login</button>
                        </Link>   
                    </div>
                    <div className="btns">
                        <button>Etapa 1</button>
                        <p className="continuaetapa" onClick={() => ClickFunction()}>Continuar</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Create;