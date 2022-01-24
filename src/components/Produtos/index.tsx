import { useProducts } from "../../provider/Produtos";
import { Container, Imagem } from "./styles";
import { useCart } from "../../provider/Carrinho";


export const Produtos = () => {
    
    const { products } = useProducts();
    const { adicionar } = useCart()

    return(
        <>
        <Container>
            <ul>
                {products.map((produto) =>
                 (<li key={produto.id}>
                    <Imagem src={produto.img} alt={produto.name}/>
                    <p>{produto.name}</p>
                    <p>{produto.category}</p>
                    <strong>{produto.price.toFixed(2)}</strong>
                    <button onClick={() => adicionar(produto)}>Adicionar</button>
                </li>))}
            </ul>
        </Container>
        </>
    )
}