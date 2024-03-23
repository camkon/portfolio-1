import {useState, useEffect} from 'react'

var dot = document.querySelector(`.dot`)

export const handleMouseEnter = () => {
    console.log(dot)
    dot.style.height = '10rem'; dot.style.width = '10rem';
    dot.style.border = '1px solid #6200ff'; dot.style.background = 'transparent';
}
export const handleMouseLeave = () => {
        dot.style.height = '10px'; dot.style.width = '10px';
        dot.style.border = 'none'; dot.style.background = '#6200ff';
}

const useCursorPosition = () => {

    const [cursorPosition, setCursorPosition] = useState({x: null, y: null})
    const overlay = document.documentElement
    const gradient_overlay = document.querySelectorAll(`.gradient-overlay`)


    useEffect(() => {
        const mouseHandler = (event) => {
            const { clientX, clientY } = event
            setCursorPosition({x: clientX, y: clientY})

            gradient_overlay.forEach((item) => {
                let position = item?.getBoundingClientRect()
                item?.style.setProperty('--x', (clientX - position.left) + 'px')
                item?.style.setProperty('--y', (clientY - position.top) + 'px')
            })

            overlay.style.setProperty('--x', clientX + 'px')
            overlay.style.setProperty('--y', clientY + 'px')
        }
        document.addEventListener('mousemove', mouseHandler)
        return () => {document.removeEventListener('mousemove', mouseHandler)}
    })

    return cursorPosition
}

export default useCursorPosition