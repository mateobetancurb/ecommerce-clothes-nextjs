import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";

interface Props {
	params: {
		id: Category;
	};
}

export default function CategoryPage({ params }: Props) {
	const { id } = params;

	const productsByCategory = initialData.products.filter(
		(product) => product.gender === id
	);

	const labels: Record<Category, string> = {
		men: "Hombres",
		women: "Mujeres",
		kid: "Niños",
		unisex: "Todos",
	};

	const categories = Object.keys(labels) as Category[];
	const categoriesList = categories.map((category) => category);
	if (!categoriesList.includes(id)) {
		notFound();
	}

	return (
		<div className="flex flex-col mt-10 sm:mt-20 items-center justify-center min-h-screen py-2 w-[90%] mx-auto">
			<Title title={`Categoría: ${labels[id]}`} className="mr-auto" />
			<ProductGrid products={productsByCategory} />
		</div>
	);
}
