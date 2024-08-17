"use client";

import type { CartProduct, Product } from "@/interfaces";
import Link from "next/link";
import { useState } from "react";

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const [quantity, setQuantity] = useState<number>(1);
	const [isProductAddedToCart, setIsProductAddToCart] =
		useState<boolean>(false);

	const addToCart = () => {
		const cartProduct: CartProduct = {
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: quantity,
			image: product.image,
			// image: product.images[0],
		};

		setQuantity(1);
		setIsProductAddToCart(!isProductAddedToCart);
	};

	return (
		<div className="flex gap-4">
			<button
				onClick={addToCart}
				className={`bg-black text-white p-2 rounded-md ${
					isProductAddedToCart && "flex gap-1 bg-green-500"
				}`}
			>
				{isProductAddedToCart && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				)}
				{isProductAddedToCart ? "Agregado" : "Agregar producto"}
			</button>
			{isProductAddedToCart && (
				<Link
					href={"/product/cart"}
					className="bg-black text-white p-2 rounded-md"
				>
					Ir al carrito
				</Link>
			)}
		</div>
	);
};
