import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Test = () => {
  let { id } = useParams();
  const [species,setSpecies] = useState();
  const [num,setNum] = useState();
  const [hp,setHp] = useState();
  const [atk,setAtk] = useState();
  const [def,setDef] = useState();
  const [spatk,setSpatk] = useState();
  const [spdef,setSpdef] = useState();
  const [speed,setSpeed] = useState();
  const [image,setImage] = useState();

  (() =>{
    // let dexNum = Math.floor(Math.random() * 899);
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response)=>{
      // console.log(response);
      // setSpecies(response.data.name);
      setSpecies(capitalizeFirstLetter(response.data.name));
      setNum(response.data.id);
      setHp(response.data.stats[0]["base_stat"]);
      setAtk(response.data.stats[1]["base_stat"]);
      setDef(response.data.stats[2]["base_stat"]);
      setSpatk(response.data.stats[3]["base_stat"]);
      setSpdef(response.data.stats[4]["base_stat"]);
      setSpeed(response.data.stats[5]["base_stat"]);
      setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroPad(id,3)}.png`)
    })
    // console.log("test");
  })()
  return (
    <div>
      <h3>ID: {id}</h3>
      <h1>{species}</h1>
      <h1>{hp}</h1>
      <h1>{atk}</h1>
      <h1>{def}</h1>
      <h1>{spatk}</h1>
      <h1>{spdef}</h1>
      <h1>{speed}</h1>

    </div>
  );
}

export default Test;
