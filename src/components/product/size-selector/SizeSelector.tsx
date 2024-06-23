import type { Size } from "@/interfaces";

interface Props {
	selectedSize?: Size;
	availableSizes: Size[];
	onSizeChanged: (size: Size) => void;
}

export const SizeSelector = ({
	selectedSize,
	availableSizes,
	onSizeChanged,
}: Props) => {
	return (
		<div className="mb-10">
			<h3 className="font-bold mb-2">Tallas disponibles</h3>
			<div className="flex">
				{availableSizes.map((size) => (
					<button
						key={size}
						onClick={() => onSizeChanged(size)}
						className={`mx-2 hover:underline text-lg ${
							size === selectedSize
								? "bg-gray-200 transition-all font-bold p-1 rounded-sm"
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
