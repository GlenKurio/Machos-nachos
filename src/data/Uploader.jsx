import { useState } from "react";
import supabase from "../services/supabase";
import { menu } from "./data-menu";

async function deleteMenu() {
  const { error } = await supabase.from("menu").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createMenu() {
  const { error } = await supabase.from("menu").insert(menu);

  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadMenu() {
    setIsLoading(true);
    await deleteMenu();
    await createMenu();

    setIsLoading(false);
  }

  return (
    <div>
      <h2>Sample Data</h2>
      <button disabled={isLoading} onClick={uploadMenu}>
        Upload Menu
      </button>
    </div>
  );
}

export default Uploader;
