import styled from 'styled-components'

export const Stats = styled.table`
width:100%;
height:100%;
border-collapse:collapse;
tbody tr{
    height:15%;
}
tbody tr td{
    height:100%;
}
tbody tr td:first-child{
    width:15%;
}
tbody tr td:nth-child(2){
    width:5%;
    text-align:center;
}
tbody tr td:last-child{
    width: 100%;
}
`