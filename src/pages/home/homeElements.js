import styled from 'styled-components'

export const Box = styled.div`
width: 750px;
height: 500px;
display:flex;
flex-direction:column;
justify-content:space-around;
`

export const PokeContainer = styled.div`
width: 500px;
height: 500px;
display: flex;
flex-direction:column;
background-color:red;
`

export const PokeImage = styled.div`
background-image: ${props => props.img};
background-color:blue;
width: 100%;
height: 50%;
`

export const PokeInfo = styled.div`
display:flex;
width:100%;
height: 50%;
background-color: green;
`

export const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`