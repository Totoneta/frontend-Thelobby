import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rutas from './router/router'


export function App() {

  return (
    <BrowserRouter >
      <Rutas />
    </BrowserRouter>
  )
}

export default App
