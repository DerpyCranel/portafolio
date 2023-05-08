import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Proyects from "./components/Proyects";


function App() {
  return (
    <main className="text-black" >
      
      <NavBar/>
      <Header/>
      <AboutMe/>
     
     <Proyects/>

     <Footer/>
      

    </main>

  )
}

export default App;
