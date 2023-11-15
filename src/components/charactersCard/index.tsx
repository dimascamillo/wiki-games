import card from "../../assets/call-of-dragons/category.jpg";

export function CharactersCard() {
  return (
    <div className="w-96 relative">
      <figure className="w-full">
        <img src={card} className="w-full object-cover rounded-md" />
      </figure>
      <span className="absolute bottom-2 left-2">Call of Dragons</span>
    </div>
  );
}
