"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useRouter } from "next/navigation";

export const OrderSummay = () => {
	const router = useRouter();
	const orderSummay = useCartStore((state) => state.getSummaryInformation());

	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (orderSummay.totalItems === 0 && isLoaded === true) {
			router.replace("/empty");
		}
	}, [orderSummay.totalItems, isLoaded]);

	if (!isLoaded) return <p>Cargando...</p>;

	return (
		<>
			{isLoaded && (
				<div className="bg-white space-y-5 h-fit rounded-xl md:mt-24 shadow-xl p-7">
					<h2 className="text-xl font-bold mb-2">Resumen de orden</h2>
					<div className="grid grid-cols-2">
						<span>Cantidad de artículos</span>
						<span className="text-right">{orderSummay.totalItems}</span>
						<span>Subtotal</span>
						<span className="text-right">
							{currencyFormat(orderSummay.subTotal)}
						</span>
						<span>Impuestos</span>
						<span className="mb-3 text-right">
							{currencyFormat(orderSummay.taxes)}
						</span>
						<span className="font-bold text-xl">Total</span>
						<span className="font-bold text-xl mb-5 text-right">
							{currencyFormat(orderSummay.total)}
						</span>
					</div>
					<div>
						<Link
							className="flex transition-all justify-center btn-primary"
							href={"/checkout/address"}
						>
							Siguiente
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
