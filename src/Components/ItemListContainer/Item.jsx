import { products } from "../ItemListContainer/arrayProducts";
import React, { useState } from "react";

function Item () {
    
    return(
        products.map((products) => {
            return(
                <div key={products.id} >
                <h1>{products.name}</h1> 
                <p>{products.color}</p> 
                </div>
            )
        }
        )
    )

}

//  setTimeout(() =>{
    


//  }, 2000)


export default Item




