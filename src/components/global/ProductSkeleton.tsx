import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
	return (
		<div className="mt-32 md:mb-32 grid grid-cols-1 md:grid-cols-2 gap-3">
			<Skeleton className="h-[400px] w-[400px] mx-auto" />

			<div className="mt-10 mb-20 col-span-1 px-5">
				<Skeleton className="h-8 w-3/4 mb-4" />
				<Skeleton className="h-6 w-1/4 mb-6" />
				<Skeleton className="h-4 w-full mb-2" />
				<Skeleton className="h-4 w-full mb-2" />
				<Skeleton className="h-4 w-3/4" />
			</div>
		</div>
	);
}
