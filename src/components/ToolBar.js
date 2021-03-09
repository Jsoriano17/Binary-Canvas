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
            <SketchPicker 
                color = { background }
                onChangeComplete = { handleChangeComplete }
            />
            <ScaleBrushBtn>
                <BrushSize style={{width: '80px', height: '80px'}}/>
                <BrushSize style={{width: '60px', height: '60px'}}/>
                <BrushSize style={{width: '40px', height: '40px'}}/>
            </ScaleBrushBtn>
        </Container>
    )
}

export default ToolBar

const Container = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    background: black;
    opacity: 0.8;
    padding-top: 1%;
`

const ScaleBrushBtn = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    margin: 8% 0;
`

const BrushSize = styled.div`
    background: white;
    width: 50px;
    height: 50px;
`