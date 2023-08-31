import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import "./Home.css"
import Document from '../Components/documentry/Document';
import Index from '../Components/MovieCarousel/Index';
import Trailer from '../Components/Trailer/Tralier';
import Web from '../Components/WebSeries/Web';
import Tv from '../Components/Tv/Tv';
import Short from '../Components/ShortFilm/Short';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  // eslint-disable-next-line no-unused-vars
 
 
 
  return (
    <div className="x">
      <Navbar />
      <Slider />
      
      <Index />
      <Short />
      <Document />
      <Web />
      <Tv />
      <Trailer />
      <Footer />
    </div>
  );
}

export default Home;