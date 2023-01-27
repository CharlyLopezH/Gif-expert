import { useState } from "react";
import { UseStateDos } from "./components/UseStateDos";
import { UseStateExample } from "./components/UseStateExample";

export const EjemplosApp = () => {    

    const [texto, setTexto]=useState('Soy un Texto Cualquiera, en el componente raíz (padre)');    

    const CambiarTexto = (nuevoTexto)=> {
        console.log(`Estoy en el componente padre ${nuevoTexto}`)
        setTexto(nuevoTexto);
    }

    return (
        <>
        <h4>Bienvenido a la Galería de Ejemplos...</h4>        
        <p>
            Hola, {`Hola, ${texto}, Seré modificado desde un componente hijo `}            
        </p>
        <UseStateDos 
        mensaje={'Teclea algo y presiona el botón'}  
        onCambiarTexto = {(value)=> CambiarTexto(value)}
        />
        </>
    );
}