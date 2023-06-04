import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Appbar from './components/header/Appbar'
import About from './components/about/About'
// import ContactUs from './components/contactus/ContactUs'
import Footer from './components/footer/Footer'
import ContactUS from './components/contactus/ContactUs'
import SignIn from './components/auth/user_signin/SignIn'
import SignUp from './components/auth/user_signup/SignUp'
import DocSignUp from './components/auth/doctor_signup/DocSignUp'
import DocSignIn from './components/auth/doctor_signin/DocSignIn'
import Doctors from './components/doctors/Doctors'
import DetailInfoDoc from './components/DetailInfoDoc/DetailInfoDoc'
import Admin from './components/admin/Admin'
import AdminSignin from './components/admin/auth/signIn/AdminSignin'


const AdminOutlet = () => (
  <>
  <Admin />
  <Outlet />
  </>
)

const HomeOutlet = () => (
  <>
      <Appbar/>
      <Outlet/>
      <Footer/>

  </>
)

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomeOutlet />}>
        <Route path={'/'} element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUS/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/detailinfo/:id' element={<DetailInfoDoc/>} />
        
        <Route path='/doctorsignup' element={<DocSignUp />} />
        <Route path='/doctorsignin' element={<DocSignIn/>}/>
        </Route>

        <Route path='/admin' element={<AdminOutlet />}>
        {/* <Route path='/admin/signin' element={<AdminSignin />}/> */}
          
        </Route>
      

      </Routes>
    </>
  )
}

export default App
