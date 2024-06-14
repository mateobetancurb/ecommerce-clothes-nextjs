import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";

interface Props {
	searchParams: {
		page?: string;
	};
}

export default async function Home({ searchParams }: Props) {
	const page = searchParams.page ? Number(searchParams.page) : 1;
	const { products, currentPage, totalPages } =
		await getPaginatedProductsWithImages({ page });

	if (products.length === 0) {
		redirect("/");
	}

	return (
		<main className="mt-20 w-[90%] mx-auto">
			<Title title="Inicio" subtitle="Todos los productos" />
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</main>
	);
}
