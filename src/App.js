import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/Styles/Global";
import { theme } from "./components/Styles/Theme";
import Technologies from "./components/Technologies/Technologies";

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyles />
					<Navbar />
					<Home />
					<Projects />
					<About />
					<Technologies />
					<Portfolio />
					<Footer />
				</>
			</ThemeProvider>
		</Router>
	);
}

export default App;
