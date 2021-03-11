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
  //info1
  const [species,setSpecies] = useState();
  const [num,setNum] = useState();
  const [hp,setHp] = useState();
  const [atk,setAtk] = useState();
  const [def,setDef] = useState();
  const [spatk,setSpatk] = useState();
  const [spdef,setSpdef] = useState();
  const [speed,setSpeed] = useState();
  const [image,setImage] = useState();
  const [type1,setType1] = useState();
  const [type2,setType2] = useState();
  const [ability,setAbility] = useState();

  
  //info2
  const [flavText,setFlavText] = useState();


    const data1 = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data2 = fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

    Promise.all([data1,data2]).then(values=> {
      return Promise.all(values.map(r=>r.json()))
    }).then(([info1,info2])=>{
      //info1
      setSpecies(capitalizeFirstLetter(info1.name));
      setNum(info1.id);
      setHp(info1.stats[0]["base_stat"]);
      setAtk(info1.stats[1]["base_stat"]);
      setDef(info1.stats[2]["base_stat"]);
      setSpatk(info1.stats[3]["base_stat"]);
      setSpdef(info1.stats[4]["base_stat"]);
      setSpeed(info1.stats[5]["base_stat"]);
      setImage(info1.sprites.other["official-artwork"]["front_default"]);
      setType1(info1.types[0].type.name);
      try{
        setType2(info1.types[1].type.name);
      }
      catch(err){
        console.log(err);
      }
      //info2
      setFlavText(info2.flavor_text_entries[0].flavor_text)
      

    })
      // .catch(err => console.log(err));
  // (() =>{
  //   // let dexNum = Math.floor(Math.random() * 899);
  //   const zeroPad = (num, places) => String(num).padStart(places, '0')
  //   Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response)=>{
  //     // console.log(response);
  //     // setSpecies(response.data.name);
  //     setSpecies(capitalizeFirstLetter(response.data.name));
  //     setNum(response.data.id);
  //     setHp(response.data.stats[0]["base_stat"]);
  //     setAtk(response.data.stats[1]["base_stat"]);
  //     setDef(response.data.stats[2]["base_stat"]);
  //     setSpatk(response.data.stats[3]["base_stat"]);
  //     setSpdef(response.data.stats[4]["base_stat"]);
  //     setSpeed(response.data.stats[5]["base_stat"]);
  //     setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroPad(id,3)}.png`)
  //   })
  //   // console.log("test");
  // })()
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
      <Accordian name="Description">
        <p>{flavText}</p>
      </Accordian>
      <Accordian name="Base Stats">
        <StatTable hp={hp} atk={atk} def={def} spatk={spatk} spdef={spdef} speed={speed}/>
      </Accordian>
      <h1>{type1}</h1>
      <h1>{type2}</h1>
      <h1>{ability}</h1>

      
        
      

    </>
  );
  
}

export default Test;
