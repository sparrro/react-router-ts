type Props = {
  id: number;
  name: string;
  desc: string;
  buttonText: string;
};

const Card = ({ id, name, desc, buttonText }: Props) => {
  return (
    <article key={id} className="card">
      <h4>{name}</h4>
      <p>{desc}</p>
      <button>{buttonText}</button>
    </article>
  );
};

export default Card;
