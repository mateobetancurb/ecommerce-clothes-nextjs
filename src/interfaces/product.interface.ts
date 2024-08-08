export interface Product {
	id: string;
	description: string;
	category: object;
	creationAt: string;
	price: number;
	images: string[];
	title: string;
}

export interface CartProduct {
	id: string;
	slug: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}
