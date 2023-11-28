import "cart.css";

function CartFunction() {

    return (
        <section>
            <div className="title-cart">
                <h3>Seus Pedidos</h3>
            </div>
            <ul className="lista-cart">
                <li>
                    <div className="info-card">
                        <h3>CerveJa skoll</h3>
                        <p><span>-</span> <span className="count-cart">8</span> <span>+</span></p>
                        <h4>Total R$ <span className="price-cart">45,50</span></h4>
                    </div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </li>
            </ul>
            <div className="total-price">
                <p>Total: <span>75,30</span></p>
            </div>
            <div className="btns">
                <button>Limpar Carrinho</button>
                <button>Finalizar Compras</button>
            </div>
        </section>
    )
}

export default CartFunction;