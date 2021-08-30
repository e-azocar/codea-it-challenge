import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
	return (
		<main className="home-main">
			<Head>
				<title>Home</title>
			</Head>

			<div className="main-container">
				<h1 className="brand-name">Flights Finder</h1>
				<h3>
					Here you will find the best flight deals
				</h3>
				<Link href="/search">
					<a className="search">Search</a>
				</Link>
			</div>
		</main>
	);
};

export default Home;
