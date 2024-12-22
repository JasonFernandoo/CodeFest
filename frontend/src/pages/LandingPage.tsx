import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Description from "../components/Description";
import Service from "../components/Service";
import Product from "../components/Product";
import Footer from "../components/Footer";

function LandingPage() {

	return (
		<>
			<Navbar />
			<Home />
			<Description />
			<Service />
			<Product />
			<Footer />
		</>
	);
}

export default LandingPage;
