import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
	cart: CartProduct[];
	addProductToCart: (product: CartProduct) => void;
	getTotalItems: () => number;
	getSummaryInformation: () => {
		subTotal: number;
		taxes: number;
		total: number;
		totalItems: number;
	};
	updateProductQuantity: (product: CartProduct, quantity: number) => void;
	deleteProductFromCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
	persist(
		(set, get) => ({
			cart: [],
			getTotalItems: () => {
				const { cart } = get();
				return cart.reduce((acc, item) => acc + item.quantity, 0);
			},

			getSummaryInformation: () => {
				const { cart } = get();
				const subTotal = cart.reduce(
					(subTotal, product) => product.quantity * product.price + subTotal,
					0
				);
				const taxes = subTotal * 0.15;
				const total = subTotal + taxes;
				const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
				return {
					subTotal,
					taxes,
					total,
					totalItems,
				};
			},

			addProductToCart: (product: CartProduct) => {
				const { cart } = get();

				const productInCart = cart.some((item) => item.id === product.id);

				if (!productInCart) {
					set({ cart: [...cart, product] });
					return;
				}

				const updatedCartProducts = cart.map((item) => {
					if (item.id === product.id && item.size === product.size) {
						return {
							...item,
							quantity: item.quantity + product.quantity,
						};
					}
					return item;
				});
				set({ cart: updatedCartProducts });
			},

			updateProductQuantity: (product: CartProduct, quantity: number) => {
				const { cart } = get();

				const updatedCartProducts = cart.map((item) => {
					if (item.id === product.id && item.size === product.size) {
						return {
							...item,
							quantity: quantity,
						};
					}
					return item;
				});
				set({ cart: updatedCartProducts });
			},

			deleteProductFromCart(product: CartProduct) {
				const { cart } = get();
				const updatedCartProducts = cart.filter(
					(item) => item.id !== product.id || item.size !== product.size
				);
				set({ cart: updatedCartProducts });
			},

			totalPriceShoppingCart: () => {
				const { cart } = get();
				return cart.reduce((acc, item) => acc + item.price, 0);
			},
		}),
		{
			name: "shopping-cart",
		}
	)
);
