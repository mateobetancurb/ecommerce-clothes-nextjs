export interface Product {
	id: string;
	title: string;
	price: number;
	category: string;
	images: string[];
	description: string;
	image: string;
}

export interface CartProduct {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}
