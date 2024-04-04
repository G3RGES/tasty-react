import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
    </div>
  );
}

export default App;
