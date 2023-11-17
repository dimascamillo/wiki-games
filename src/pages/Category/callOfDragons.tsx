import { useState } from "react";

import character from "../../assets/call-of-dragons/PetBirdPeakRoc.png";
import skillOne from "../../assets/call-of-dragons/skills/skill-one.png";
import skillTwo from "../../assets/call-of-dragons/skills/skill-two.png";
import skillThree from "../../assets/call-of-dragons/skills/skill-three.png";

export function CallOfDragons() {
  const [imgSkill, setImgSkill] = useState("");

  function handleShowHAbilitys() {
    const trigger = document.getElementById("menu-habilities");

    trigger && trigger.classList.toggle("hidden");
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedSkill = event.target.value;

    switch (selectedSkill) {
      case "skillOne":
        setImgSkill(skillOne);
        break;
      case "skillTwo":
        setImgSkill(skillTwo);
        break;
      case "skillThree":
        setImgSkill(skillThree);
        break;
      default:
        setImgSkill("");
    }
  }

  return (
    <main className="mt-10">
      <h2 className="w-full">Selecione o seu personagem</h2>
      <div className="flex h-72">
        <button onClick={handleShowHAbilitys}>
          <figure className="w-56 p-8 mt-6 bg-slate-500 rounded-lg relative">
            <img src={character} className="w-full object-cover" />
            <span className="absolute bottom-2 right-3 text-cyan-50">Pet Bird Peak Rock</span>
          </figure>
        </button>

        <aside id="menu-habilities" className="p-8 hidden">
          <h2>Selecione as Habilidades</h2>
          <select onChange={handleSelectChange} className="w-full h-10 mt-5 bg-slate-600">
            <option value="">Selecione uma habilidade</option>
            <option value="skillOne">Glândula Venenosa</option>
            <option value="skillTwo">Concentração Enérgica</option>
            <option value="skillThree">Concentração</option>
          </select>
          <img id="skills" className="w-72 mt-6" src={imgSkill} />
        </aside>
      </div>
    </main>
  );
}
