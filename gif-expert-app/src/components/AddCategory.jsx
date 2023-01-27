import { useState } from 'react';

export const AddCategory =({onHandlerNewCategory}) => { //Manda llamar setCategories
    //console.log('Aquí voy...')
    const [inputValue,setInputValue] = useState('');
    
    const onInputChange=({target})=>{
        console.log(`Valor a Insertar: ${target.value}`);
        setInputValue(target.value);
    };

    const onSubmit =(event)=> {
        event.preventDefault();        
        console.log(inputValue);        
        if (inputValue.length <= 1) return;
        //setCategories(categories=>[inputValue, ...categories]);     
        onHandlerNewCategory(inputValue.trim());   
        setInputValue('');
    };

    return (
        <>
        <form onSubmit={onSubmit}>        
        <input
         type={'text'}
         placeholder={'Buscar...'}
         value={inputValue}
         onChange={onInputChange}
        />
        </form>
        </>
    )
}