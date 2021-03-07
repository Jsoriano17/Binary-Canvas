import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CanvasBoard = () => {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.lineJoin = "round"
        context.strokeStyle = "#000000"
        context.lineWidth = 5
        contextRef.current = context
    }, [])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX,offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({nativeEvent}) => {
        if (!isDrawing) {
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }


    return (
         <StyledCanvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing} 
            onMouseMove={draw} 
            ref={canvasRef}
         />
    )
}

export default CanvasBoard

const StyledCanvas = styled.canvas`
    width: 100%;
    height: 100%;
    background: white;
`