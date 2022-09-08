
import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Content/Home';
import Layout from './Content/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




















// import react, { useState } from "react";
// import "./index.css";

// import SunEditor from "suneditor-react";
// import "../node_modules/suneditor/dist/css/suneditor.min.css";
// import RTE from "./Components/Rte/suneditor";
// import RTETwo from "./Components/Rte/suneditorTwo";
// import { useEffect } from "react";


// const App = () => {

//   const [value, setValue] = useState('')
//   const [data, setData] = useState([])
//   const [update, setUpdate] = useState(false)

//   const updateRte = () => {
//     setData([...data, value])
//     setUpdate(true)
//   }

//   useEffect(() => {
//     console.log(data);
//   }, [data])

//   return (
//     <div className="app">
//       <div className="container">
//         <RTE setValue={setValue}/>
//         <div className="button-container">
//           <button onClick={updateRte} style={{
//             background: update ? 'green' : 'grey'
//           }}>update</button>
//         </div>
//         {
//           update && <RTETwo value={data}/>
//         }
//       </div>
//     </div>
//   );
// };

// export default App;