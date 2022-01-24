import { useCart } from "../../provider/Carrinho"
// import { useProducts } from "../../provider/Produtos"
import { Container, Imagem } from "./styles"

export const Carrinho = () => {

    const {remover,cart} = useCart()
    // const { products } = useProducts();

    return(
        <>
        <Container>
            <ul>
                {cart.map((produtos) =>
                 (<li key={produtos.id}>
                    <Imagem src={produtos.img} alt={produtos.name}/>
                    <p>{produtos.name}</p>
                    <p>{produtos.category}</p>
                    <strong>{produtos.price.toFixed(2)}</strong>
                    <button onClick={() => remover(produtos)}>Remover</button>
                </li>))}
            </ul>

            {/* <button onClick={}>Esvaziar Carrinho</button> */}
        </Container>
        </>
    )

}