import Link from "next/link";

export default function NewAccountPage() {
	return (
		<main className="flex flex-col min-h-screen pt-32 sm:pt-52">
			<h1 className="text-xl font-bold text-center mb-10">Crea tu cuenta</h1>

			<div className="flex flex-col">
				<label htmlFor="email">Nombre completo</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="text"
				/>
				<label htmlFor="email">Correo electrónico</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="email"
				/>

				<label htmlFor="email">Contraseña</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="email"
				/>

				<button className="btn-primary">Crear cuenta</button>

				<div className="flex items-center my-5">
					<div className="flex-1 border-t border-gray-500"></div>
					<div className="px-2 text-gray-800">O</div>
					<div className="flex-1 border-t border-gray-500"></div>
				</div>

				<Link href="/auth/login" className="btn-secondary text-center">
					Iniciar sesión
				</Link>
			</div>
		</main>
	);
}
