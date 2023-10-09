import React,{useState} from 'react'


export default function Textarea() {


  // const btnclick = () =>{
  //   let newtext  = text.toUpperCase();
  //   setText(newtext);
  // }
  function btnclick(){
        let newtext  = text.toUpperCase();
        setText(newtext);
  }
  const inputchange = (event) =>{
    setText(event.target.value);
    console.log(event.target.value)
  }
  const [text,setText]=useState('Enter Name');
  return (

    <div>
        {/* <input type="text" name="empname" id="txtempname" onChange={inputchange} value={text} /> */}
        <textarea onChange={inputchange} value={text} ></textarea>
        <button className="btn btn-primary" id='btnclick' onClick={btnclick}>To Upper</button>
    </div>
  )

 
}
