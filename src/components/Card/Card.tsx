import { useNavigate } from "react-router-dom";
import "./card.scss";
import { Product, useCartStore } from "../../store/cart";
import { useCountStore } from "../../store/count";

export type Props = {
  id: number | string;
  name: string;
  desc: string;
  buttonText: string;
};

const Card = (product: Product) => {
  const navigate = useNavigate();
const increment = useCountStore((state) => state.increment)
  const addProduct = useCartStore((state) => state.addProduct)

  return (
    <article key={product.id} className="card">
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <button onClick={() => navigate(`product/${product.id}`)}>{product.buttonText}</button>
      <button onClick={() => {addProduct(product); increment()}}>Add to Cart</button>
    </article>
  );
};

export default Card;
