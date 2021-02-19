import styled from 'styled-components'

export const PokeContainer = styled.div`
width: 500px;
height: 500px;
display: flex;
flex-direction:column;
background-color:red;
`

export const PokeImage = styled.div`
background-color:blue;
background-image: url(${props => props.img});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width: 100%;
height: 50%;
`

export const PokeInfo = styled.div`
display:flex;
width:100%;
height: 50%;
background-color: green;
`