"use client";

import { useUIStore } from "@/store";
import Link from "next/link";

export const TopMenu = () => {
	const openMenu = useUIStore((state) => state.openSideMenu);

	return (
		<nav className="flex px-5 justify-between items-center w-full">
			<div>
				<Link href={"/"}>
					<span className="antialiased font-bold">Clothes</span>
				</Link>
			</div>

			<div className="hidden sm:block">
				<Link
					href={"/category/men"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
				>
					Hombres
				</Link>
				<Link
					href={"/category/women"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
				>
					Mujeres
				</Link>
				<Link
					href={"/category/kids"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
				>
					Niños
				</Link>
			</div>

			<div className="flex gap-5 items-center">
				<Link href={"/search"}>
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
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</Link>
				<Link href={"/cart"}>
					<div className="relative">
						<span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
							3
						</span>
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
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
						</svg>
					</div>
				</Link>
				<button
					onClick={openMenu}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
				>
					Menú
				</button>
			</div>
		</nav>
	);
};
