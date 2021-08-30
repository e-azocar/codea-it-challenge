import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-left-color: transparent;
	width: 36px;
	height: 36px;

	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;

const Loading = () => {
	return (
		<LoadingContainer>
			<div></div>
			<div></div>
		</LoadingContainer>
	);
};

export default Loading;
