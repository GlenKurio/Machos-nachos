import { Link } from "react-router-dom";

const Categories = [
  { name: "All" },
  { name: "Appetizers" },
  { name: "Tacos" },
  { name: "Desserts" },
  { name: "Enchiladas" },
  { name: "Burritos" },
  { name: "Main Courses" },
  { name: "Tamales" },
];

function FilterNav({ params, categoryFilter }) {
  function generateNewSPString(key, value) {
    const sp = new URLSearchParams(params);
    if (value === "all") {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  return (
    <ul className="flex flex-wrap justify-around gap-1 p-4">
      {Categories.map((category) => (
        <Link
          to={generateNewSPString("category", `${category.name.toLowerCase()}`)}
          key={category.name}
          className="flex-1  bg-yellow px-4 py-2 text-center text-sm transition-all duration-300 hover:bg-green"
        >
          {category.name}
        </Link>
      ))}
    </ul>
  );
}

export default FilterNav;
