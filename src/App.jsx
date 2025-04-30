import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home/Home.jsx";

function App() {

  return (
    <div className="app">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
