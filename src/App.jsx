import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='bg-primary font-poppins'>
      <Navbar />
      <Header />
      <Features />
      <Products />
      <Clients />
      <Brands />
      <Footer />
    </div>
  )
}

export default App;