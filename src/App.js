import "./App.css";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
