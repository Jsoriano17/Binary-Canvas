import React, { useState } from 'react'
import styled from 'styled-components';
import CanvasBoard from './CanvasBoard';
import ToolBar from './ToolBar';

const ArtPage = () => {
    const [currentColor, setCurrentColor] = useState('#000000')

    const changeColor = (newColor) => {
      setCurrentColor(newColor)
    }
    
    return (
        <Container>
            <ToolBar changeColor={changeColor}/>
            <CanvasBoard color={currentColor}/>
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
