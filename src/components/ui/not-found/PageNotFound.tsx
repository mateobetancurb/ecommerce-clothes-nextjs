import Link from "next/link";
import Image from "next/image";

export const PageNotFound = () => {
	return (
		<div className="flex-row w-full align-middle">
			<div className="">
				<Image
					src={"/imgs/starman_750x750.png"}
					height={350}
					width={350}
					className="mx-auto"
					alt="Not found image"
					priority
				/>
			</div>
			<div className="text-center px-5 mx-5">
				<h2 className="antialiased text-9xl">404</h2>
				<p className="font-semibold mb-5">
					Lo sentimos, esta categoría no existe
				</p>
				<Link
					href={"/"}
					className="bg-blue-500 px-4 py-2 rounded-md text-white font-normal hover:bg-blue-700 transition-all "
				>
					Volver
				</Link>
			</div>
		</div>
	);
};
