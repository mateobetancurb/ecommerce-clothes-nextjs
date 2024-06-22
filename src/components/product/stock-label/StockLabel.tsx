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
		<>
			{isLoading ? (
				<p className="antialiased animate-pulse bg-gray-200 rounded-md w-1/2">
					&nbsp;
				</p>
			) : (
				<p className="antialiased">Unidades disponibles: {stock}</p>
			)}
		</>
	);
};
