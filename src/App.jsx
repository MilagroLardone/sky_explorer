import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./components/Modal_login/Modal_login.jsx";
import Register from "./components/Modal_register/Modal_register.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      {/* <Login /> */}
      {/* <Register /> */}
      <Footer />
    </div>
  );
};

export default App;
