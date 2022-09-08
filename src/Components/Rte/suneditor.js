import React, { useEffect, useState } from 'react';
import SunEditor from 'suneditor-react';

import '../../../node_modules/suneditor/dist/css/suneditor.min.css'

const RTE = ({setValue}) => {

  const [des, setDes] = useState('')

  useEffect(() => {
    setValue(des)
    // console.log(des);
  },[des])

  // useEffect(() => {
  //   console.log('question: ',value);
  // },[value])

  return(
    <SunEditor 
    height="12rem"
    placeholder="Enter Description. Make use of full screen mode while typing"
    setDefaultStyle="font-family: firacode; font-size: 1rem; letter-spacing: -1px"
    setOptions={{
      buttonList:[
        ['table', 'link', 'image', 'video', 'audio'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['fullScreen', 'showBlocks'],
      ]
    }}
    // setContents={value}
    // appendContents={value}
    onImageUpload={(e) => {
      console.log(e);
    }}
    onChange={e => {setDes(e)}}
  />
  )
}

export default RTE;