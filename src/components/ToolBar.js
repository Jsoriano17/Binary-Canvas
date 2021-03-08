import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SketchPicker } from 'react-color';

const ToolBar = ({changeColor}) => {
    const [background, setBackground] = useState('#000000')

    const handleChangeComplete = (color) => {
        setBackground(color.hex)
        changeColor(color.hex)
    };

    return (
        <Container>
            <HomeIcon as={Link} to={"/"}/>
            <SketchPicker 
                color = { background }
                onChangeComplete = { handleChangeComplete }
            />
        </Container>
    )
}

export default ToolBar

const Container = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    align-items: center;
    background: grey;
    padding: 0 1%;
`

const HomeIcon = styled.div`
   width: 70%;
   height: 7%;
   background: white;
   border: 1px dashed grey;
   cursor: pointer;
`