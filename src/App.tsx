import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PublicLayout from './AppBar/Publiclayout'
import Projects from './Components/Projects'
import Connect from './Components/Connect'

function App() {

  return (
    <BrowserRouter basename='Portfolio'>
      <Routes>
      <Route path="/" element={<PublicLayout><Home/></PublicLayout>} />
      <Route path="/projects" element={<PublicLayout><Projects/></PublicLayout>} />
      
      <Route path="/Connect" element={<PublicLayout><Connect/></PublicLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
