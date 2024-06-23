"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useState } from "react";

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const [size, setSize] = useState<Size | undefined>();
	const [quantity, setQuantity] = useState<number>(1);
	const [showWarningMessage, setShowWarningMessage] = useState<boolean>(false);

	const addToCart = () => {
		setShowWarningMessage(true);
		if (!size) return;
	};

	return (
		<>
			{showWarningMessage && showWarningMessage && !size && (
				<p className="text-red-500 fade-in">Debes seleccionar la talla *</p>
			)}
			<SizeSelector
				selectedSize={size}
				availableSizes={product.sizes}
				onSizeChanged={setSize}
			/>
			<QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
			<button onClick={addToCart} className="btn-primary my-5">
				Agregar al carrito
			</button>
		</>
	);
};
