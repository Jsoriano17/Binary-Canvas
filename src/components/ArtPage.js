import React, { useState } from 'react'
import styled from 'styled-components';
import CanvasBoard from './CanvasBoard';
import ToolBar from './ToolBar';

const ArtPage = () => {
    const [currentColor, setCurrentColor] = useState('#000000')
    const [currentBrushSize, setCurrentBrushSize] = useState(5)
    const [currentBrushShape, setCurrentBrushShape] = useState('round')
    const [canvasSize, setCanvasSize] = useState({width: window.innerWidth * 2, height: window.innerHeight * 2})

    const changeColor = (newColor) => {
      setCurrentColor(newColor)
    }

    const changeBrushSize = (newSize) => {
        setCurrentBrushSize(newSize)
    }

    const changeBrushShape = (newShape) => {
        setCurrentBrushShape(newShape)
    }

    const clearCanvas = () => {
        setCanvasSize({width: window.innerWidth * 2, height: window.innerHeight * 2})
    }
    
    return (
        <Container>
            <ToolBar 
                changeColor={changeColor} 
                changeBrushSize={changeBrushSize}
                changeBrushShape={changeBrushShape}
                color={currentColor}
                brushSize={currentBrushSize}
                clearCanvas={clearCanvas}
            />
            <CanvasBoard color={currentColor} brushSize={currentBrushSize} canvasSize={canvasSize}/>
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
