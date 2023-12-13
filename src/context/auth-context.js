import React, { useEffect, useState, createContext, useContext } from "react";
import useCookie from "../hooks/useCookie";

const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
	const [cookie] = useCookie("authToken");
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		if (cookie) {
			setIsAuthenticated(true);
		}
	}, [cookie]);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (context === null) {
		throw new Error("useTheme must be used within a AuthContextProvider");
	}

	return context;
}
