import "./profile.css";
import img from "../Assests/marcelo-leal-6UeBe2HqziA-unsplash 1.jpg"

function Profile() {

    return (
        <section className="section-profile">
            <div className="proffile-settings">
                <div className="profile-img">
                    <figure>
                        <img src={img} alt="" />
                    </figure>
                </div>
                <ul className="setting-options">
                    <li>
                     Configurações de Notificação
                    </li>
                    <li>
                    Privacidade e Segurança
                    </li>
                    <li>
                    Suporte ao Cliente
                    </li>
                    <li>
                    Editar Perfil
                    </li>
                    <li>
                    favoritos
                    </li>
                </ul>
            </div>
            <div className="profile-dash">
                <div className="profile-info">
                    <h3>Lucas de Okliveira</h3>
                    <h4>Fidelidade: <span className="classFidelidade">Primeita Visita</span></h4>
                    <p>Idade: <span className="idade-profile">25</span> anos</p>
                </div>

                <div className="dash-section">
                    <ul className="scroll-options">
                        <li className="active">pedidos feitos</li>
                        <li>Pedidos em andamento</li>
                        <li>Pedidos finalizados</li>
                        <li>Pedidos cancelados</li>
                    </ul>
                    <div className="flex-profile">
                        <ul className="scroll-options-dash">
                            <li>ordernar por:</li>
                            <li>mais recente</li>
                            <li>ultimo pedidos</li>
                            <li>favoritos</li>
                        </ul>
                    </div>
                   
                </div>
            </div>
            
        </section>
    )
}

export default Profile;