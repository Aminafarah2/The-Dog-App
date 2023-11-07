
import MeetDogs from "./components/MeetDogs";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Adopt from "./components/Adopt";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/"  element={<Layout />} >
        <Route index  element={ < Home  />} />
        <Route path="Adopt"  element={ <Adopt />} />
        <Route path="MeetDogs"  element={ <MeetDogs/>} />
     </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
