import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import './styles.css'

function App() {
 
  return (
    
   <>
   <BrowserRouter>
     <NavBar />
     <Routes>
     <Route path="/" element= {<ItemListContainer className ="contenedorprod" title= 'Aqui van Mis Productos'/>}/>
     <Route path="/category/:category" element={<ItemListContainer className ="contenedorprod" title= 'Aqui van Mis Productos'/>}/>
     <Route path="/item/:id" element={<ItemDetailContainer />} />
     </Routes>
     
     
      
   </BrowserRouter>  
   </>
  
  );
}

export default App;
