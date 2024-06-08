import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
];

interface Props {
	params: {
		id: string;
	};
}

export default function OrderPage({ params }: Props) {
	const isPayOrder = false;
	const { id } = params;
	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title={`Orden #${id}`} className="mt-32 text-2xl" />
				<div className="grid grid-cols-1 sm:grid-cols-2  gap-10">
					<div className="bg-white space-y-5 h-fit rounded-xl shadow-xl p-7">
						<div
							className={`flex gap-3 text-white p-2 rounded-md ${
								isPayOrder ? "bg-green-700" : "bg-red-700"
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
								/>
							</svg>
							{isPayOrder ? "Pagada" : "Pendiente por pagar"}
						</div>
						<h2 className="text-xl font-bold mb-2">Dirección de entrega</h2>
						<div>
							<p>Fernando Herrera</p>
							<p>Av. Playa</p>
							<p>Teléfono</p>
						</div>
						<div className="w-full h-0.5 rounded bg-gray-200 mb-100" />
						<h2 className="text-xl font-bold mb-2">Resumen de orden</h2>
						<div className="grid grid-cols-2">
							<span>Cantidad de artículos</span>
							<span className="text-right">3</span>
							<span>Subtotal</span>
							<span className="text-right">$100</span>
							<span>Impuestos</span>
							<span className="mb-3 text-right">$100</span>
							<span className="font-bold text-xl">Total</span>
							<span className="font-bold text-xl mb-5 text-right">$100</span>
						</div>
						<Link
							className="flex justify-center transition-all bg-green-700 text-white p-2 rounded-md hover:bg-green-600"
							href={"/orders/123"}
						>
							Pagar
						</Link>
					</div>
					{/* cart */}
					<div className="flex space-y-5 flex-col mt-5">
						{/* items */}
						{productsInCart.map((product) => (
							<div key={product.slug} className="flex">
								<Image
									src={`/products/${product.images[1]}`}
									alt={product.title}
									width={150}
									height={150}
									className="mr-5 rounded"
								/>
								<div>
									<p>{product.title}</p>
									<p>Valor unidad: ${product.price}</p>
									<p>Cantidad: 3</p>
									<p className="font-bold">Subtotal: ${product.price * 3}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
