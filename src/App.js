import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import TopSection from "./Components/TopSection/TopSection";
import "./Custom.css";
import Services from "./Components/Services/Services";
import QnA from "./Components/DidYouKnow/QnA";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-bg" id="Home">
        <div className="bg-[#ffffff68]">
          <TopSection />
        </div>
      </div>
      <div id="Services">

      <Services  /> 
      </div>
      
      <div id="About">
        <QnA/>
      </div>
      <Footer />
    </>
  );
}

export default App;
