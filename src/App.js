import "./App.css";
import Header from "./comps/header/Header";
import Sidebar from "./comps/sidebar/Sidebar";

function App() {
  return (
    // BEM naming conversions
    <div className="App">
      <Header />

      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
