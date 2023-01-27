import { useState } from "react";
//Este componente agrega información a un arreglo (lista de valores prestablecida)
//
export const AddCategoryAlt = (props) => {
  //Manda llamar setCategories
  //console.log('Aquí voy...')
  const [inputValue, setInputValue] = useState("");

  //Función para controlar el cambio en el input text; sólo que usando la desestructuración del target
  // const onInputChange=({target})=>{
  //     console.log(`Valor a Insertar: ${target.value}`);
  //     setTexto(target.value);
  // };

  const onHandlerSubmit = (event) => {
    event.preventDefault();
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  const onClickHandler = (e) => {
    //if (event.target.value.length <=0) return;
    console.log(`Texto a Insertar Categoría: ${e}`);
    props.AddCategory(inputValue);
    //console.log("Eventos del padre?",event);
    //setTexto(event.target.value)
    //setTexto(categories=>[texto, ...categories]);
  };

  //Controla los cambios en el input pero usando "event"
  //Cada que se teclea un caracter se activa
  const onInputChanged = (event) => {
    console.log(`Insertaré: ${event.target.value}`);
    setInputValue(event.target.value);
  };

  //En la implementación de la función, vamos a recibir ese argumento-parámetro, para dentro de ella
  //tener acceso a las cosas que nos manda y nos da acceso; puede ser algo especifico o puede ser algo más general que estará a disposición del programador...
  //Nota "ev", puede ser cualquier literal; sin embargo se utiliza mucho event,
  //por costumbre y por dejar en claro que lo que nos interesa son los eventos de ese objeto del DOM
  const pruebaFuncion = (ev) => {
    console.log(ev);
  };

  return (
    <form onSubmit={(event) => onHandlerSubmit(event)}>
      <input
        type={"text"}
        placeholder={"Buscar gif..."}
        value={inputValue}
        onChange={onInputChanged}
      />
      <p />
      <button onClick={onClickHandler}>Insertar categoria</button>
    </form>
  );
};
