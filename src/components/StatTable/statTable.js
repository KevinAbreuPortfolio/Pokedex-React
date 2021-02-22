import React from 'react'
import { Bar } from './statBarElements'

const StatTable = (props) => {
    return (
        <>     
          <table>
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
                  <td>Sp.Attack</td>
                  <td>{props.spatk}</td>
                  <td><Bar stat={props.spatk}/></td>
                </tr>
                <tr>
                  <td>Sp.Defense</td>
                  <td>{props.spdef}</td>
                  <td><Bar stat={props.spdef}/></td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>{props.speed}</td>
                  <td><Bar stat={props.speed}/></td>
                </tr>
              </tbody>
          </table>
        </>
    )
}

export default StatTable