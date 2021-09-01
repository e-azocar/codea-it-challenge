import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import flightsJSON from "../../json/flights.json";
import routesJSON from "../../json/routes.json";
import Flight from "../../components/Flight";
import Head from "next/head";

const FlightList = styled.div`
  margin: 1rem auto;
  padding: 0 4rem;
  max-width: 1200px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 2rem;
  color: #ff5733;
`;

const Flights = () => {
  const [flights, setFlights] = useState({
    outbound: [],
    inbound: [],
  });
  const [routeData, setRouteData] = useState({ origin: {}, destination: {} });
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(async () => {
    if (router.asPath !== router.route) {
      const flightRoute = router.query.route;
      const [originCode, destinationCode] = flightRoute.split("-");

      const tempFlights = {
        outbound: [],
        inbound: [],
      };

      flightsJSON.flights.forEach((flight) => {
        if (
          flight.origin === originCode &&
          flight.destination === destinationCode
        ) {
          tempFlights.outbound.push(flight);
        }

        if (
          flight.origin === destinationCode &&
          flight.destination === originCode
        ) {
          tempFlights.inbound.push(flight);
        }
      });

      const origin = routesJSON.routes.find(
        (route) => route.code === originCode
      );

      const destination = routesJSON.routes.find(
        (route) => route.code === destinationCode
      );

      setFlights(tempFlights);
      setRouteData({ origin, destination });
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div>
        <Head>
          <title>Flights</title>
        </Head>

        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>
            {`Flights | ${routeData.origin.code} to ${routeData.destination.code}`}
          </title>
        </Head>

        <PageTitle>Flights</PageTitle>

        <FlightList>
          <h2>
            Choose your outbound flight to{" "}
            {routeData.destination.location.cityName}:
          </h2>

          {flights.outbound.length > 0 ? (
            flights.outbound.map((flight) => (
              <Flight
                data={flight}
                cities={{
                  origin: routeData.origin.location.cityName,
                  destination: routeData.destination.location.cityName,
                }}
                origin={true}
				key={flight.code}
              />
            ))
          ) : (
            <span>There are no flights available for the selected route</span>
          )}

          <h2 style={{ marginTop: "4rem" }}>
            Choose your inbound flight to {routeData.origin.location.cityName}:
          </h2>

          {flights.inbound.length > 0 ? (
            flights.inbound.map((flight) => (
              <Flight
                data={flight}
                cities={{
                  origin: routeData.destination.location.cityName,
                  destination: routeData.origin.location.cityName,
                }}
                origin={false}
				key={flight.code}
              />
            ))
          ) : (
            <span>There are no flights available for the selected route</span>
          )}
        </FlightList>
      </div>
    );
  }
};

export default Flights;
