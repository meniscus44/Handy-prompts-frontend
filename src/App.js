import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/marketplace" element={<Marketplace />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
