import React from 'react';
import useFectchGifs from '../hooks/useFectchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({categoria}) => {

   const {images , isLoading}=useFectchGifs(categoria)


    return (
    <>
        <h2>{categoria}</h2>
        {
            isLoading && <h3>cargando...</h3>
        }
        <div className='card-grid'>
            {
                images.map(({id,title ,url}) =>
                <GifItem key={id} title={title} url={url}/>    
               )
            }
        </div>
    </>
    )
}

