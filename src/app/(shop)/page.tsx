import { ProductGrid, Title } from "@/components";
import { getAllProducts } from "@/actions/products/get-products";

export default async function Home() {
	const products = await getAllProducts();
	return (
		<main className="mt-20 w-[90%] mx-auto">
			<Title title="Inicio" subtitle="Todos los productos" />
			<ProductGrid products={products} />
		</main>
	);
}
