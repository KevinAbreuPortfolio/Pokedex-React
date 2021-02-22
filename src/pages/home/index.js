import React, {useState,useEffect} from 'react'; 
import {Route,Switch,Link} from 'react-router-dom';
import Axios from 'axios';
import Test from '../test';
import {Box,Bar} from './homeElements'
import {PokeContainer,PokeImage,PokeInfo,Container} from '../home/homeElements'
import {PokeCard} from '../../components/PokeCard/pokeCard'
import GlobalStyle from './globalStyles'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Home() {
  const [species,setSpecies] = useState();
  const [num,setNum] = useState();
  const [hp,setHp] = useState();
  const [atk,setAtk] = useState();
  const [def,setDef] = useState();
  const [spatk,setSpatk] = useState();
  const [spdef,setSpdef] = useState();
  const [speed,setSpeed] = useState();
  const [image,setImage] = useState();
  let randNum = Math.floor(Math.random() * 899);

  const getPokemon = (number) =>{
    
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then((response)=>{
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
      setImage(response.data.sprites.other["official-artwork"]["front_default"]);
      // setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroPad(dexNum,3)}.png`)
    })
    // console.log(species);
  }
  
  const [value,setValue] = useState();
  
  return (
    <>
      <GlobalStyle />
      <h1>Testing</h1> 
      <input type="text" onChange={e => setValue(e.target.value)}></input>
      <button onClick={()=>getPokemon(randNum)}>Im feeling lucky</button>
      <button onClick={()=>getPokemon(value)}>Search</button>
      <PokeCard image={image}>
        <Box>
          {/* <Bar stat={hp}/>
          <Bar stat={atk}/>
          <Bar stat={def}/>
          <Bar stat={spatk}/>
          <Bar stat={spdef}/>
          <Bar stat={speed}/> */}
        </Box>
      </PokeCard>
      <Link to={`/${num}`}>More Details!</Link>
    </>
  );
}

export default Home;
