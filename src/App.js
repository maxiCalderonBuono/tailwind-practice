import PokemonList from "./components/PokemonList";
import {pokelist} from "./data";


function App() {
  return (
    <div className="text-white bg-zinc-800 h-screen">
      <h1 className="text-center py-4 text-2xl font-bold ">
        Lista Simple
      </h1>
      <PokemonList list={pokelist}/>
    </div>
  );
}

export default App;
