import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
// Adicione essa interface no início do arquivo, após as importações
interface Pizza {
  id: number;
  name: string;
  imageUrl: string;
  ingredients: string[];
  unitPrice: number;
  soldOut: boolean;
  price: number;
}

const Menu = () => {
  const menu = useLoaderData();
 // console.log("Menu", menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
