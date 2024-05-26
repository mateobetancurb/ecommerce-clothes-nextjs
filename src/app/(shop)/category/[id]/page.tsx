import { notFound } from "next/navigation";

interface Props {
	params: {
		id: string;
	};
}

export default function CategoryPage({ params }: Props) {
	if (params.id === "kids") {
		notFound();
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-6xl">category page {params.id}</h1>
		</div>
	);
}
