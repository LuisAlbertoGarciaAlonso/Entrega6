console.log("soy el numero 1");

setTimeout(() =>{
    console.log("soy el numero 2,demoro 3 seg");
}, 3000)

console.log("soy el numero 3");

//promesa

const products = [
    {
    product1: "playera",
    color:"red",
    id: 1   
    },
    {
    product1: "pantalon",
    color:"blue",
    id: 2   
    },
    {
    product1: "camisa",
    color:"green",
    id: 3 
    }
]

const algoVaAPasar = () => {
    return new Promise((resolve, reject)=>{
        
        if(true){
            setTimeout(() =>{
                resolve(products)
                console.log("soy 5 seg, abajo sale los products")
            }, 5000)
            
        }else{
            reject("hey, salio mal")
        }

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
    })
}

algoVaAPasar()
.then((response) => console.log(response))
.then(() => localStorage.setItem("productos", JSON.stringify(products)))
.catch((error)=>console.log(error))

setTimeout(() =>{
    console.log("hey, soy 2 seg")
}, 2000)

//MAP
{
products.map((products,index)=>{ //index va a regresar indice el producto
    console.log(products.product1)//solo trae el nombre
    console.log(products.color)//solo trae el color
    console.log(products.id)//solo trae el id
return(
    <div key={product1.id} >{/*hay que darle un key con prop porque sino larga error*/}

        <h1>{products.product1}</h1> {/*me trae el nombre en un h1*/}
        <p>{products.color}</p> {/*me trae el nombre en un p*/}

    </div>
)
})
}

// para las imágenes podrían ponerlas en public. con <img src="/nombreimg.jpg" alt="imagen" /> va a andar
