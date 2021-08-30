import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Airport from "../../components/Airport";
import routesJSON from "../../json/routes.json";
import Head from "next/head";

const AirportList = styled.div`
	padding: 2rem 4rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 1.5rem;
	max-width: 1200px;
`;

const PageTitle = styled.h1`
	text-align: center;
	margin: 2rem;
	color: #ff5733;
`;

const Destinations = () => {
	const [originData, setOriginData] = useState({});
	const router = useRouter();

	useEffect(async () => {
		if (router.asPath !== router.route) {
			const origin = router.query.origin;

			setOriginData(
				routesJSON.routes.find((route) => route.code === origin)
			);
		}
	}, [router]);

	return (
		<>
			<Head>
				<title>Select your destination</title>
			</Head>

			<PageTitle>Select your destination</PageTitle>

			<AirportList>
				{originData.destinations
					? originData.destinations.map((destination) => (
							<Airport
								data={destination}
								key={destination.code}
								href={`/flights/${originData.code}-${destination.code}`}
							/>
					  ))
					: ""}
			</AirportList>
		</>
	);
};

export default Destinations;
