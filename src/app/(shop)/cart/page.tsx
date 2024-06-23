import Link from "next/link";
import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummay } from "./ui/OrderSummay";

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
						<ProductsInCart />
					</div>

					<OrderSummay />
				</div>
			</div>
		</div>
	);
}
