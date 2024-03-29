import { Route, Routes } from "react-router-dom";
import { Main, Users, PageNotFound } from "./components/index";
import { Container } from "@mui/material";

function App() {
	return (
		<Container className="container-fluid">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/users" element={<Users />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Container>
	);
}

export default App;
