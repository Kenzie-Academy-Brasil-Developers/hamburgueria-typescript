import { useCart } from "../../provider/Carrinho"

export const Carrinho = () => {

    const {remover,cart} = useCart()

    return(
        <>
        <div>
            <ul>
                {cart.map((carrinho) =>
                 (<li key={carrinho.id}>
                    <img src={carrinho.img} alt={carrinho.name}/>
                    <p>{carrinho.name}</p>
                    <p>{carrinho.category}</p>
                    <strong>{carrinho.price.toFixed(2)}</strong>
                    <button onClick={() => remover(carrinho.id)}>Remover</button>
                </li>))}
            </ul>
        </div>
        </>
    )

}