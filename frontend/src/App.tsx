import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rutas from './router/router'
import { Provider } from 'react-redux'
import store from './redux/store'


export function App() {

  return (
    <Provider store={store}>

      <BrowserRouter >
        <Rutas />
      </BrowserRouter>

    </Provider>
  )
}

export default App
