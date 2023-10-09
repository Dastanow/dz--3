import "./App.scss";  
import { AususeProvider } from "./context/AsuseContext.js";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Inpu from "./pages/Inpu";
import { Routes, Route } from "react-router-dom"; 
  
function App() {  
 return(
<div>
<AususeProvider>
    <Routes>
        <Route path="/nomepa" element={<HomePage/>} />
        <Route path="/inpu" element={<Inpu/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
</AususeProvider>
    </div>
 )
}

  
export default App;
