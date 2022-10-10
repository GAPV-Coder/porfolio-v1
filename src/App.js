import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./components/Styles/Global";
import { theme } from "./components/Styles/Theme";

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyles />
					<Navbar />
					<Home />
				</>
			</ThemeProvider>
		</Router>
	);
}

export default App;
