import { useState } from "react";

export const InputCategory =({setCategories})=> {

  const [inputText,setInputText]=useState('Hola');

  const OnChangeInputText=({target})=>{
    console.log(target.value);
    setInputText(target.value.trim())
  }

  const onHandlerSubmit = (event) => {
    event.preventDefault();
    //console.log(inputText.length()); 
    //Cuando no se emite el evento al padre, aquí se ejecuta la función del useState
    setCategories(catgr=>{
      return [inputText, ...catgr];
    });
    
  }

  return(
    <form onSubmit={(event)=> onHandlerSubmit (event)}>
    <div>
      <h3>Input</h3>
      <input 
      type={"text"}
      placeholder="Ingresar texto..."
      onChange={(event)=>OnChangeInputText(event)}
      />
    </div>
    </form>
  )
}