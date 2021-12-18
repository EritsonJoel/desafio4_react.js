
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ItemContainerDetails from './detalle/ItemContainerDetails';

import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
   
   <Routes>
     <Route  exact  path='/'  element={<ItemListContainer/>}/>
     <Route  exact  path='/detalle/:idcategoria'  element={<ItemContainerDetails/>}/>
     
   </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
