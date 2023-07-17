import './cursor.css'
import useCursorPosition from '../../Hooks/useCursor'

const DotCursor = () => {

    const {x,y} = useCursorPosition()

    return (
        <>
            {/* <div className="cover"> */}
            <div className='ring' style={{left: `${x}px`, top: `${y}px`}}></div>
            <div className='dot' style={{left: `${x}px`, top: `${y}px`}}></div>
            {/* </div> */}
        </>
    )
}

export default DotCursor