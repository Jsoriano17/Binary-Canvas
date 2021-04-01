import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CanvasBoard = ({color,brushSize, canvasSize}) => {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [restoreArray, setRestoreArray] = useState([])
    const [arrIdx, setArrIdx] = useState(-1)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvasSize.width
        canvas.height = canvasSize.height
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.lineJoin = "round"
        context.strokeStyle = 'black'
        context.lineWidth = 5
        contextRef.current = context
    }, [canvasSize])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.strokeStyle = color
        contextRef.current.lineWidth = brushSize
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX,offsetY)
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
        setRestoreArray([...restoreArray, contextRef.current.getImageData(0, 0 ,canvasSize.width, canvasSize.height)])
        setArrIdx(arrIdx + 1)
        console.log(restoreArray)
    }

    const draw = ({nativeEvent}) => {
        if (!isDrawing) {
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }

    const undoLast = () => {
        if ( arrIdx <= 0 ) {
            return
        }

        let oldArr = [...restoreArray]
        oldArr.pop()
        setArrIdx(arrIdx - 1)
        setRestoreArray(oldArr)
        contextRef.current.putImageData(restoreArray[arrIdx], 0, 0)
        console.log(restoreArray)
    }

    return (
        <Container>
            <StyledCanvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing} 
                onMouseMove={draw}
                ref={canvasRef}
            />
            <button onClick={() => undoLast()}>
                undo
            </button>
        </Container>
    )
}

export default CanvasBoard

const Container = styled.div`
    width: 85%;
    height: 100%;
`

const StyledCanvas = styled.canvas`
    background: white;
    cursor: crosshair;
`