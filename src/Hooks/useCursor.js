import {useState, useEffect} from 'react'

const useCursorPosition = () => {

    const [cursorPosition, setCursorPosition] = useState({x: null, y: null})

    useEffect(() => {
        const mouseHandler = (event) => {
            const { clientX, clientY } = event
            setCursorPosition({x: clientX, y: clientY})            
        }
        document.addEventListener('mousemove', mouseHandler)
        return () => {document.removeEventListener('mousemove', mouseHandler)}
    })

    return cursorPosition
}

export default useCursorPosition