import { notFound, redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "@prisma/client";

interface Props {
	params: {
		gender: string;
	};
	searchParams: {
		page?: string;
	};
}

export default async function CategoryPage({ params, searchParams }: Props) {
	const { gender } = params;

	const page = searchParams.page ? Number(searchParams.page) : 1;
	const { products, currentPage, totalPages } =
		await getPaginatedProductsWithImages({ page, gender: gender as Gender });

	if (products.length === 0) {
		redirect(`/gender/${gender}`);
	}

	const labels: Record<string, string> = {
		men: "Hombres",
		women: "Mujeres",
		kid: "Niños",
		unisex: "Todos",
	};

	return (
		<div className="flex flex-col mt-10 sm:mt-20 items-center justify-center min-h-screen py-2 w-[90%] mx-auto">
			<Title title={`Categoría: ${labels[gender]}`} className="mr-auto" />
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</div>
	);
}
