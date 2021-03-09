import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SketchPicker } from 'react-color';

const ToolBar = ({changeColor,changeBrushShape,changeBrushSize,color,brushSize}) => {
    const [background, setBackground] = useState('#000000')

    const handleChangeComplete = (color) => {
        setBackground(color.hex)
        changeColor(color.hex)
    };

    const handleChange = (e) => {
        changeBrushSize(e.target.value)
        e.preventDefault()
    }

    return (
        <Container>
            <SketchPicker 
                color = { background }
                onChangeComplete = { handleChangeComplete }
            />
            <ScaleBrushBtn>
                <BrushSize onClick={() => changeBrushSize(40)} style={{width: '60px', height: '60px'}}>
                    <Cirlce style={{width: '50px', height: '50px', background: color}}/>    
                </BrushSize>
                <BrushSize onClick={() => changeBrushSize(20)} style={{width: '50px', height: '50px'}}>
                    <Cirlce style={{width: '40px', height: '40px', background: color}}/>
                </BrushSize>
                <BrushSize onClick={() => changeBrushSize(5)} style={{width: '40px', height: '40px'}}>
                    <Cirlce style={{width: '30px', height: '30px', background: color}}/>
                </BrushSize>
            </ScaleBrushBtn>
            <StyledForm onSubmit={e => { e.preventDefault(); }}>
                <label>Brush Size:</label>
                <StyledInput type="number" onChange={handleChange} placeholder={`${brushSize}`}/>
                <p>px</p>
            </StyledForm>
        </Container>
    )
}

export default ToolBar

const Container = styled.div`
    width: 15%;
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
    width: 75%;
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    margin-top: 8%;

`

const StyledForm = styled.form`
    width: 75%;
    display: flex; 
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    margin-top: 5%;

    p {
        color: white;
        margin-left: 2%;
        font-size: 1vw;
    }

    label {
        font-size: 1vw;
        color: white;
        margin-right: 4%;
    }
`

const StyledInput = styled.input `
    width: 20%;

    &:focus { 
        outline: none;
        border-color: #9ecaed;
        box-shadow: 0 0 5px #9ecaed;
    }
`
const BrushSize = styled.div`
    background: white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &: hover {
        -webkit-box-shadow:0 0 20px white; 
        -moz-box-shadow: 0 0 20px white; 
        box-shadow:0 0 20px white;
    }
`

const Cirlce = styled.div`
    border-radius: 50%;
`