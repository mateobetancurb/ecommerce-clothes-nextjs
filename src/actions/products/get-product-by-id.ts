"use server";
import axios from "axios";

interface Props {
	id: string;
}

export const getProductById = async ({ id }: Props) => {
	try {
		const { data } = axios.get(
			`https://api.escuelajs.co/api/v1/products/${id}`
		);
		console.log(data);

		return data;
	} catch (error) {
		throw new Error("error fetching product by id from api");
	}
};
