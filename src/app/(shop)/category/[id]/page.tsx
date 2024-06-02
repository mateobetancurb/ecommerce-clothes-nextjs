import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";

interface Props {
	params: {
		id: string;
	};
}

export default function CategoryPage({ params }: Props) {
	const productsByCategory = initialData.products.filter(
		(product) => product.gender === params.id
	);

	let categoriesList = ["men", "women", "kid"];

	if (!categoriesList.includes(params.id)) {
		notFound();
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Title
				title={`Categoría: ${
					params.id === "men"
						? "Hombres"
						: params.id === "women"
						? "Mujeres"
						: "Niños"
				}`}
				className="mr-auto"
			/>
			<ProductGrid products={productsByCategory} />
		</div>
	);
}
