import { formatCurrency } from "../../utils/helpers";


type Pizza = {
  name: string;
  imageUrl: string;
  ingredients: string[];
  unitPrice: number;
  soldOut: boolean;
};

const MenuItem = ({ pizza }: { pizza: Pizza }) => {
  const { name, imageUrl, ingredients, unitPrice, soldOut } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem