import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Service from "./pages/Service";
import Product from "./pages/Product";

function App() {

	return (
		<>
			<Navbar />
			<Home />
			<Description />
			<Service />
			<Product />
		</>
	);
}

export default App;
