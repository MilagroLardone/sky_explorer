import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const offers = [
    {
      id: 1,
      image: bariloche,
      destination: "Bariloche",
      origin: "Buenos Aires",
      price: "1450000",
    },
    {
      id: 2,
      image: mendoza,
      destination: "Mendoza",
      origin: "Buenos Aires",
      price: "650000",
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar />
        <div className="offers-container">
          {offers.map((offer) => (
            <OfferBox
              key={offer.id}
              image={offer.image}
              destination={offer.destination}
              origin={offer.origin}
              price={offer.price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
