import { useProducts } from "../../provider/Produtos";
// import { useCart } from "../../provider/Carrinho";


export const Produtos = () => {
    
    const { products } = useProducts();
    // const { adicionar } = useCart()

    return(
        <>
        <div>
            <ul>
                {products.map((produto) =>
                 (<li key={produto.id}>
                    <img src={produto.img} alt={produto.name}/>
                    <p>{produto.name}</p>
                    <p>{produto.category}</p>
                    <strong>{produto.price.toFixed(2)}</strong>
                    {/* <button onClick={() => adicionar(produto)}>Remover</button> */}
                </li>))}
            </ul>
        </div>
        </>
    )
}