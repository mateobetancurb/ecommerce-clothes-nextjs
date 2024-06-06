import type { Size } from "@/interfaces";

interface Props {
	selectedSize: Size;
	availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
	return (
		<div className="my-5 ">
			<h3 className="font-bold mb-4">Tallas disponibles</h3>
			<div className="flex">
				{availableSizes.map((size) => (
					<button
						key={size}
						className={`mx-2 hover:underline text-lg ${
							size === selectedSize
								? "bg-gray-200 font-bold p-1 rounded-sm"
								: ""
						}`}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
};
