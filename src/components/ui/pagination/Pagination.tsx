import Link from "next/link";

interface Props {
	totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
	return (
		<div className="flex justify-center text-center mb-32 mt-10">
			<nav aria-label="Page navigation example">
				<ul className="flex list-style-none">
					<li className="page-item disabled">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
							href="#"
							aria-disabled="true"
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
									d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
								/>
							</svg>
						</Link>
					</li>
					<li className="page-item">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
							href="#"
						>
							1
						</Link>
					</li>
					<li className="page-item active">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
							href="#"
						>
							2 <span className="visually-hidden"></span>
						</Link>
					</li>
					<li className="page-item">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
							href="#"
						>
							3
						</Link>
					</li>
					<li className="page-item">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
							href="#"
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
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
								/>
							</svg>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
