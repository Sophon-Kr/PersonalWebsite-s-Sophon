// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from "./middleware/store";

import { Provider } from "react-redux";
// import configureStore from "./middleware/store";
// import * as actions from "../src/middleware/action";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
