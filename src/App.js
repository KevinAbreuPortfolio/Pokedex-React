import React from 'react'; 
import {Route,Switch} from 'react-router-dom';
import Home from './pages/home/index'
import Test from './pages/test/index'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Test} />

      </Switch>
    </>
  );
}

export default App;


//USE THIIIIIS
// const pokemon1 = fetch('https://pokeapi.co/api/v2/pokemon-species/898');
// const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon-species/151');

// Promise.all([pokemon1,pokemon2]).then(values=> {
// 	return Promise.all(values.map(r=>r.json()))
// }).then(([mon1,mon2])=>{
// 	console.log(mon1.base_happiness)
// 	//expected output: 100
// 	console.log(mon2.capture_rate)
// 	//expected output: 45
// });

//USE THIS TOO!
// const array1 = [
// {ability:{name:"You"}},
// {ability:{name:"did"}},
// {ability:{name:"it"}},
// ];

// array1.forEach(element => console.log(element.ability.name));

// expected output: "You"
// expected output: "did"
// expected output: "it"