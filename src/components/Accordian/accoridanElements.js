import styled from 'styled-components'


export const Container = styled.div`
width:500px;
height: auto;
`

export const Button = styled.button`
all:unset;
cursor: pointer;
width:100%; 
height: 50px;
background-color: #DDDDDD;
`
export const Content = styled.div`
width:100%;
transition: max-height 1s ease-in-out;
max-height: ${props => props.height};
overflow-y:hidden;
background-color: #CCCCCC;
/* padding:5px; */
`