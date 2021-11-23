import Item from "./Item"

// const algoVaAPasar = () => {
    // return new Promise((resolve, reject)=>{
    //     if(true){
    //         setTimeout(() =>{
    //             resolve(products)
    //             console.log("soy 5 seg, abajo sale los products")
    //         }, 5000)
            
    //     }else{
    //         reject("hey, salio mal")
    //     }

        // if(status===200){
        //     resolve("hey, lo hice bien")
        // }else{
        //     reject("hey, salio mal")
        // }

        // if(false){
        //     resolve("hey, lo hice bien")
        // }else{
        //     reject("hey, salio mal")
        // }
//     })
// }

// algoVaAPasar()
// .then((response) => console.log(response))
// .then(() => localStorage.setItem("productos", JSON.stringify(products)))
// .catch((error)=>console.log(error))

// setTimeout(() =>{
//     console.log("hey, soy 2 seg")
// }, 2000)


function ItemList() {
    return(
        <>
            <Item/>
        </>
    )

}



export default ItemList