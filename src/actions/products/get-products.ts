"use server";

import axios from "axios";

export const getAllProducts = async () => {
	try {
		const { data } = await axios.get(
			"https://api.escuelajs.co/api/v1/products"
		);
		return data;
	} catch (error) {
		throw new Error("error fetching products from api");
	}
};
