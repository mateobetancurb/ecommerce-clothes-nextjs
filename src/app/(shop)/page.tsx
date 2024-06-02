import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
	return (
		<main className="sm:mt-20">
			<Title title="Inicio" subtitle="Todos los productos" />

			<ProductGrid products={products} />
		</main>
	);
}
