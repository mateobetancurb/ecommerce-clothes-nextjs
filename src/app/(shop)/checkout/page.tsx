import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components";

export default function CheckoutPage() {
	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title="Verifica tu orden" className="mt-32 text-2xl" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					{/* cart */}
					<div className="flex space-y-5 flex-col mt-5">
						<Link
							href={"/cart"}
							className="mb-5 w-fit bg-black text-white transition-all flex items-center p-2 rounded-md gap-3"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
								/>
							</svg>
							Volver
						</Link>

						{/* items */}
						{/* {productsInCart.map((product) => (
							<div key={product.slug} className="flex">
								<Image
									src={`/products/${product.images[1]}`}
									alt={product.title}
									width={150}
									height={150}
									className="mr-5 rounded"
									priority
								/>
								<div>
									<p>{product.title}</p>
									<p>Valor unidad: ${product.price}</p>
									<p>Cantidad: 3</p>
									<p className="font-bold">Subtotal: ${product.price * 3}</p>
								</div>
							</div>
						))} */}
					</div>

					{/* checkout */}
					<div className="bg-white space-y-5 h-fit rounded-xl md:mt-24 shadow-xl p-7">
						<h2 className="text-xl font-bold mb-2">Dirección de entrega</h2>
						<div>
							<p>Sussana Correa</p>
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
						<div>
							<Link
								className="flex justify-center transition-all btn-primary"
								href={"/orders/123"}
							>
								Siguiente
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
