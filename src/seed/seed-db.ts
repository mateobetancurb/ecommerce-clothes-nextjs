import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
	// clean up the database before seeding
	await Promise.all([
		prisma.productImage.deleteMany(),
		prisma.product.deleteMany(),
		prisma.category.deleteMany(),
	]);

	// categories created in DB
	const { categories, products } = initialData;

	const categoriesData = categories.map((name) => ({ name }));

	await prisma.category.createMany({
		data: categoriesData,
	});

	const categoriesDB = await prisma.category.findMany();

	const categoriesMap = categoriesDB.reduce((map, category) => {
		map[category.name.toLowerCase()] = category.id;
		return map;
	}, {} as Record<string, string>);

	// products created in DB
	products.forEach(async (product) => {
		const { type, images, ...rest } = product;
		const dbProduct = await prisma.product.create({
			data: {
				// products
				...rest,
				categoryId: categoriesMap[type],

				// images
				ProductImage: {
					createMany: {
						data: images.map((image) => ({
							url: image,
						})),
					},
				},
			},
		});
	});

	console.log("seed executed!");
}

(() => {
	if (process.env.NODE_ENV === "production") return;
	main();
})();
