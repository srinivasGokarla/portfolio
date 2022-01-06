import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Routes/Routes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
