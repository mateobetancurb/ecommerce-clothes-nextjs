export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="bg-red-500">{children}</main>;
}
