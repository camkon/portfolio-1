// import react, { useState, useEffect } from 'react'
// import { addStyles, EditableMathField, StaticMathField } from "react-mathquill"
// import './mathquill.scss'

// // addStyles();

// const MathQuill = () => {

//   const [latex, setLatex] = useState('')

//   useEffect(() => {
//     console.log(latex);
//   }, [latex])

//   return (
//     <div>
//       <EditableMathField 
//         className='mathquill-container'
//         latex={latex}
//         onChange={(e) => {
//           setLatex(e.latex())
//         }}
//       />
//       <br /><br />
//       <StaticMathField className='mathquill-static-container'>{latex}</StaticMathField>
//     </div>
//   )
// }

// export default MathQuill;