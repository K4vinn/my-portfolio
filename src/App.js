import logo from "./logo.svg";
import Navbar from "./components/NavigationBar";
import About from "./components/About";
import Work from "./components/Work";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Test from "./components/Test";

import "./assets/styles/Global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <Education />
      <Work />
      {/* <Test /> */}
    </div>
  );
}

export default App;
