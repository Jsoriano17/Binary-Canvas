import React, { useState } from 'react'
import styled from 'styled-components';
import CanvasBoard from './CanvasBoard';
import ToolBar from './ToolBar';

const ArtPage = () => {
    const [currentColor, setCurrentColor] = useState('#000000')
    const [currentBrushSize, setCurrentBrushSize] = useState(5)
    const [currentBrushShape, setCurrentBrushShape] = useState('round')

    const changeColor = (newColor) => {
      setCurrentColor(newColor)
    }

    const changeBrushSize = (newSize) => {
        setCurrentBrushSize(newSize)
    }

    const changeBrushShape = (newShape) => {
        setCurrentBrushShape(newShape)
    }
    
    return (
        <Container>
            <ToolBar 
                changeColor={changeColor} 
                changeBrushSize={changeBrushSize}
                changeBrushShape={changeBrushShape}
                color={currentColor}
                brushSize={currentBrushSize}
            />
            <CanvasBoard color={currentColor} brushSize={currentBrushSize}/>
        </Container>
    )
}

export default ArtPage

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`
