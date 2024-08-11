import Header from "./components/Header";
import "./App.css";
import CustomerContainer from "./components/CustomerContainer";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <CustomerContainer />
      </div>
    </>
  );
};

export default App;
