import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {
    
    //este hook hace que cuando se lanza por primera vez se ejecute el helper getGifts 
    const {data:images, loading } = useFetchGifs(category);
    
    return (
    <>
        <h3 className="animate__animated animate__fadeIn ">{ category }</h3>

        {loading && <p className="animate__animated animate__flash"> Loading la concha de tu hermana</p> }        
        
        <div className="card-grid">
             {
                 images.map(img => {
                    return(
                        <GiftGridItem
                        key={img.id}
                        {...img}
                        />
                        )
                     })
             } 
             
        </div>
        </>
    )
}
