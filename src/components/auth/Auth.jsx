import React, { useEffect } from "react";
import "./auth.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useCookie from "../../hooks/useCookie";
import { useAuth } from "../../context/auth-context";

const Auth = ({ variant = "login" }) => {
	const navigate = useNavigate();
	// const [cookie] = useCookie("authToken");
	const { isAuthenticated } = useAuth();

	// console.log(cookie);

	async function googleLoginHandler() {
		try {
			// navigate("http://localhost:3005/auth/google", { replace: true });
			window.location.assign("http://localhost:3005/auth/google");
			console.log("called");
			// navigate("http://localhost:3005/auth/google");
		} catch (error) {
			console.log(error);
		}
	}

	// useEffect(() => {
	// 	if (isAuthenticated) {
	// 		navigate("/");
	// 	} else {
	// 		navigate("/login");
	// 	}
	// }, [isAuthenticated]);

	return (
		<div className="auth-wrapper">
			<div className="auth-content">
				<h1>{variant === "login" ? "Welcome back!" : "Create an account"}</h1>

				<button className="google-btn" onClick={googleLoginHandler}>
					<FcGoogle size={24} />
					<span>Continue with Google</span>
				</button>

				<div className="auth-content--divider">
					<div className="auth-content--divider__line"></div>
					<p>or</p>
					<div className="auth-content--divider__line"></div>
				</div>

				<form className="auth-form">
					<input
						className="auth-form--input"
						type="email"
						placeholder="Enter your email"
						required
					/>

					<input
						className="auth-form--input"
						type="password"
						placeholder="Enter your password"
						required
					/>

					<div>
						<button className="auth-form--submit">Register</button>
					</div>
				</form>

				<div className="auth-content--toggle-btn">
					{variant === "login" ? (
						<Link to={"/signup"}>Create a New Account</Link>
					) : (
						<Link to={"/login"}>I already have an account</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Auth;
