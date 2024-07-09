import "./App.css";
import Header from "./components/Header";
import logo from "./assets/react.svg";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <AppContent />
        </div>
      </div>
    </>
  );
}

export default App;
