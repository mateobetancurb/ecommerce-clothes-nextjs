import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
];

export default function CartPage() {
	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title="Carrito de compras" className="mt-32 text-2xl" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					{/* cart */}
					<div className="flex space-y-5 flex-col mt-5">
						<Link
							href={"/"}
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
									<div className="grid grid-cols-2">
										<p>{product.title}</p>
										<p className="font-bold text-xl text-right">
											${product.price}
										</p>
									</div>
									<div className="flex items-center justify-between">
										<QuantitySelector quantity={3} />

										<button className="hover:bg-red-300 hover:p-2 transition-all rounded-full">
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
													d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* checkout */}
					<div className="bg-white space-y-5 h-fit rounded-xl md:mt-24 shadow-xl p-7">
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
								className="flex justify-center btn-primary"
								href={"/checkout/address"}
							>
								Pagar
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
