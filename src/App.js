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

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Navbar />
			</ThemeProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutUs" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
