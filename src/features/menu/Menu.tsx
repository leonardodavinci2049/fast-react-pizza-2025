import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

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
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
