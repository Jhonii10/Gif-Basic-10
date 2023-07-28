import React, { useState } from 'react';
import {AddCategory , GifGrid} from './components/index.js';

const GifExpertApp = () => {

    // TODO: Implement app logic here.

    const [categorias, setCategorias] = useState(['one punch']);


    const onAddCategory = (newCategory)=>{

        if (categorias.includes(newCategory)) {
            return alert('ya existe: '+ newCategory)
        }

        // agrega un nueva categoria al arreglo
        setCategorias([newCategory, ...categorias])

    }


    return (
        <>
        <h1>
            GifExpertApp
        </h1>

        <AddCategory onNewCategy={onAddCategory}/>

        
            {
                categorias.map(categoria =>{
                    return (
                        <GifGrid key={categoria} categoria={categoria}/>)
                })
            }
     

        </>
    );
}

export default GifExpertApp;
