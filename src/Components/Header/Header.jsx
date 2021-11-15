import CartWidget from "../CartWidget/CartWidget";
import "../Header/header.css";

function Header() {
    return(
        <>
        <div className="barra">
        <header>
            <a href="./index.html"></a> <h1 className="firma animate__animated animate animate__flip">ELECTRIFICA</h1>
        </header>
            <nav>
                <ul>
                    <li><a href="./index.html"> Inicio</a></li>
                    <li><a href="./contacto-consultas.html">Contacto</a></li>
                    <li><a href="./equipo.html">Equipo</a></li>
                    <li><a href="./materiales.html">Materiales</a></li>
                    <li><a href="./servicios.html">Servicios</a></li>
                    <li><a href="./marcas.html">Marcas</a>
                    <ul>
                        <li>3M-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Conectube-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Fluke-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Genrod-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>IMSA-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Marlew-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Philips-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Prismian-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Richi-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Schneider-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Siemens-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Tacsa-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Teclastar-<a href="./contacto-consultas.html">Consulte</a></li>
                        <li>Steck-<a href="./contacto-consultas.html">Consulte</a></li>
                    </ul>
                    </li>
                    <li><a href="./ofertas.html">Ofertas</a></li>
                </ul>
                </nav>
                <CartWidget />
            </div>
</>
    )
}

export default Header