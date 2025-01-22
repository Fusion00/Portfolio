import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PublicLayout from './AppBar/Publiclayout'
import Projects from './Components/Projects'
import Connect from './Components/Connect'
import Tech from './Components/Tech'
import Backoffice from './Backoffice/Backoffice'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<PublicLayout><Home/></PublicLayout>} />
      <Route path="/Projects" element={<PublicLayout><Projects/></PublicLayout>} />
      
      <Route path="/Connect" element={<PublicLayout><Connect/></PublicLayout>} />
      <Route path="/Techs" element={<PublicLayout><Tech/></PublicLayout>} />
      
      <Route path="/Backoffice" element={<Backoffice/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
