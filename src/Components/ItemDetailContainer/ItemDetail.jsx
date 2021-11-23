import { products } from "../ItemListContainer/arrayProducts";


const getItem = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() =>{
                resolve(products)
                console.log("soy 5 seg, abajo sale los products")
            }, 5000)
            
        }else{
            reject("hey, salio mal")
        }
    })
}




function ItemDetailContainer () {
    getItem()
    .then((response) => console.log(response))
    .then(() => localStorage.setItem("productos", JSON.stringify(products)))
    .catch((error)=>console.log(error))
}



export default ItemDetailContainer