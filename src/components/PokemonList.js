import React from 'react'

const PokemonList = ({list}) => {
  return (
    <div className='flex flex-row justify-center flex-wrap md:w-4/12 mx-auto'>
        {list.map((pokemon,index) => (
            <div className= "flex flex-col w-40 h-40 bg-black m-2 rounded-lg text-white justify-center items-center" key= {index}>
               <img className="w-24 h-24 object-contain"src={pokemon.url} alt={pokemon.name}/>
               <p className='text-center'>{pokemon.name}</p>
            </div>
        ))}
    </div>
  )
}

export default PokemonList