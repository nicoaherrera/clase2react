import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const onAdd = () => {
    console.log('click');
  };
  return (
   <>
     <NavBar />
     <ItemListContainer title= 'Aqui van Mis Productos'/>
     <ItemCount stock={10} initial={1} onAdd={onAdd}/>
     
      
     
   </>
  );
}

export default App;
