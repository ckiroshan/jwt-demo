import "./App.css";
import Header from "./components/Header";
import logo from "./assets/react.svg";

function App() {
  return (
    <>
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
    </>
  );
}

export default App;
