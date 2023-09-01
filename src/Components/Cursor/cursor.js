import './cursor.css'
import useCursorPosition from '../../Hooks/useCursor'

const DotCursor = () => {

    const {x,y} = useCursorPosition()

    return (
        <>
            <div className='ring ring-1' style={{left: `${x}px`, top: `${y}px`}}></div>
            <div className='ring ring-2' style={{left: `${x}px`, top: `${y}px`}}></div>
            <div className='dot' style={{left: `${x}px`, top: `${y}px`}}></div>
            {/* <div className="overlay"></div> */}
        </>
    )
}

export default DotCursor