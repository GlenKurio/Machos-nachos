import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="max-w-[44ch] text-center text-3xl font-bold leading-loose">
        Oooooops! Looks Like this page was stolen by aliens 👽
      </h1>
      <Link
        className="rounded-md bg-slate-300 p-3 font-bold transition-all duration-300 hover:bg-yellow"
        to=".."
        relative="path"
      >
        &larr; Go Back
      </Link>
    </div>
  );
}

export default NotFound;
