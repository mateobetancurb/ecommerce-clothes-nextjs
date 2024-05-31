"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces";

interface Props {
	product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
	const [displayImage, setImageDisplay] = useState(product.images[0]);

	return (
		<div className="rounded-md overflow-hidden fade-in">
			<Link href={`/product/${product.slug}`}>
				<Image
					src={`/products/${displayImage}`}
					alt={product.title}
					className="w-full object-cover rounded"
					width={500}
					height={500}
					onMouseEnter={() => setImageDisplay(product.images[1])}
					onMouseLeave={() => setImageDisplay(product.images[0])}
				/>
			</Link>
			<div className="p-4 flex flex-col ">
				<Link
					href={`/product/${product.slug}`}
					className="hover:text-blue-700 transition-all"
				>
					{product.title}
				</Link>
				<span className="font-bold">${product.price}</span>
			</div>
		</div>
	);
};
