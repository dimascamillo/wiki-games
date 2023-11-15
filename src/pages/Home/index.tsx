import { NavLink } from "react-router-dom";
import { CharactersCard } from "../../components/charactersCard";

export function Home() {
  return (
    <main className="mt-14">
      <h2 className="text-xl font-semibold mb-7">Category</h2>
      <NavLink to="/category/callofdragons">
        <CharactersCard />
      </NavLink>
    </main>
  );
}
