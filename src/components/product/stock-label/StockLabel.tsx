"use client";

import { useEffect, useState } from "react";

import { getStockBySlug } from "@/actions";

interface Props {
	slug: string;
}

export const StockLabel = ({ slug }: Props) => {
	const [stock, setStock] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProductStok();
	}, []);

	const getProductStok = async () => {
		try {
			const productStock = await getStockBySlug(slug);
			setStock(productStock);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<p className="antialiased">
			Unidades disponibles: {isLoading ? "Cargando..." : stock}
		</p>
	);
};
