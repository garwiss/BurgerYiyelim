import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Errors } from './components/Errors'
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer'


function App() {


  return (
   <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' exac element={<Home/>}/>
      <Route path='/menu' exac element={<Menu/>}/>
      <Route path='/about' exac element={<About/>}/>
      <Route path='/contact' exac element={<Contact/>}/>
      <Route path='*' exac element={<Errors/>}/>
    </Routes>
    <Footer/>

   </div>
  )
}

export default App
