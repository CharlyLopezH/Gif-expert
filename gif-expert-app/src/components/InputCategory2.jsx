//Alternativa a la opción de mandar la función al hijo
//En este ejercicio el hijo emite información al padre, veamos cómo

import { useState } from "react";

//Recibimos la función (desestructurada)
export const InputCategory2 =({onNewCategory})=>{
    
    const [inputValue,setInputValue]=useState('');

    const onInputchange = ({target}) => {        
        setInputValue(target.value);
    }

    //** Aquí vemos como simplemente se ejecuta la función con el valor que requiere ésta (definida en el padre) */
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.length < 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    
    return(
        <>
        <form onSubmit={onSubmit}>
        <h4>Componente: {`<`}InputCategory{`>`} </h4>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value= {inputValue}
            onChange={onInputchange}
        />
        </form>
        </>
    );
}