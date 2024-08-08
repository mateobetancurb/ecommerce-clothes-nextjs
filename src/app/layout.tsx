import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: " Tienda de ropa 👕",
	description: "La mejor tienda de ropa del 🌎",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
