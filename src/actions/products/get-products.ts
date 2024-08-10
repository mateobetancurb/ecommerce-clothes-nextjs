"use server";

import axios from "axios";

export const getAllProducts = async () => {
	try {
		const { data } = await axios.get(
			"https://api.escuelajs.co/api/v1/products"
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(`Error de red: ${error.message}`);
		} else {
			throw new Error("Error desconocido al obtener productos");
		}
	}
};
