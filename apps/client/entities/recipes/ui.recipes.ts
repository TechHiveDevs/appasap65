
import show from "./show.recipes";
import create from "./create.recipes";
import edit from "./edit.recipes";
import list from "./list.recipes";

export default { 
  name: "recipes",
  label: "recipes",
  hide: false,
  create,
  edit,
  list,
  show,
}