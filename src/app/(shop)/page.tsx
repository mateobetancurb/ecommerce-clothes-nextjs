import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
	return (
		<main className="mt-20 w-[90%] mx-auto">
			<Title title="Inicio" subtitle="Todos los productos" />
			<ProductGrid products={products} />
		</main>
	);
}
