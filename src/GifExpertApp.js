import React,{useState} from 'react'
import { AddCategory } from './Components/AddCategory' 
import { GifGrid } from './Components/GifGrid' 

export const GifExpertApp = () => {
    //const categories =['One Punch','Samurai x','My hero Academia','Hunter x Hunter','Dragon Ball']
    //hook  use state
    const [categories, setCategories] = useState(['Demon Slayer']);//['One Punch','Samurai x','My hero Academia','Hunter x Hunter','Dragon Ball']

    // const handleAddCategoria=()=>{
    //     //agregando usando el operador spread ...
    //     //setCategories([...categories,'NuevaCategoria']);
        
    //     //Agregando una nueva categoria mediante un callback
    //     setCategories(categories=>[...categories,'NuevaCategoriaCalllback']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/> 

            <ol>
                {
                    categories.map(category=>{
                        return(
                            <GifGrid 
                                key={category} 
                                category={category}
                            />)
                    })
                }
            </ol>
        </>
        
    )
}
