import Register from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
<Routes>
  <Route path="/RegisterPage" element={<Register/>}/>
    <Route path="/LoginPage" element={<LoginPage/>}/>

  </Routes>    </>
  );
}

export default App;
