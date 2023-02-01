//import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // //Aquí va una función o rutina HTTP que se comunicará con un API 
  
  //Llamando al hookpersonalizado
  const {images, isLoading} = useFetchGifs(category);
  console.log({isLoading});

  return (
    <>
      <h3>{category}</h3>  
      {isLoading && (<h4>Cargando...</h4>)}
      <div className="card-grid">
      {
          images.map((imgn)=>(
            // <li key={id}>{title}</li>
            <GifItem key={imgn.id} 
            // imgn={imgn}
            {...imgn}            
            />
          ))
      }
      </div>
    </>
  );
};
