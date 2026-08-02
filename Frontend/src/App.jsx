import Nav from './assets/Nav';
import Footer from './assets/Footer';
import Signin from './assets/signin';
import Register from './assets/Register';
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    
      <Nav/>
      <Routes>
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
      <card/>
      <Footer/>
    </>
  )
}

export default App
