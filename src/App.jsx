import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemCount from "../src/ItemCount/ItemCount"
import ItemList from "../src/Components/ItemListContainer/ItemList"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetail';


function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting = "bienvenidos!"/>
      <ItemCount/>
      <ItemList/>
      {/* <ItemDetailContainer/> lo activo y rompe el codigo a revisar porque */}

    </div>
    
  );
}

export default App; 