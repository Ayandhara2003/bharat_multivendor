import Nav from './assets/Nav';
import Footer from './assets/Footer';
import Signin from './assets/signin';
import Register from './assets/Register';
import { Routes, Route, useLocation } from "react-router-dom";
import Banner from './assets/banner';
function App() {
  const location = useLocation();
  const hideextra = ['/signin','/Register'].includes(location.pathname);

  return (
    <>
    
      <Nav/>
      {!hideextra && <Banner/>}
      <Routes>
       <Route path="/signin" element={<Signin />} />
       <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
