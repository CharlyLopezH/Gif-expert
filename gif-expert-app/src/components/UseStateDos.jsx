import { useState } from "react";

export const UseStateDos = (props) => {
//Ejemplo de manipulación del estado del padre desde este componente (hijo)
//console.log(props.e);

const [inputValue, setInputValue]=useState('');

const onChangeInputValue=(e)=>{
console.log(e.target.value);
setInputValue(e.target.value);
}

const onButtonClick =() => {    
    console.log(`click on Button ${inputValue}`);   
    //Esta función está en el componente padre y la estoy llamado por medio de props 
    props.onCambiarTexto(inputValue.trim());

}

    return(
        <>             
        <p> === Estamos dentro del componente Hijo ===</p>
        <h4>{props.mensaje}</h4>    
        <p></p>
        <h2>{props.TextoParametro}</h2>
        <p>            
        </p>
        <input
        type={'text'}
        value={inputValue}
        onChange={(e)=>onChangeInputValue(e)}
        >
        </input>
        <p></p>
        <button
        onClick={onButtonClick}
        >Presiona Aquí</button>
        </>
    );
}
