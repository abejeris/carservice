import "./App.scss";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";
import Navbar from "./components/organisms/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Blog from "./screens/Blog";
import Services from "./screens/Services";
import { GlobalStyles } from "./theme/GlobalStyles";
import Footer from "./components/features/footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutUs" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
