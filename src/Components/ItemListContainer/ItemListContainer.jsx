import { render } from "@testing-library/react"

const ItemListContainer = (props) => {
    return(
        <>
        <h1>Hola, {props.greeting}</h1>
        </>
    )
}

// render(<ItemListContainer greeting= "Gracias por ingresar en nuestra pagina"/>,
// document.getElementById("root"))

export default ItemListContainer