import React from "react";
import Hero from "../components/hero/Hero";
import PromptsCarousel from "../components/promptsCarousel/PromptsCarousel";
import "../components/hero/hero.css";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<div
			style={{
				overflow: "hidden",
			}}
		>
			<Hero />
			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "20px 0",
					width: "90%",
				}}
			>
				<div
					style={{
						padding: "0px 10px",
					}}
				>
					<h4 style={{ fontSize: "20px" }}>Featured Prompts</h4>
					<div
						style={{
							height: "1px",
							width: "100%",
							backgroundColor: "white",
							opacity: "0.4",
							margin: "10px 0",
						}}
					></div>
				</div>
				<PromptsCarousel />
			</div>
			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "20px 0",
					width: "90%",
				}}
			>
				<div
					style={{
						padding: "0px 10px",
					}}
				>
					<h4 style={{ fontSize: "20px" }}>Hottest Prompts</h4>
					<div
						style={{
							height: "1px",
							width: "100%",
							backgroundColor: "white",
							opacity: "0.4",
							margin: "10px 0",
						}}
					></div>
				</div>
				<PromptsCarousel />
			</div>
			<div
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "20px 0",
					width: "90%",
				}}
			>
				<div
					style={{
						padding: "0px 10px",
					}}
				>
					<h4 style={{ fontSize: "20px" }}>Newest Prompts</h4>
					<div
						style={{
							height: "1px",
							width: "100%",
							backgroundColor: "white",
							opacity: "0.4",
							margin: "10px 0",
						}}
					></div>
				</div>
				<PromptsCarousel />
			</div>

			<div
				style={{
					padding: "100px 0",
					textAlign: "center",
					maxWidth: "768px",
					margin: "0 auto",
				}}
			>
				<h4
					style={{
						fontSize: "25px",
						paddingBottom: "25px",
					}}
				>
					What is <span className="rainbox-text">HandyPrompts?</span>
				</h4>

				<div
					style={{
						fontSize: "16px",
					}}
				>
					Prompts are becoming a powerful new way of programming AI models like
					ChatGPT and Midjourney.
					<p>However, it's hard to find good quality prompts online.</p>
					<p>
						If you're good at prompt engineering, there's also no clear way to
						make a living from your skills.
					</p>
					<p>
						HandyPrompts is a marketplace for buying and selling quality prompts
						that produce the best results, and save you money on API costs.
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
