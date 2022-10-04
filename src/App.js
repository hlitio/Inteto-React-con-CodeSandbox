import "./styles.css";

const AgarrarPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default function App() {
  AgarrarPokemon();
  return <></>;
}
