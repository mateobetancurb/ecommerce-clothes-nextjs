"use client";

import { QuantitySelector } from "@/components";
import type { CartProduct, Product } from "@/interfaces";
import { useState } from "react";

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const [quantity, setQuantity] = useState<number>(1);
	const [showWarningMessage, setShowWarningMessage] = useState<boolean>(false);

	const addToCart = () => {
		setShowWarningMessage(true);

		const cartProduct: CartProduct = {
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: quantity,
			image: product.images[0],
		};

		setShowWarningMessage(false);
		setQuantity(1);
	};

	return (
		<>
			{showWarningMessage && showWarningMessage && (
				<p className="text-red-500 fade-in">Debes seleccionar la talla *</p>
			)}

			<QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
			<button onClick={addToCart} className="btn-primary my-5">
				Agregar al carrito
			</button>
		</>
	);
};
