import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Rutas from "./router/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
export function App() {
  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Rutas />
        </BrowserRouter>
      </PersistGate>

    </Provider>
  );
}

export default App;
