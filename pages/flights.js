import React, {useEffect} from "react";
import { useRouter } from "next/router";

const flights = () => {
	const router = useRouter();
	
	useEffect(() => {
		router.push('/search')
	}, [])

	return <div></div>;
};

export default flights;
