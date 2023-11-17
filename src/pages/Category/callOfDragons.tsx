import character from "../../assets/call-of-dragons/PetBirdPeakRoc.png";

export function CallOfDragons() {
  function handleShowHAbilitys() {
    const trigger = document.getElementById("menu-habilities");

    trigger && trigger.classList.toggle("hidden");
  }

  return (
    <main className="mt-10">
      <h2 className="w-full">Selecione o seu personagem</h2>
      <div className="flex">
        <button onClick={handleShowHAbilitys}>
          <figure className="w-56 p-8 mt-6 bg-slate-500 rounded-lg relative">
            <img src={character} className="w-full object-cover" />
            <span className="absolute bottom-2 right-3 text-cyan-50">Pet Bird Peak Rock</span>
          </figure>
        </button>

        <aside id="menu-habilities" className="p-8 hidden">
          <h2>Selecione as Habilidades</h2>
          <select className="w-full h-10 mt-5 bg-slate-600">
            <option value="">Selecione uma habilidade</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </aside>
      </div>
    </main>
  );
}
