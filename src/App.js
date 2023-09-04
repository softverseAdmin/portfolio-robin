import './assets/css/App.css';
import './assets/js/App.js';
import Navigation from './components/header/Navigation';
import Navbody from './components/header/Navbody';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import FullScreenMenu from './components/header/FullscreenMenu.jsx';

function App() {
  // get the web url: http://localhost:3000/about
  const url = window.location.href;
  // get an array using split and use last index as the address
  const add = url.split("/");
  const webAdd = add[add.length - 1];

  return (
    <div className="App">
      <div className="header head">
        <FullScreenMenu />
      </div>
      <div className="body">
        {/* conditional statement, comapare & return component */}
        {webAdd === "home" && <Navbody/>}
        {webAdd === "" && <Navbody />}
        {webAdd === "projects" && <Projects />}
        {webAdd === "contact" && <Contact />}
        {webAdd === "about" && <About />}
      </div>
    </div>
  );
}
export default App;
