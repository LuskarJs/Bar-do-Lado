import Nome from "../Assests/usuario-de-perfil.png";
import Genero from "../Assests/fluido-de-genero.png";
import PlanodeFundo from "../Assests/fundo.png";
import Data from "../Assests/datas.png";

function EditarProfile() {

    return (
        <section className="section-profileEdit">
            <div className="title-editProfile">
                <h3>Aréa de Mudanças</h3>
            </div>
            <ul>
                <li>
                    <figure>
                        <img src={Nome} alt="icone nome" />
                    </figure>
                    <htmlforlabel >Editar nome</htmlforlabel>
                </li>
                <li>
                    <figure>
                        <img src={Data} alt="Icone Data de Nascimento" />
                    </figure>
                    <h4>Editar Idade</h4>
                </li>
                <li>
                    <figure>
                        <img src={Genero} alt="Icone Genero" />
                    </figure>
                    <h4>Editar Gênero</h4>
                </li>
                <li>
                    <figure>
                        <img src={PlanodeFundo} alt="Icone Plano de Fundo" />
                    </figure>
                    <h4>Editar Plano de Fundo</h4>
                </li>
            </ul>
        </section>
    )
}

export default EditarProfile;