import styled from 'styled-components'

export const Bar = styled.div`
width: calc((${props=>props.stat}/255)*100%);
background-color:hsl(calc((${props=>props.stat}/255)*180),100%,50%);
height: 100%;
transition:width 1s,background-color 1s;
`

