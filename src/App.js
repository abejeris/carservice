// import MyComponent from "./components/atoms/Button/Button";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";
import Navbar from "./components/organisms/Navbar";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
		</ThemeProvider>
	);
}

export default App;
