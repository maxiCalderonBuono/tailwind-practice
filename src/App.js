import PokemonList from "./components/PokemonList";
import {pokelist} from "./data";


function App() {
  return (
    <div className= "h-full text-white bg-zinc-800">
      <h1 className="py-4 text-2xl font-bold text-center ">
        Lista Simple
      </h1>
      <PokemonList list={pokelist}/>
    </div>
  );
}

export default App;
