"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";

export const ProductsInCart = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const productsInCart = useCartStore((state) => state.cart);
	const updateProductQuantity = useCartStore(
		(state) => state.updateProductQuantity
	);
	const deleteProductFromCart = useCartStore(
		(state) => state.deleteProductFromCart
	);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (!isLoaded) {
		return <p>Cargando...</p>;
	}

	return (
		<>
			{isLoaded && productsInCart.length > 0 && (
				<>
					{productsInCart.map((product) => (
						<div key={`${product.slug}-${product.size}`} className="flex">
							<Image
								src={`/products/${product.image}`}
								alt={product.title}
								width={150}
								height={150}
								className="mr-5 rounded"
							/>
							<div>
								<div className="grid grid-cols-2">
									<Link
										href={`/product/${product.slug}`}
										className="hover:underline cursor-pointer"
									>
										{product.title}
									</Link>

									<p className="font-bold text-xl text-right ">
										${product.price}
									</p>
								</div>
								<p>Talla: {product.size}</p>
								<div className="flex items-center justify-between">
									<QuantitySelector
										quantity={product.quantity}
										onQuantityChanged={(value) =>
											updateProductQuantity(product, value)
										}
									/>
									<button
										onClick={() => deleteProductFromCart(product)}
										className="hover:bg-red-300 hover:p-2 transition-all rounded-full"
									>
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
												d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</>
	);
};
