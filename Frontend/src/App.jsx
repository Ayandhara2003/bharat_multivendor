import Nav from './assets/Nav';
import Footer from './assets/Footer';
import Signin from './assets/signin';
import Register from './assets/Register';
import { Routes, Route } from "react-router-dom";
import Banner from './assets/banner';
function App() {

  return (
    <>
    
      <Nav/>
      <Routes>
       <Route path="/Signin" element={<Signin />} />
       <Route path="/Register" element={<Register />} />
       
      </Routes>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
