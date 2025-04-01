import { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

export async function loaderOrder({ params }: LoaderFunctionArgs) {
  if (!params.orderId) {
    throw new Error("Order ID is required");
  }
  const order = await getOrder(params.orderId);
  return order;
}

