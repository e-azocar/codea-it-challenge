import React from "react";
import Airport from "../components/Airport";
import styled from "styled-components";
import routesJSON from "../json/routes.json";
import Head from 'next/head'

const AirportList = styled.div`
	padding: 2rem 4rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 1.5rem;
	max-width: 1200px;
	margin: 0 auto;
`;

const PageTitle = styled.h1`
	text-align: center;
	margin: 2rem;
	color: #ff5733;
`;

const Search = () => {
	return (
		<>
			<Head>
				<title>Select your origin</title>
			</Head>

			<PageTitle>Select your origin</PageTitle>

			<AirportList>
				{routesJSON.routes.map((route) => (
					<Airport
						data={route}
						key={route.code}
						href={`/search/${route.code}`}
					/>
				))}
			</AirportList>
		</>
	);
};

export default Search;
