import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
//import { AddCategoryAlt } from "./components/AddCategoryAlt";
import { GifGrid } from "./components/GifGrid";
import { InputCategory2 } from "./components/InputCategory2";
import { UseStateExample } from "./components/UseStateExample";

export const GifExpertApp = () => {

    //Declaración del arreglo inicial que contiene los valores que se muestran al iniciar la página
    const [categories, setCategories]=useState([]);
    //console.log(categories);

    //Función que agrega una categoría al arreglo
     const OnAddCategory = (NewCategory) => {
        //console.log(NewCategory);        
        //if (categories.includes(NewCategory)) alert (`Categoria ${NewCategory.trim()} ya está en la lista`);                
        if (categories.includes(NewCategory)) return;      
        setCategories([NewCategory,...categories]);
         //Agregar una nueva categoría                   
     }
    
return (
    <>    
    {/*1 SECCIÓN TITULO*/}
    <h1>Gif Expert App -Tutorial React-</h1>

    {/*2 SECCIÓN INPUT */}    
     {/* 
     llamado opción Ej 1
     <AddCategory 
    //setCategories={(event)=>setCategories(event)}
    //creamos la propiedad y la mandamos al coponente hijo (se recibirá como parámetro desesctructurandola)
    onHandlerNewCategory = {(event)=>onHandlerNewCategory(event)}
    />   */}
    
    {/* Llamado opción 2 
    Comunicando componentes, enviando una propiedad
    */}
    {/* <InputCategory setCategories={setCategories}/>  Ejemplo de Enviar Funciones al componente hijo*/}
    
    {/* Ejemplo de emitiendo evento al padre  (Hijo->Padre)*/}
    <InputCategory2 onNewCategory={OnAddCategory} />

    {/* 3 imprimir LISTADO DE ELEMENTOS en el arreglo */}                
        {/* Despliega listado de Categorias */}
         {categories.map(category=>{
            return (
                <GifGrid  key={category}  category={category}
                />
            );
        })}
    </>
)
}