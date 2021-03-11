import React from 'react'
import { Bar } from './statBarElements'
import {Stats} from './statTableElements'

const StatTable = (props) => {
    return (
        <Stats>     
              <tbody>
                <tr>
                  <td>HP</td>
                  <td>{props.hp}</td>
                  <td><Bar stat={props.hp}/></td>
                </tr>
                <tr>
                  <td>Attack</td>
                  <td>{props.atk}</td>
                  <td><Bar stat={props.atk}/></td>
                </tr>
                <tr>
                  <td>Defense</td>
                  <td>{props.def}</td>
                  <td><Bar stat={props.def}/></td>
                </tr>
                <tr>
                  <td>Sp.Atk</td>
                  <td>{props.spatk}</td>
                  <td><Bar stat={props.spatk}/></td>
                </tr>
                <tr>
                  <td>Sp.Def</td>
                  <td>{props.spdef}</td>
                  <td><Bar stat={props.spdef}/></td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>{props.speed}</td>
                  <td><Bar stat={props.speed}/></td>
                </tr>
              </tbody>
        </Stats>
    )
}

export default StatTable