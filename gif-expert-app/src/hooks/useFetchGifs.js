import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//Implementación del usePersonalizado.
export const useFetchGifs =(category)=>{

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

   //*1 Entonces sacamos la implementación del useEfect para poder la hacer asícrona
  //Se hace el llamado a la función que tiene el url (externo) con la información que necesitamos
   const getImages = async () => {
     const newImages = await getGifs(category);
     setImages(newImages);
     setIsLoading(false);
     //console.log(isLoading);
   };

    useEffect(() => {
      //Nota, dentro de este efecto secundario no se puede implementar async, es por eso que se hace el llamado a la función
      getImages(category);
    }, []);

    return {
        images:images,
        isLoading: isLoading    }
}