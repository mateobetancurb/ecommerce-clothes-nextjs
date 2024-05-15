export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="bg-blue-500">{children}</main>;
}
