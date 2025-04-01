import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";


const Error = () => {
  const error = useRouteError() as { data?: string; message?: string };
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message || "An unknown error occurred."}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error