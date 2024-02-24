import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import LoginPage from './page/LoginPage'
import SignUPPage from './page/SignupPage'
import OTPPage from "./page/OTPPage"
import ProfilePage from "./page/ProfilePage"
import ProductPage from "./page/ProductPage"
import ProductUpdatePage from "./page/ProductUpdatePage"
function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/Login" element={<LoginPage/>}/>
  <Route path="/SignUp" element={<SignUPPage/>}/>
  <Route path="/otp" element={<OTPPage/>}/>
  <Route path="/Profile" element={<ProfilePage/>}/>
  <Route path="/Product" element={<ProductPage/>}/>
  <Route path="/ReadbyProduct/:productID" element={<ProductUpdatePage/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
