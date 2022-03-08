// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from "./middleware/store";
import { Provider } from "react-redux";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Navbar from "./components/Navbar";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Navbar />
      <AboutMe />
      <Education />
      <Skills />
      <Experiences />

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="education" element={<Education />} />
          <Route exact path="skills" element={<Skills />} />
          <Route exact path="experiences" element={<Experiences />} />
          <Route exact path="/" element={<AboutMe />} />
          <Route element={<AboutMe />} />
        </Routes>
      </BrowserRouter> */}
    </Provider>
  );
}

export default App;
