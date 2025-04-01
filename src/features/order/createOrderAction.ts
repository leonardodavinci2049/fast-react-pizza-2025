import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// Adjust the path based on your project structure

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function action({ request }: { request: Request }) {
  

  const formData = await request.formData();
  //console.log(request);
  //console.log(formData);

  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: typeof data.cart === 'string' ? JSON.parse(data.cart) : [],
    priority: data.priority === 'true',
    phone: data.phone, // Ensure phone is explicitly included
  };

  //console.log(order);

  const errors: { phone?: string } = {};
  if (typeof order.phone !== 'string' || !isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
   
  if (Object.keys(errors).length > 0) return errors;


  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse
  //store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

