import React, {useState,useEffect} from 'react'; 
import {Route,Switch} from 'react-router-dom';
import Axios from 'axios';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [species,setSpecies] = useState();
  const [hp,setHp] = useState();
  const [atk,setAtk] = useState();
  const [def,setDef] = useState();
  const [spatk,setSpatk] = useState();
  const [spdef,setSpdef] = useState();
  const [speed,setSpeed] = useState();
  const [image,setImage] = useState();

  const getPokemon = () =>{
    let dexNum = Math.floor(Math.random() * 899);
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${dexNum}`).then((response)=>{
      // console.log(response);
      // setSpecies(response.data.name);
      setSpecies(capitalizeFirstLetter(response.data.name));
      setHp(response.data.stats[0]["base_stat"]);
      setAtk(response.data.stats[1]["base_stat"]);
      setDef(response.data.stats[2]["base_stat"]);
      setSpatk(response.data.stats[3]["base_stat"]);
      setSpdef(response.data.stats[4]["base_stat"]);
      setSpeed(response.data.stats[5]["base_stat"]);
      setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroPad(dexNum,3)}.png`)
    })
    
  }
  return (
    <>
      <h1>Testing</h1> <button onClick={getPokemon}>Im feeling lucky</button>
      <h1>{species}</h1>
      <h1>Hp:{hp}</h1>
      <h1>Attack{atk}</h1>
      <h1>Defense:{def}</h1>
      <h1>Special Attack:{spatk}</h1>
      <h1>Special Defense:{spdef}</h1>
      <h1>Speed:{speed}</h1>
      <img src={image}></img>

    </>
  );
}

export default App;
