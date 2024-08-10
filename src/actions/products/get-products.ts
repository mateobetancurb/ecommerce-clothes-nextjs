"use server";

import axios from "axios";

export const getAllProducts = async () => {
	try {
		const { data } = await axios.get(`${process.env.API_BASE_URL}/products`);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(`Error de red: ${error.message}`);
		} else {
			throw new Error("Error desconocido al obtener productos");
		}
	}
};
