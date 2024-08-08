"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces";

interface Props {
	product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
	const [displayImage, setImageDisplay] = useState(product.images[0] || "");

	const isValidImageUrl = (url: string): boolean => {
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	};

	const handleMouseEnter = () => {
		if (product.images[1]) {
			setImageDisplay(product.images[1]);
		}
	};

	const handleMouseLeave = () => {
		setImageDisplay(product.images[0]);
	};

	return (
		<div className="rounded-md overflow-hidden fade-in">
			<Link href={`/product/${product.id}`}>
				{isValidImageUrl(displayImage) ? (
					<Image
						src={displayImage}
						alt={product.title}
						className="w-full object-cover rounded"
						width={500}
						height={500}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					/>
				) : (
					<div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
						<span>No hay imagen disponible</span>
					</div>
				)}
			</Link>
			<div className="p-4 flex flex-col ">
				<Link
					href={`/product/${product.id}`}
					className="hover:text-blue-700 transition-all"
				>
					{product.title}
				</Link>
				<span className="font-bold">${product.price}</span>
			</div>
		</div>
	);
};
