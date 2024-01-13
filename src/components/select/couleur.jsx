export default function SelectCouleur() {
    return (
        <select className="select select-bordered w-full">
            <option disabled selected>pick a color</option>
            <option>red</option>
            <option>blue</option>
            <option>green</option>
        </select>
    );
}