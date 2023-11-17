import { NavLink } from "react-router-dom";
import { CharactersCard } from "../../components/charactersCard";

export function Category() {
  return (
    <div className="mt-10">
      <NavLink to="/category/callofdragons">
        <CharactersCard />
      </NavLink>
    </div>
  );
}
