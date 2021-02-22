import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {Box,Bar} from '../../components/StatTable/statBarElements'
import {Accordian} from '../../components/Accordian/accordian'
import StatTable from '../../components/StatTable/statTable'



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
    <>
      {/* <div> 
        <div>Poke Pic</div>
        <div>Type 1</div>
        <div>Type 2</div>
      </div>
      <Box>
        <Bar stat={hp}/>
        <Bar stat={atk}/>
        <Bar stat={def}/>
        <Bar stat={spatk}/>
        <Bar stat={spdef}/>
        <Bar stat={speed}/>
      </Box>
      <div>
        <div>Ability 1</div>
        <div>Ability 2</div>
      </div>
      <div>
        <div>Dex No</div>
        <div>Height</div>
        <div>Weight</div>
        <div>Description</div>
      </div> */}
      <Accordian name="Test">
        Dolor eu culpa ea laboris. Excepteur sunt et eu ipsum officia labore sit quis nisi. 
        Anim nisi eiusmod duis laboris pariatur pariatur. Sunt sunt nulla esse ullamco eu non
        esse dolor aliquip nostrud ullamco. Reprehenderit velit enim id dolor. Laborum proident 
        velit excepteur dolore aute id non id et anim eiusmod est in excepteur. Est consequat irure 
        anim quis officia sunt tempor eiusmod fugiat duis enim nostrud.
      </Accordian>
      <Accordian name="Test2">
        <StatTable hp={hp} atk={atk} def={def} spatk={spatk} spdef={spdef} speed={speed}/>
      </Accordian>
      

    </>
  );
}

export default Test;
