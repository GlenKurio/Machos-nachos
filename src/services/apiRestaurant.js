import supabase from "./supabase";

export async function getMenu() {
  const { data: menu, error } = await supabase.from("menu").select("*");
  if (error) {
    console.log(error);
    throw new Error("Menu cannot be loaded at the moment");
  }

  return menu;
}

export async function getOrder(id) {
  let { data: order, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Order cannot be founded");
  }
  console.log(order);
  return order;
}

export async function createOrder(order) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ ...order }])
    .select();

  if (error) {
    // console.log(error);
    throw new Error("Order cannot be placed");
  }
  // console.log(data);
  return data;
}
