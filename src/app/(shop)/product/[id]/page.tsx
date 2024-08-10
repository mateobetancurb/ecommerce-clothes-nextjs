export const revalidate = 604800;

import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { QuantitySelector, Slide, SlideMobile } from "@/components";
import { AddToCart } from "./ui/AddToCart";
// import { getProductById } from "@/actions";

interface Props {
	params: {
		id: string;
	};
}

// export async function generateMetadata(
// 	{ params }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	const slug = params.slug;
// 	const product = await getProductBySlug(slug);

// 	return {
// 		title: product?.title ?? "Producto no encontrado",
// 		description: product?.description ?? "",
// 		openGraph: {
// 			title: product?.title ?? "Producto no encontrado",
// 			description: product?.description ?? "",
// 			images: [`/products/${product?.images[1]}`],
// 		},
// 	};
// }

export default async function ProductPage({ params }: Props) {
	console.log(params.id);

	// const { id } = params;
	// const product = await getProductById(id);
	// console.log(product);

	// if (!product) {
	// 	notFound();
	// }

	return (
		<div>
			<h1 className="mt-32">ProductPage {params.id}</h1>
		</div>
		// <div className="sm:my-20 grid md:grid-cols-3 gap-3">
		// 	<div className="col-span-1 md:col-span-2 ">
		// 		{/* mobile slide */}
		// 		<SlideMobile
		// 			title={product.title}
		// 			images={product.images}
		// 			className="block md:hidden"
		// 		/>

		// 		{/* desktop slide */}
		// 		<Slide
		// 			title={product.title}
		// 			images={product.images}
		// 			className="hidden md:block"
		// 		/>
		// 	</div>

		// 	<div className="col-span-1 px-5 ">
		// 		<h1 className="antialiased font-bold text-xl">{product.title}</h1>
		// 		<p className="text-lg mb-5 ">${product.price}</p>

		// 		<StockLabel slug={product.slug} />

		// 		<AddToCart product={product} />

		// 		<h3 className="font-bold">Descripción</h3>
		// 		<p>{product.description}</p>
		// 	</div>
		// </div>
	);
}
