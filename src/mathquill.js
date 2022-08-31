import react, { useState, useEffect } from 'react'
import { addStyles, EditableMathField } from "react-mathquill"
import './mathquill.scss'

// addStyles();

const MathQuill = () => {

  const [latex, setLatex] = useState('')

  return (
      <EditableMathField 
        className='mathquill-container'
        latex={latex}
        onChange={(e) => {
          setLatex(e.latex())
        }}
      />
  )
}

export default MathQuill;