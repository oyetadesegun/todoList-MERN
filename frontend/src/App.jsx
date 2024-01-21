import './App.css'
import './pages/Home'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import SwaggerDocs from './pages/SwaggerDocs'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/api-docs" element= {<SwaggerDocs/>}/>
    </Routes>

  )
}

export default App
