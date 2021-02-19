import React,{useState} from 'react'
import {Container,Button,Content} from './accoridanElements'



export const Accordian = (props) => {
    const [height,setHeight] = useState(0);
    return (
        <>
            <Container>
                <Button onClick={()=> height? setHeight(0): setHeight("auto")}>
                    {props.name}
                </Button>
                <Content height={height}>
                    {props.children}
                </Content>
            </Container>
        </>
    )
}

// export default Accordian;