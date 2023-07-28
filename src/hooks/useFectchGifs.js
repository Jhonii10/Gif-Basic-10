import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFectchGifs = (categoria) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       getGifs(categoria).then( newImages => setImages(newImages) )
       setIsLoading(false)
    }, []);

   

  return{
    images:images,
    isLoading: isLoading,
  }
}

export default useFectchGifs
