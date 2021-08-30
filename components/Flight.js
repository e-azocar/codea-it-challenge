import React from "react";
import styled from "styled-components";
import { VscArrowRight } from "react-icons/vsc";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

const FlightContainer = styled.div`
	background: #f8f8f8;
	border-radius: 5px;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;
	margin: 1rem 0;
	color: #333;

	h1,
	h2,
	h3,
	h4 {
		margin: 0 1rem;
		color: #ff5733;
	}

	b {
		color: #ff5733;
	}

	img {
		width: 4rem;
		height: auto;
	}

	&:hover {
		-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		transform: translateY(-5px);
	}

	.city {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0.5rem;

		.origin,
		.destination {
			margin: 0 0.5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	.time {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1rem;
		border-left: 2px solid #ff5733;
		border-right: 2px solid #ff5733;

		span {
			margin: 0.3rem 0;
		}
	}

	.price {
		display: flex;
		justify-content: center;
	}

	.city,
	.time,
	.price {
		flex-grow: 1;
		flex-basis: 0;
	}
`;

const Flight = ({ data, cities, origin }) => {
	const departure = new Date(data.departureDate);
	const arrival = new Date(data.arrivalDate);

	const departureDate = `${departure
		.getDay()
		.toString()
		.padStart(2, "0")}/${departure
		.getMonth()
		.toString()
		.padStart(2, "0")}/${departure.getFullYear()}`;

	const arrivalDate = `${arrival
		.getDay()
		.toString()
		.padStart(2, "0")}/${arrival
		.getMonth()
		.toString()
		.padStart(2, "0")}/${arrival.getFullYear()}`;

	const departureTime = `${departure
		.getHours()
		.toString()
		.padStart(2, "0")}:${departure
		.getMinutes()
		.toString()
		.padStart(2, "0")}`;

	const arrivalTime = `${arrival
		.getHours()
		.toString()
		.padStart(2, "0")}:${arrival.getMinutes().toString().padStart(2, "0")}`;

	return (
		<FlightContainer key={data.id}>
			{/* <img src="/img/plane-icon.png" alt="Plane Icon" /> */}
			{origin ? (
				<FaPlaneDeparture size="60" color="#333333" />
			) : (
				<FaPlaneArrival size="60" color="#333333" />
			)}

			<div className="city">
				<div className="origin">
					<h3>{data.origin}</h3>
					<span>{cities.origin}</span>
				</div>

				<VscArrowRight />

				<div className="destination">
					<h3>{data.destination}</h3>
					<span>{cities.destination}</span>
				</div>
			</div>

			<div className="time">
				<span>
					<b>Departure:</b> {departureDate} - {departureTime}
				</span>
				<span>
					<b>Arrival:</b> {arrivalDate} - {arrivalTime}
				</span>
				<span>
					<b>Flight Duration:</b>{" "}
					{(new Date(data.arrivalDate) -
						new Date(data.departureDate)) /
						100000}{" "}
					minutes
				</span>
			</div>

			<div className="price">
				<h2>
					{data.fares[0].prices.afterTax} {data.currency}
				</h2>
			</div>
		</FlightContainer>
	);
};

export default Flight;
