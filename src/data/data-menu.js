import { supabaseUrl } from "../services/supabase";
const imageUrl = `${supabaseUrl}/storage/v1/object/public/menu-images/`;
// https://usjvkkhbisngigjtmyre.supabase.costorage/v1/object/public/menu-images/cheese-enchiladas.jpg

export const menu = [
  {
    name: "Guacamole",
    ingredients: "Avocado, onion, tomato, cilantro, lime, salt",
    price: 7.99,
    image: imageUrl + "guacamole-dip.jpg",
    category: "Appetizers",
  },

  {
    name: "Nachos",
    ingredients:
      "Tortilla chips, melted cheese, jalapeños, guacamole, sour cream",
    price: 9.49,
    image: imageUrl + "nachos.jpg",
    category: "Appetizers",
  },
  {
    name: "Taquitos",
    ingredients: "Rolled tortillas, shredded chicken, lettuce, cheese, salsa",
    price: 8.99,
    image: imageUrl + "taquitos.jpg",
    category: "Appetizers",
  },

  {
    name: "Carne Asada Tacos",
    ingredients: "Grilled steak, onions, cilantro, salsa",
    price: 9.99,
    image: imageUrl + "carne-asada-tacos.jpg",
    category: "Tacos",
  },
  {
    name: "Al Pastor Tacos",
    ingredients: "Marinated pork, pineapple, onions, cilantro",
    price: 8.49,
    image: imageUrl + "al-pastor-tacos.jpg",
    category: "Tacos",
  },

  {
    name: "Fish Tacos",
    ingredients: "Battered fish, slaw, chipotle mayo",
    price: 11.99,
    image: imageUrl + "fish-tacos.jpg",
    category: "Tacos",
  },

  {
    name: "Chile Verde Burrito",
    ingredients: "Slow-cooked pork, green chili sauce, rice, beans",
    price: 11.99,
    image: imageUrl + "chili-verde-burrito.jpg",
    category: "Burritos",
  },
  {
    name: "Bean and Cheese Burrito",
    ingredients: "Refried beans, cheese, rice, salsa",
    price: 7.99,
    image: imageUrl + "bean-and-cheese-burrito.jpg",
    category: "Burritos",
  },
  {
    name: "Chicken Fajita Burrito",
    ingredients: "Grilled chicken, bell peppers, onions, sour cream",
    price: 10.99,
    image: imageUrl + "chicken-burrito.jpg",
    category: "Burritos",
  },

  {
    name: "Cheese Enchiladas",
    ingredients: "Corn tortillas, cheese, red enchilada sauce",
    price: 9.49,
    image: imageUrl + "cheese-enchiladas.jpg",
    category: "Enchiladas",
  },
  {
    name: "Chicken Enchiladas Suizas",
    ingredients: "Chicken, tomatillo sauce, sour cream, cheese",
    price: 10.99,
    image: imageUrl + "chicken-enchiladas-suizas.jpg",
    category: "Enchiladas",
  },
  {
    name: "Spinach and Mushroom Enchiladas",
    ingredients: "Spinach, mushrooms, red enchilada sauce, cheese",
    price: 9.99,
    image: imageUrl + "spinach-mushroom-enchiladas.jpg",
    category: "Enchiladas",
  },

  {
    name: "Pork Tamales",
    ingredients: "Steamed masa, seasoned pork, red chili",
    price: 12.49,
    image: imageUrl + "pork-tamales.jpg",
    category: "Tamales",
  },

  {
    name: "Carnitas",
    ingredients: "Slow-cooked pork, orange, onion, cilantro",
    price: 11.99,
    image: imageUrl + "carnitas.jpg",
    category: "Main Courses",
  },
  {
    name: "Chiles Rellenos",
    ingredients: "Poblano peppers, cheese, tomato sauce",
    price: 12.99,
    image: imageUrl + "chilles-rellenhos.jpg",
    category: "Main Courses",
  },

  {
    name: "Tres Leches Cake",
    ingredients:
      "Sponge cake, condensed milk, evaporated milk, heavy cream, vanilla, cinnamon",
    price: 6.99,
    image: imageUrl + "tres-leches-cake.jpg",
    category: "Desserts",
  },
  {
    name: "Churros",
    ingredients: "Choux pastry, sugar, cinnamon, chocolate dipping sauce",
    price: 4.99,
    image: imageUrl + "churros.jpg",
    category: "Desserts",
  },
];
