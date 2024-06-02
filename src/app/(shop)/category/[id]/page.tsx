import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";

interface Props {
	params: {
		id: string;
	};
}

export default function CategoryPage({ params }: Props) {
	const { id } = params;

	const productsByCategory = initialData.products.filter(
		(product) => product.gender === id
	);

	let categoriesList = ["men", "women", "kid"];

	if (!categoriesList.includes(id)) {
		notFound();
	}

	return (
		<div className="flex flex-col sm:mt-20 items-center justify-center min-h-screen py-2">
			<Title
				title={`Categoría: ${
					id === "men" ? "Hombres" : id === "women" ? "Mujeres" : "Niños"
				}`}
				className="mr-auto"
			/>
			<ProductGrid products={productsByCategory} />
		</div>
	);
}
