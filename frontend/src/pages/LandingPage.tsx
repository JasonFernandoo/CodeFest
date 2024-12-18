import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Description from "../components/Description";
import Service from "../components/Service";
import Product from "../components/Product";

function LandingPage() {

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

export default LandingPage;
