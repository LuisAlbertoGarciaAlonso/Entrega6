import { render } from "@testing-library/react"
import "../ItemListContainer/item.css"

const ItemListContainer = (props) => {
    return(
        <>
        <h1 className="saludo" >Hola, {props.greeting}</h1>
        </>
    )
}

// render(<ItemListContainer greeting= "Gracias por ingresar en nuestra pagina"/>,
// document.getElementById("root"))

export default ItemListContainer