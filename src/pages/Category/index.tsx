import { NavLink } from "react-router-dom";
import { CharactersCard } from "../../components/charactersCard";

export function Category() {
  return (
    <div className="mt-10">
      <h2 className="mb-5">Todas as categorias</h2>
      <NavLink to="/category/callofdragons">
        <CharactersCard />
      </NavLink>
    </div>
  );
}
