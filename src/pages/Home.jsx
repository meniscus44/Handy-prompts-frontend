import React from "react";
import Hero from "../components/hero/Hero";
import PromptsCarousel from "../components/promptsCarousel/PromptsCarousel";

const Home = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<Hero />
			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "10px 0",
					width: "90%",
				}}
			>
				<div
					style={{
						padding: "20px 10px",
					}}
				>
					<h4 style={{ fontSize: "20px" }}>Featured Prompts</h4>
				</div>
				<PromptsCarousel />
			</div>
			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "10px 0",
					width: "90%",
				}}
			>
				<div
					style={{
						padding: "20px 10px",
					}}
				>
					<h4 style={{ fontSize: "20px" }}>Featured Prompts</h4>
				</div>
				<PromptsCarousel />
			</div>
			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "10px 0",
					width: "90%",
				}}
			>
				<div
					style={{
						padding: "20px 10px",
					}}
				>
					<h4 style={{ fontSize: "20px" }}>Featured Prompts</h4>
				</div>
				<PromptsCarousel />
			</div>
		</div>
	);
};

export default Home;
