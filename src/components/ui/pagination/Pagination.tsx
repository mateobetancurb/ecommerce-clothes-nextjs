"use client";

import { generatePaginationNumbers } from "@/utils";
import Link from "next/link";
import { usePathname, useSearchParams, redirect } from "next/navigation";

interface Props {
	totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const pageString = searchParams.get("page") ?? 1;
	const currentPage = isNaN(+pageString) ? 1 : +pageString;

	if (currentPage < 1 || isNaN(+pageString)) {
		redirect(pathname);
	}

	const allPages = generatePaginationNumbers(currentPage, totalPages);

	const createPageUrl = (pageNumber: number | string) => {
		const params = new URLSearchParams();
		if (pageNumber === "...") {
			return `${pathname}?${params.toString()}`;
		}

		if (+pageNumber === 0) {
			return `${pathname}`;
		}

		if (+pageNumber > totalPages) {
			return `${pathname}?${params.toString()}`;
		}

		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<div className="flex justify-center text-center mb-32 mt-10">
			<nav aria-label="Page navigation example">
				<ul className="flex list-style-none">
					<li className="page-item disabled">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
							href={createPageUrl(currentPage - 1)}
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
					{allPages.map((page, index) => (
						<li key={page + "-" + index} className="page-item">
							<Link
								className={`page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${
									page === currentPage ? "font-bold bg-gray-400" : ""
								}`}
								href={createPageUrl(page)}
							>
								{page}
							</Link>
						</li>
					))}

					<li className="page-item">
						<Link
							className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
							href={createPageUrl(currentPage + 1)}
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
