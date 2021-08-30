import React from "react";
import styled from "styled-components";
import Link from "next/link";

const AirportContainer = styled.div`
	background: #f8f8f8;
	border-radius: 5px;
	padding: 1rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: #333;
	cursor: pointer;
	transition: all 0.2s;

	h3,
	h4 {
		margin: 1rem;
		color: #ff5733;
	}

	hr {
		width: 100%;
	}

	&:hover {
		-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		transform: translateY(-5px);
	}
`;

const AirportImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: 5px;
`;

const Airport = ({ data, href }) => {
	return (
		<Link href={href}>
			<AirportContainer>
				<AirportImage
					src="https://images.unsplash.com/photo-1583330357508-1864f8e57785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
					alt="Airport Image"
				/>
				<h3>{data.description}</h3>
				<h4>{data.code}</h4>
				<p>
					{data.location.cityName} ({data.countryCode})
				</p>
			</AirportContainer>
		</Link>
	);
};

export default Airport;
