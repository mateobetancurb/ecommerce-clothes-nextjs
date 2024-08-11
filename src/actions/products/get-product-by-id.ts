"use server";
import axios from "axios";

interface Props {
	id: string;
}

export const getProductById = async ({ id }: Props) => {
	try {
		const data = await axios.get(`${process.env.API_BASE_URL}/products/${id}`);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(`Error de red: ${error.message}`);
		} else {
			throw new Error("Error desconocido al obtener productos");
		}
	}
};
