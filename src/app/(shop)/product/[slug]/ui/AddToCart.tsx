"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const addProductToCart = useCartStore((state) => state.addProductToCart);

	const [size, setSize] = useState<Size | undefined>();
	const [quantity, setQuantity] = useState<number>(1);
	const [showWarningMessage, setShowWarningMessage] = useState<boolean>(false);

	const addToCart = () => {
		setShowWarningMessage(true);
		if (!size) return;

		const cartProduct: CartProduct = {
			id: product.id,
			slug: product.slug,
			title: product.title,
			price: product.price,
			quantity: quantity,
			size: size,
			image: product.images[0],
		};

		addProductToCart(cartProduct);
		setShowWarningMessage(false);
		setQuantity(1);
		setSize(undefined);
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
