import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {
	return (
		<main className="flex flex-col min-h-screen pt-32 sm:pt-52">
			<h1 className="text-xl font-bold text-center mb-10">Ingresar</h1>

			<LoginForm />
		</main>
	);
}
