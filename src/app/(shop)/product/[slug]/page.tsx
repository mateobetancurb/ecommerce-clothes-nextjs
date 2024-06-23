export const revalidate = 604800;

import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getProductBySlug } from "@/actions";
import {
	QuantitySelector,
	SizeSelector,
	Slide,
	SlideMobile,
	StockLabel,
} from "@/components";
import { AddToCart } from "./ui/AddToCart";

interface Props {
	params: {
		slug: string;
	};
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = params.slug;
	const product = await getProductBySlug(slug);

	return {
		title: product?.title ?? "Producto no encontrado",
		description: product?.description ?? "",
		openGraph: {
			title: product?.title ?? "Producto no encontrado",
			description: product?.description ?? "",
			images: [`/products/${product?.images[1]}`],
		},
	};
}

export default async function ProductPage({ params }: Props) {
	const { slug } = params;
	const product = await getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	return (
		<div className="sm:my-20 grid md:grid-cols-3 gap-3">
			<div className="col-span-1 md:col-span-2 ">
				{/* mobile slide */}
				<SlideMobile
					title={product.title}
					images={product.images}
					className="block md:hidden"
				/>

				{/* desktop slide */}
				<Slide
					title={product.title}
					images={product.images}
					className="hidden md:block"
				/>
			</div>

			<div className="col-span-1 px-5 ">
				<h1 className="antialiased font-bold text-xl">{product.title}</h1>
				<p className="text-lg mb-5 ">${product.price}</p>

				<StockLabel slug={product.slug} />

				<AddToCart product={product} />

				<h3 className="font-bold">Descripción</h3>
				<p>{product.description}</p>
			</div>
		</div>
	);
}
