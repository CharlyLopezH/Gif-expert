import { useState } from "react"

export const UseStateExample = () => {

    //Definición del Hook useState
    const [texto, setTexto] = useState('Valor por Defecto')    

    const onClickEvent = (e) => {
        console.log(texto);
        setTexto(texto.toLocaleUpperCase());        
    }

    const onChangeEvent = (e) => {        
        console.log(e.target.value);
        setTexto(e.target.value);
        //alert(texto);
    }

    return (
        <>
        <h4>
            Ejemplo básico del Use State
        </h4>
        {/* El input dispara un evento en el que cada que cambia algo se actualiza el texto gracias al use state */}
        <input
         type={'text'}            
         onChange={(e)=>{onChangeEvent(e)}}     
        >
        </input>
        <p></p>
        <button
        onClick={(e)=>{onClickEvent(e)}}
        > Cambiar texto 
        </button>
        <p></p>
        <label>
            Valor del Input: {texto}
        </label>


        </>
    )
}
