import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { QuantitySelector, Slide, SlideMobile } from "@/components";
import { AddToCart } from "./ui/AddToCart";
import { getProductById } from "@/actions/products/get-product-by-id";
import { ProductSkeleton } from "@/components/global/ProductSkeleton";
interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;
	const product = await getProductById({ id });

	return {
		title: product?.data.title ?? "Producto no encontrado",
		description: product?.data.description ?? "",
		openGraph: {
			title: product?.data.title ?? "Producto no encontrado",
			description: product?.data.description ?? "",
			images: [`/products/${product?.data.image}`],
		},
	};
}

export default function ProductPage({ params }: Props) {
	return (
		<Suspense fallback={<ProductSkeleton />}>
			<ProductContent params={params} />
		</Suspense>
	);
}

async function ProductContent({ params }: Props) {
	const { id } = params;
	const product = await getProductById({ id });

	if (!product) {
		notFound();
	}

	return (
		<>
			<div className="mt-32 md:mb-32 grid grid-cols-1 md:grid-cols-2 gap-3">
				{/* <div className="col-span-1 md:col-span-2 ">
					<SlideMobile
						title={product.data.title}
						images={product.data.image}
						className="block md:hidden"
					/>

					<Slide
						title={product.data.title}
						images={product.data.image}
						className="hidden md:block"
					/>
        </div> */}

				<Image
					src={product.data.image}
					height={400}
					width={400}
					alt={product.data.title}
					className="mx-auto"
				/>
				<div className="mt-10 mb-20 col-span-1 px-5 ">
					<h1 className="antialiased font-bold text-xl">
						{product.data.title}
					</h1>
					<p className="text-lg mb-5 ">${product.data.price}</p>

					<h3 className="font-bold">Descripción</h3>
					<p className="mb-5">{product.data.description}</p>
					<AddToCart product={product.data} />
				</div>
			</div>
		</>
	);
}
