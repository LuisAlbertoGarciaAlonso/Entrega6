import {useState} from "react"
import "../ItemCount/itemCount.css"

function ItemCount(){

const [number, setNumber] = useState(0)

const incrementar= () => {
    setNumber(number +1)
}

const disminuir= () => {
    if(number == 0){
console.log(`Nose puede disminuir menos de 0`)
    }else{
        setNumber(number -1)
    }
}

    return(
        <>
        <h2 className="cantidad">{`Cantidad ${number}`}</h2>
        <button onClick={incrementar} className="btn btn-primary botonMas">+</button>
        <button onClick={disminuir} className="btn btn-secondary botonMenos">-</button>
        </>
    )


}
export default ItemCount