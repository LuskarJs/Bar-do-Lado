import foto from "../Assests/fabio-alves-AgqZPNcHR6w-unsplash 1.png";

const ProfileAccount = () => {

    return (
        <div className="content-profile">
            <div className="profile-account">
                <div className="img-profile">
                    <figure>
                        <img src={foto} alt="foto de perfil" />
                    </figure>
                </div>
                <div className="text-profile">
                    <h3>Carlos de Antonio</h3>
                    <p>Administrador</p>
                </div>
            </div>
            <ul>
                <li onClick={ToggleCart}>
                    Meu Carrinho
                </li>
                <li>configurações</li>
                <li>Sair da Conta</li>
            </ul>
        </div>
    )
}   

export default ProfileAccount;