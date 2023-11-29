import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <Link to=".." relative="path">
        &larr; Go back
      </Link>
    </div>
  );
}

export default Error;
