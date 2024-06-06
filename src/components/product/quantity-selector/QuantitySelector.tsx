"use client";

import { useState } from "react";

interface Props {
	quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
	const [counter, setCounter] = useState(quantity);

	const onQuantityChange = (value: number) => {
		if (counter + value < 1) return;

		if (counter + value > 5) return;

		setCounter(counter + value);
	};

	return (
		<section className="mb-5">
			<h2 className="font-bold mb-2">Cantidad</h2>
			<div className="flex items-center gap-4 ">
				<button
					onClick={() => onQuantityChange(+1)}
					className="hover:bg-green-300 rounded-full transition-all"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
				<span className="text-xl">{counter}</span>
				<button
					onClick={() => onQuantityChange(-1)}
					className="hover:bg-red-300 rounded-full transition-all"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
};
