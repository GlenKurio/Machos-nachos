import MenuItem from "./MenuItem";

function Menu({ displayedItems }) {
  const menuItems = displayedItems;
  return (
    <div>
      <ul className="mx-auto my-0 flex max-w-[1280px] flex-col gap-8 p-8">
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
