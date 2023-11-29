function CategoryPill({ category }) {
  return (
    <>
      {category === "Appetizers" ? (
        <span className="rounded-full bg-orange-400 px-2 py-1 text-xs">
          Appetizers
        </span>
      ) : category === "Tacos" ? (
        <span className="rounded-full bg-slate-400 px-2 py-1 text-xs">
          Tacos
        </span>
      ) : category === "Desserts" ? (
        <span className="rounded-full bg-amber-400 px-2 py-1 text-xs">
          Desserts
        </span>
      ) : category === "Enchiladas" ? (
        <span className="rounded-full bg-emerald-400 px-2 py-1 text-xs">
          Enchiladas
        </span>
      ) : category === "Burritos" ? (
        <span className="rounded-full bg-lime-400 px-2 py-1 text-xs">
          Burritos
        </span>
      ) : category === "Main Courses" ? (
        <span className="rounded-full bg-sky-400 px-2 py-1 text-xs">Main</span>
      ) : category === "Tamales" ? (
        <span className="rounded-full bg-purple-400 px-2 py-1 text-xs">
          Tamales
        </span>
      ) : null}
    </>
  );
}

export default CategoryPill;
