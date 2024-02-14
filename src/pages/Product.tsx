import { useParams } from "react-router-dom";
import { Props } from "../components/Card/Card";
import { data, imageString } from "../components/constants/constants";
import "./product.scss";
import { useState } from "react";

//Efter att ett villkor är mött, ska vi rendera produktinformationen.

//Om id´t i parametern, matchar id´t i data objektet.
//Rendera JSX (Visa Rätt UI för användaren)
const Product = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const pokemon = data.find((pokemon) => pokemon.id === id);

  const { desc, name, buttonText } = pokemon as Props;

  const handleClick = () => {
    setShow((prevValue) => !prevValue);
  };

  return (
    <section className="product-wrapper">
      <picture>
        <img src={imageString} alt="" />
      </picture>
      <article className="product-wrapper__product-info">
        {show && (
          <>
            <h4>{name}</h4>
            <p>{desc}</p>
          </>
        )}
        <button onClick={handleClick}>{buttonText}</button>
      </article>
    </section>
  );
};

export default Product;
