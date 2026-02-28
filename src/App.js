import Register from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage" 
function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Register />} />
  <Route path="/RegisterPage" element={<Register/>}/>
    <Route path="/LoginPage" element={<LoginPage/>}/>
    <Route path="/HomePage" element={<Home/>}/>

  </Routes>    </>
  );
}

export default App;
