import { ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";

export default async function Home() {
	const { products } = await getPaginatedProductsWithImages();
	console.log(products);

	return (
		<main className="mt-20 w-[90%] mx-auto">
			<Title title="Inicio" subtitle="Todos los productos" />
			<ProductGrid products={products} />
		</main>
	);
}
