import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PublicLayout from './AppBar/Publiclayout'
import Projects from './Components/Projects'

function App() {

  return (
    <BrowserRouter basename='Portfolio'>
      <Routes>
      <Route path="/" element={<PublicLayout><Home/></PublicLayout>} />
      <Route path="/projects" element={<PublicLayout><Projects/></PublicLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
