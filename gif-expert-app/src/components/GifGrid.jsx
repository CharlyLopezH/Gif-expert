import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  //Aquí va una función o rutina HTTP que se comunicará con un API
  const [images, setImages] = useState([]);

  //*1 Entonces sacamos la implementación del useEfect para poder la hacer asícrona
  //Se hace el llamado a la función que tiene el url (externo) con la información que necesitamos
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

   useEffect(() => {
     //Nota, dentro de este efecto secundario no se puede implementar async, es por eso que se hace el llamado a la función
     getImages(category);
   }, []);


  return (
    <>
      <h3>{category}</h3>  
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
